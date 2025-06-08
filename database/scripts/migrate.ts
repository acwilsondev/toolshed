#!/usr/bin/env tsx
/**
 * Migration CLI script
 * Usage: npm run db:migrate
 */

import { MigrationCLI } from '../migrationManager';

const cli = new MigrationCLI();
const command = process.argv[2] || 'migrate';

cli.run(command).catch((error) => {
  console.error('Migration error:', error);
  process.exit(1);
});

