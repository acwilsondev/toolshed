#!/usr/bin/env node

/**
 * Epic Test Runner
 * 
 * Allows running individual epics or all epics with customizable options
 * Usage:
 *   npx tsx test/e2e/tests/epics/run-epics.ts [epic-number|all] [options]
 *   
 * Examples:
 *   npx tsx test/e2e/tests/epics/run-epics.ts 1          # Run Epic 1 only
 *   npx tsx test/e2e/tests/epics/run-epics.ts all        # Run all epics
 *   npx tsx test/e2e/tests/epics/run-epics.ts 2 --headless # Run Epic 2 in headless mode
 */

import { spawn } from 'child_process';
import { join } from 'path';

interface RunOptions {
  epic?: string;
  headless?: boolean;
  verbose?: boolean;
  timeout?: number;
}

const EPIC_FILES = {
  '1': 'epic1-auth.test.ts',
  '2': 'epic2-tool-management.test.ts', 
  '3': 'epic3-tool-discovery.test.ts'
};

function parseArgs(): RunOptions {
  const args = process.argv.slice(2);
  const options: RunOptions = {};
  
  // First argument is epic number or 'all'
  if (args[0] && args[0] !== '--headless' && args[0] !== '--verbose') {
    options.epic = args[0];
  }
  
  // Parse flags
  if (args.includes('--headless')) {
    options.headless = true;
  }
  
  if (args.includes('--verbose')) {
    options.verbose = true;
  }
  
  const timeoutIndex = args.indexOf('--timeout');
  if (timeoutIndex !== -1 && args[timeoutIndex + 1]) {
    options.timeout = parseInt(args[timeoutIndex + 1], 10);
  }
  
  return options;
}

function runTest(testFile: string, options: RunOptions): Promise<number> {
  return new Promise((resolve, reject) => {
    const vitestArgs = ['test', testFile];
    
    if (options.verbose) {
      vitestArgs.push('--reporter=verbose');
    }
    
    if (options.timeout) {
      vitestArgs.push('--testTimeout', options.timeout.toString());
    }
    
    const env = { ...process.env };
    if (options.headless) {
      env.HEADLESS = 'true';
    }
    
    console.log(`\n🧪 Running ${testFile}...`);
    console.log(`Command: npm ${vitestArgs.join(' ')}`);
    if (options.headless) {
      console.log('🚀 Running in headless mode');
    }
    
    const child = spawn('npm', vitestArgs, {
      stdio: 'inherit',
      env,
      cwd: process.cwd()
    });
    
    child.on('close', (code) => {
      resolve(code || 0);
    });
    
    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  const options = parseArgs();
  
  console.log('🎯 Epic Test Runner');
  console.log('==================');
  
  if (!options.epic) {
    console.log('Usage: npx tsx run-epics.ts [epic-number|all] [options]');
    console.log('\nAvailable epics:');
    Object.entries(EPIC_FILES).forEach(([num, file]) => {
      console.log(`  ${num}: ${file}`);
    });
    console.log('\nOptions:');
    console.log('  --headless    Run in headless mode');
    console.log('  --verbose     Verbose output');
    console.log('  --timeout N   Set test timeout in ms');
    process.exit(1);
  }
  
  const testDir = join(__dirname);
  let testFiles: string[] = [];
  
  if (options.epic === 'all') {
    testFiles = Object.values(EPIC_FILES).map(file => join(testDir, file));
    console.log(`Running all ${testFiles.length} epics`);
  } else if (EPIC_FILES[options.epic as keyof typeof EPIC_FILES]) {
    const file = EPIC_FILES[options.epic as keyof typeof EPIC_FILES];
    testFiles = [join(testDir, file)];
    console.log(`Running Epic ${options.epic}: ${file}`);
  } else {
    console.error(`❌ Unknown epic: ${options.epic}`);
    console.log('Available epics:', Object.keys(EPIC_FILES).join(', '));
    process.exit(1);
  }
  
  let totalPassed = 0;
  let totalFailed = 0;
  
  for (const testFile of testFiles) {
    try {
      const exitCode = await runTest(testFile, options);
      if (exitCode === 0) {
        totalPassed++;
        console.log(`✅ ${testFile} completed successfully`);
      } else {
        totalFailed++;
        console.log(`❌ ${testFile} failed with exit code ${exitCode}`);
      }
    } catch (error) {
      totalFailed++;
      console.error(`❌ Error running ${testFile}:`, error.message);
    }
  }
  
  console.log('\n📊 Test Results Summary');
  console.log('=======================');
  console.log(`✅ Passed: ${totalPassed}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log(`📁 Total: ${totalPassed + totalFailed}`);
  
  if (totalFailed > 0) {
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed!');
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

