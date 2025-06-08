#!/usr/bin/env tsx
/**
 * Database setup utility
 * Generates initial migration from current schema and sets up the database
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

function setupDatabase() {
  console.log('🚀 Setting up database migration system...');
  
  try {
    // Create migrations directory if it doesn't exist
    const migrationsDir = join(process.cwd(), 'database', 'migrations');
    if (!existsSync(migrationsDir)) {
      mkdirSync(migrationsDir, { recursive: true });
      console.log('📁 Created migrations directory');
    }
    
    // Generate initial migration from current schema
    console.log('📝 Generating initial migration...');
    execSync('npx drizzle-kit generate', { stdio: 'inherit' });
    
    console.log('✅ Database migration system setup complete!');
    console.log('\nNext steps:');
    console.log('1. Review the generated migration in database/migrations/');
    console.log('2. Run: npm run db:migrate');
    console.log('3. Check status: npm run db:status\n');
    
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();

