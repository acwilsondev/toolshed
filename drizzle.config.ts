import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// Load environment variables
config();

export default defineConfig({
  // Database connection
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/toolshed_dev'
  },
  
  // Schema configuration
  schema: './shared/schema.ts',
  
  // Migration configuration
  out: './database/migrations',
  
  // Additional options
  verbose: true,
  strict: true,
  
  // Migration table name (optional, defaults to '__drizzle_migrations')
  migrations: {
    table: 'drizzle_migrations',
    schema: 'public'
  }
});

