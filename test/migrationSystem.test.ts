import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import {
  DatabaseMigrationManager,
  MigrationManagerFactory,
  ProductionMigrationStrategy,
  DevelopmentMigrationStrategy,
  MigrationCLI,
  type MigrationInfo,
  type MigrationResult
} from '../database/migrationManager'

// Mock external dependencies
vi.mock('pg', () => ({
  Pool: vi.fn().mockImplementation(() => ({
    query: vi.fn().mockResolvedValue({ rows: [] }),
    end: vi.fn().mockResolvedValue(undefined)
  }))
}));

vi.mock('drizzle-orm/node-postgres', () => ({
  drizzle: vi.fn().mockReturnValue({
    transaction: vi.fn().mockImplementation((callback) => callback({})),
    query: vi.fn().mockResolvedValue([])
  })
}));

vi.mock('drizzle-orm/node-postgres/migrator', () => ({
  migrate: vi.fn().mockResolvedValue(undefined)
}));

vi.mock('fs/promises', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs/promises')>();
  return {
    ...actual,
    readdir: vi.fn().mockResolvedValue(['0001_initial.sql', '0002_add_users.sql']),
    readFile: vi.fn().mockResolvedValue('CREATE TABLE test (id INTEGER);')
  };
});

vi.mock('dotenv', () => ({
  config: vi.fn()
}));

// Mock environment variables
process.env.DATABASE_URL = 'postgresql://localhost:5432/test_db';

describe('Database Migration System', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('MigrationManagerFactory', () => {
    it('should create ProductionMigrationStrategy for production environment', () => {
      const strategy = MigrationManagerFactory.create('production');
      expect(strategy).toBeInstanceOf(ProductionMigrationStrategy);
    });

    it('should create ProductionMigrationStrategy for staging environment', () => {
      const strategy = MigrationManagerFactory.create('staging');
      expect(strategy).toBeInstanceOf(ProductionMigrationStrategy);
    });

    it('should create DevelopmentMigrationStrategy for development environment', () => {
      const strategy = MigrationManagerFactory.create('development');
      expect(strategy).toBeInstanceOf(DevelopmentMigrationStrategy);
    });

    it('should create DevelopmentMigrationStrategy for test environment', () => {
      const strategy = MigrationManagerFactory.create('test');
      expect(strategy).toBeInstanceOf(DevelopmentMigrationStrategy);
    });

    it('should default to DevelopmentMigrationStrategy for unknown environment', () => {
      const strategy = MigrationManagerFactory.create('unknown');
      expect(strategy).toBeInstanceOf(DevelopmentMigrationStrategy);
    });

    it('should throw error when DATABASE_URL is not provided', () => {
      delete process.env.DATABASE_URL;
      expect(() => MigrationManagerFactory.create()).toThrow('DATABASE_URL environment variable is required');
      process.env.DATABASE_URL = 'postgresql://localhost:5432/test_db';
    });
  });

  describe('ProductionMigrationStrategy', () => {
    let strategy: ProductionMigrationStrategy;

    beforeEach(() => {
      strategy = new ProductionMigrationStrategy('postgresql://localhost:5432/test_db', 'production');
    });

    afterEach(async () => {
      await strategy.close();
    });

    it('should validate database connection successfully', async () => {
      const isValid = await strategy.validate();
      expect(isValid).toBe(true);
    });

    it('should execute migrations with safety checks', async () => {
      // Mock successful validation
      vi.spyOn(strategy, 'validate').mockResolvedValue(true);
      
      const result = await strategy.execute();
      
      expect(result.success).toBe(true);
      expect(result.executionTime).toBeGreaterThan(0);
      expect(result.errors).toHaveLength(0);
    });

    it('should fail execution when validation fails', async () => {
      // Mock failed validation
      vi.spyOn(strategy, 'validate').mockResolvedValue(false);
      
      const result = await strategy.execute();
      
      expect(result.success).toBe(false);
      expect(result.errors).toContain('Pre-migration validation failed');
    });

    it('should limit migrations per run in production', async () => {
      // Mock many pending migrations
      vi.spyOn(strategy as any, 'getPendingMigrations').mockResolvedValue(
        Array.from({ length: 10 }, (_, i) => ({
          id: `migration_${i}`,
          name: `migration_${i}.sql`,
          path: `/migrations/migration_${i}.sql`,
          hash: 'hash123',
          status: 'pending'
        }))
      );
      
      vi.spyOn(strategy, 'validate').mockResolvedValue(true);
      
      const result = await strategy.execute();
      
      expect(result.warnings).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Found 10 pending migrations. Limited to 5 per run in production.')
        ])
      );
    });

    it('should create backup before migration', async () => {
      vi.spyOn(strategy, 'validate').mockResolvedValue(true);
      
      const result = await strategy.execute();
      
      expect(result.warnings).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Backup created:')
        ])
      );
    });

    it('should detect advisory locks during validation', async () => {
      // Mock the pool.query to return locks
      const mockPool = {
        query: vi.fn()
          .mockResolvedValueOnce({ rows: [] }) // First call for SELECT 1
          .mockResolvedValueOnce({ rows: [{ lock_count: '1' }] }), // Second call for locks check
        end: vi.fn().mockResolvedValue(undefined)
      };
      
      // Replace the pool in strategy
      (strategy as any).pool = mockPool;
      
      const isValid = await strategy.validate();
      expect(isValid).toBe(false);
    });
  });

  describe('DevelopmentMigrationStrategy', () => {
    let strategy: DevelopmentMigrationStrategy;

    beforeEach(() => {
      strategy = new DevelopmentMigrationStrategy('postgresql://localhost:5432/test_db', 'development');
    });

    afterEach(async () => {
      await strategy.close();
    });

    it('should execute migrations without restrictions', async () => {
      const result = await strategy.execute();
      
      expect(result.success).toBe(true);
      expect(result.executionTime).toBeGreaterThan(0);
    });

    it('should validate with simplified checks', async () => {
      const isValid = await strategy.validate();
      expect(isValid).toBe(true);
    });

    it('should handle validation failure gracefully', async () => {
      // Mock database connection failure
      const mockPool = {
        query: vi.fn().mockRejectedValue(new Error('Connection failed')),
        end: vi.fn().mockResolvedValue(undefined)
      };
      
      (strategy as any).pool = mockPool;
      
      const isValid = await strategy.validate();
      expect(isValid).toBe(false);
    });

    it('should handle migration execution errors', async () => {
      // Mock migration failure
      const { migrate } = await import('drizzle-orm/node-postgres/migrator');
      vi.mocked(migrate).mockRejectedValueOnce(new Error('Migration failed'));
      
      const result = await strategy.execute();
      
      expect(result.success).toBe(false);
      expect(result.errors).toEqual(
        expect.arrayContaining([
          expect.stringContaining('Migration failed')
        ])
      );
    });
  });

  describe('DatabaseMigrationManager', () => {
    let manager: DatabaseMigrationManager;
    let mockStrategy: any;

    beforeEach(() => {
      mockStrategy = {
        execute: vi.fn().mockResolvedValue({
          success: true,
          migrationsApplied: 2,
          errors: [],
          warnings: [],
          executionTime: 150,
          appliedMigrations: ['0001_initial.sql', '0002_add_users.sql']
        }),
        getStatus: vi.fn().mockResolvedValue([
          {
            id: '0001_initial',
            name: '0001_initial.sql',
            path: '/migrations/0001_initial.sql',
            hash: 'hash123',
            status: 'applied',
            appliedAt: new Date('2023-01-01')
          }
        ]),
        validate: vi.fn().mockResolvedValue(true),
        close: vi.fn().mockResolvedValue(undefined)
      };
      
      manager = new DatabaseMigrationManager(mockStrategy);
    });

    it('should execute migrations and display success message', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      
      const result = await manager.migrate();
      
      expect(result.success).toBe(true);
      expect(result.migrationsApplied).toBe(2);
      expect(consoleSpy).toHaveBeenCalledWith('🚀 Starting database migration...');
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('✅ Migration completed successfully in 150ms')
      );
      expect(consoleSpy).toHaveBeenCalledWith('📈 Applied 2 migration(s)');
      
      consoleSpy.mockRestore();
    });

    it('should display failure message when migration fails', async () => {
      mockStrategy.execute.mockResolvedValue({
        success: false,
        migrationsApplied: 0,
        errors: ['Database connection failed'],
        warnings: [],
        executionTime: 50,
        appliedMigrations: []
      });
      
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      
      const result = await manager.migrate();
      
      expect(result.success).toBe(false);
      expect(consoleSpy).toHaveBeenCalledWith('❌ Migration failed');
      expect(consoleSpy).toHaveBeenCalledWith('  - Database connection failed');
      
      consoleSpy.mockRestore();
    });

    it('should display warnings when present', async () => {
      mockStrategy.execute.mockResolvedValue({
        success: true,
        migrationsApplied: 1,
        errors: [],
        warnings: ['Backup created: backup_123'],
        executionTime: 100,
        appliedMigrations: ['0001_initial.sql']
      });
      
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      
      await manager.migrate();
      
      expect(consoleSpy).toHaveBeenCalledWith('⚠️  Warnings:');
      expect(consoleSpy).toHaveBeenCalledWith('  - Backup created: backup_123');
      
      consoleSpy.mockRestore();
    });

    it('should get migration status', async () => {
      const status = await manager.status();
      
      expect(status).toHaveLength(1);
      expect(status[0].name).toBe('0001_initial.sql');
      expect(status[0].status).toBe('applied');
    });

    it('should validate migration readiness', async () => {
      const isValid = await manager.validate();
      expect(isValid).toBe(true);
    });

    it('should always close strategy after operations', async () => {
      await manager.migrate();
      expect(mockStrategy.close).toHaveBeenCalled();
      
      vi.clearAllMocks();
      
      await manager.status();
      expect(mockStrategy.close).toHaveBeenCalled();
      
      vi.clearAllMocks();
      
      await manager.validate();
      expect(mockStrategy.close).toHaveBeenCalled();
    });
  });

  describe('MigrationCLI', () => {
    let cli: MigrationCLI;
    let mockManager: any;
    let consoleSpy: any;
    let processExitSpy: any;

    beforeEach(() => {
      mockManager = {
        migrate: vi.fn().mockResolvedValue({
          success: true,
          migrationsApplied: 1,
          errors: [],
          warnings: [],
          executionTime: 100,
          appliedMigrations: ['0001_initial.sql']
        }),
        status: vi.fn().mockResolvedValue([
          {
            id: '0001_initial',
            name: '0001_initial.sql',
            status: 'applied',
            appliedAt: new Date('2023-01-01T10:00:00Z')
          },
          {
            id: '0002_add_users',
            name: '0002_add_users.sql',
            status: 'pending'
          }
        ]),
        validate: vi.fn().mockResolvedValue(true)
      };
      
      cli = new MigrationCLI();
      (cli as any).manager = mockManager;
      
      consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      processExitSpy = vi.spyOn(process, 'exit').mockImplementation((): never => {
        throw new Error('process.exit called');
      });
    });

    afterEach(() => {
      consoleSpy.mockRestore();
      processExitSpy.mockRestore();
    });

    it('should run migrations successfully', async () => {
      try {
        await cli.run('migrate');
      } catch (error) {
        // Expected since process.exit throws in our mock
      }
      
      expect(mockManager.migrate).toHaveBeenCalled();
      expect(processExitSpy).toHaveBeenCalledWith(0);
    });

    it('should exit with error code when migration fails', async () => {
      mockManager.migrate.mockResolvedValue({ success: false });
      
      try {
        await cli.run('migrate');
      } catch (error) {
        // Expected since process.exit throws in our mock
      }
      
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it('should display migration status', async () => {
      await cli.run('status');
      
      expect(consoleSpy).toHaveBeenCalledWith('📊 Migration Status:');
      expect(consoleSpy).toHaveBeenCalledWith('==================');
      expect(consoleSpy).toHaveBeenCalledWith('✅ 0001_initial.sql (applied: 2023-01-01T10:00:00.000Z)');
      expect(consoleSpy).toHaveBeenCalledWith('⏳ 0002_add_users.sql');
    });

    it('should display message when no migrations found', async () => {
      mockManager.status.mockResolvedValue([]);
      
      await cli.run('status');
      
      expect(consoleSpy).toHaveBeenCalledWith('No migrations found.');
    });

    it('should validate migrations successfully', async () => {
      try {
        await cli.run('validate');
      } catch (error) {
        // Expected since process.exit throws in our mock
      }
      
      expect(consoleSpy).toHaveBeenCalledWith('🔍 Validating migration readiness...');
      expect(consoleSpy).toHaveBeenCalledWith('✅ Migration validation passed');
      expect(processExitSpy).toHaveBeenCalledWith(0);
    });

    it('should handle validation failure', async () => {
      mockManager.validate.mockResolvedValue(false);
      
      try {
        await cli.run('validate');
      } catch (error) {
        // Expected since process.exit throws in our mock
      }
      
      expect(consoleSpy).toHaveBeenCalledWith('❌ Migration validation failed');
      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it('should show help for unknown commands', async () => {
      await cli.run('unknown');
      
      expect(consoleSpy).toHaveBeenCalledWith('\n🛠️  Database Migration Manager\n');
      expect(consoleSpy).toHaveBeenCalledWith('Available commands:');
      expect(consoleSpy).toHaveBeenCalledWith('  migrate   - Run pending migrations');
      expect(consoleSpy).toHaveBeenCalledWith('  status    - Show migration status');
      expect(consoleSpy).toHaveBeenCalledWith('  validate  - Validate migration readiness');
    });
  });

  describe('Error Handling', () => {
    it('should handle database connection errors gracefully', async () => {
      const strategy = new DevelopmentMigrationStrategy('postgresql://localhost:5432/test_db', 'development');
      
      // Mock migrate to throw an error
      const { migrate } = await import('drizzle-orm/node-postgres/migrator');
      vi.mocked(migrate).mockRejectedValueOnce(new Error('Connection failed'));
      
      const result = await strategy.execute();
      
      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('Connection failed');
      
      await strategy.close();
    });

    it('should handle missing migration files gracefully', async () => {
      const { readdir } = await import('fs/promises');
      vi.mocked(readdir).mockRejectedValue(new Error('Directory not found'));
      
      const strategy = new ProductionMigrationStrategy('postgresql://localhost:5432/test_db', 'production');
      
      // Should not throw, but handle gracefully
      const status = await (strategy as any).getAllMigrationFiles();
      expect(status).toEqual([]);
      
      await strategy.close();
    });
  });

  describe('Integration with OOP Design Patterns', () => {
    it('should follow Strategy pattern correctly', () => {
      const productionStrategy = MigrationManagerFactory.create('production');
      const developmentStrategy = MigrationManagerFactory.create('development');
      
      expect(productionStrategy).toBeInstanceOf(ProductionMigrationStrategy);
      expect(developmentStrategy).toBeInstanceOf(DevelopmentMigrationStrategy);
      
      // Both should implement the same interface
      expect(typeof productionStrategy.execute).toBe('function');
      expect(typeof productionStrategy.validate).toBe('function');
      expect(typeof productionStrategy.getStatus).toBe('function');
      
      expect(typeof developmentStrategy.execute).toBe('function');
      expect(typeof developmentStrategy.validate).toBe('function');
      expect(typeof developmentStrategy.getStatus).toBe('function');
    });

    it('should follow Facade pattern in DatabaseMigrationManager', () => {
      const manager = new DatabaseMigrationManager();
      
      // Manager should provide simple interface to complex migration system
      expect(typeof manager.migrate).toBe('function');
      expect(typeof manager.status).toBe('function');
      expect(typeof manager.validate).toBe('function');
    });

    it('should follow Factory pattern in MigrationManagerFactory', () => {
      // Factory should create appropriate strategy based on environment
      const prodStrategy = MigrationManagerFactory.create('production');
      const devStrategy = MigrationManagerFactory.create('development');
      
      expect(prodStrategy.constructor.name).toBe('ProductionMigrationStrategy');
      expect(devStrategy.constructor.name).toBe('DevelopmentMigrationStrategy');
    });
  });
});

