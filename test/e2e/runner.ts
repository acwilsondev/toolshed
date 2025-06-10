#!/usr/bin/env tsx

import { WebDriver } from 'selenium-webdriver';
import { WebDriverFactory, BrowserConfig } from './framework/BasePageFactory';
import { NavigationPageObject } from './pages/NavigationPageObject';

/**
 * Simple E2E Test Runner
 * Basic test runner for Selenium E2E tests
 */
class SimpleE2ERunner {
  private driver: WebDriver | null = null;
  private config: BrowserConfig;
  
  constructor() {
    this.config = {
      browser: (process.env.BROWSER as 'chrome' | 'firefox') || 'chrome',
      headless: process.env.CI === 'true' || process.env.HEADLESS === 'true',
      windowSize: { width: 1920, height: 1080 },
      timeout: 15000
    };
  }
  
  private async startDockerCompose(): Promise<void> {
    console.log('🐳 Starting Docker Compose environment...');
    const { execSync } = require('child_process');
    execSync('docker-compose up -d', { stdio: 'inherit' });
    
    // Wait for services to be healthy
    console.log('⌛ Waiting for services to be healthy...');
    const maxAttempts = 30; // Increased to account for app startup
    let attempts = 0;
    
    // Initial delay to let containers start
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    while (attempts < maxAttempts) {
      try {
        // Get Docker Compose status
        const psOutput = execSync('docker-compose ps -a').toString();
        console.log('Docker Compose status:', psOutput);

        // Check if any containers exited
        if (psOutput.includes('Exit')) {
          throw new Error('Container exited unexpectedly');
        }

        // Check if db is healthy
        const dbRunning = psOutput.includes('toolshed-db');
        const dbHealthy = psOutput.includes('db') && psOutput.includes('(healthy)');
        if (!dbRunning || !dbHealthy) {
          throw new Error('Database not yet healthy');
        }

        // Check if app is running and healthy
        const appRunning = psOutput.includes('toolshed-app');
        const appHealthy = psOutput.includes('app') && psOutput.includes('(healthy)');
        if (!appRunning) {
          throw new Error('App container not running');
        } else if (!appHealthy) {
          throw new Error('App container starting but not yet healthy');
        }

        // Try the health endpoint
        try {
          const response = await fetch('http://localhost:3000/api/health');
          if (response.ok) {
            console.log('✅ Docker Compose environment is ready');
            return;
          }
          throw new Error(`Health check responded with status ${response.status}`);
        } catch (e) {
          throw new Error(`Health check failed: ${e.message}`);
        }
      } catch (error) {
        if (attempts + 1 === maxAttempts) {
          console.error('Final error:', error.message);
        } else {
          console.log(`Attempt ${attempts + 1}/${maxAttempts}: ${error.message}`);
          await new Promise(resolve => setTimeout(resolve, 5000)); // Increased delay between checks
        }
      }
      attempts++;
    }
    
    throw new Error('Services did not become healthy within the timeout period');
  }
  
  private async stopDockerCompose(): Promise<void> {
    console.log('🛑 Stopping Docker Compose environment...');
    const { execSync } = require('child_process');
    execSync('docker-compose down', { stdio: 'inherit' });
    console.log('✅ Docker Compose environment stopped');
  }

  async initialize(): Promise<void> {
    await this.startDockerCompose();
    console.log(`🚀 Initializing E2E tests with ${this.config.browser} (headless: ${this.config.headless})`);
    this.driver = await WebDriverFactory.createDriver(this.config);
  }
  
  async runBasicTests(): Promise<void> {
    if (!this.driver) {
      throw new Error('Driver not initialized');
    }
    
    console.log('\n📋 Running Basic E2E Tests');
    console.log('==========================');
    
    let passed = 0;
    let failed = 0;
    
    // Create a single navigation page object to reuse
    const navPage = new NavigationPageObject(this.driver);
    
    // Test 1: Home page loads
    try {
      console.log('🔄 Test 1: Home page loads');
      await navPage.navigate();
      await navPage.waitForPageLoad();
      
      const title = await navPage.getTitle();
      const url = await navPage.getCurrentUrl();
      
      if (title && url.includes('localhost')) {
        console.log('✅ Test 1 PASSED: Home page loaded successfully');
        passed++;
      } else {
        console.log('❌ Test 1 FAILED: Home page did not load properly');
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test 1 FAILED: ${error}`);
      failed++;
    }
    
    // Test 2: Navigation elements exist (reuse existing page load)
    try {
      console.log('🔄 Test 2: Navigation elements exist');
      
      // Check if we need to reload the page
      const currentUrl = await this.driver.getCurrentUrl();
      if (!currentUrl.includes('localhost')) {
        await navPage.navigate();
        await navPage.waitForPageLoad();
      }
      
      const navLinks = await navPage.getVisibleNavLinks();
      
      if (navLinks.length > 0) {
        console.log(`✅ Test 2 PASSED: Found ${navLinks.length} navigation links: ${navLinks.join(', ')}`);
        passed++;
      } else {
        console.log('❌ Test 2 FAILED: No navigation links found');
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test 2 FAILED: ${error}`);
      failed++;
    }
    
    // Test 3: Responsive design check
    try {
      console.log('🔄 Test 3: Responsive design check');
      
      // Validate session is still active
      await this.validateSession();
      
      // Check if we need to reload the page
      const currentUrl = await this.driver.getCurrentUrl();
      if (!currentUrl.includes('localhost')) {
        await navPage.navigate();
        await navPage.waitForPageLoad();
      }
      
      const responsiveCheck = await navPage.checkResponsiveNavigation();
      
      if (responsiveCheck.desktop || responsiveCheck.mobile) {
        console.log('✅ Test 3 PASSED: Responsive navigation working');
        passed++;
      } else {
        console.log('❌ Test 3 FAILED: Responsive navigation not working');
        failed++;
      }
    } catch (error) {
      console.log(`❌ Test 3 FAILED: ${error}`);
      failed++;
    }
    
    // Summary
    console.log('\n📊 Test Results');
    console.log('===============');
    console.log(`Total Tests: ${passed + failed}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);
    
    if (failed > 0) {
      throw new Error(`${failed} test(s) failed`);
    }
  }
  
  /**
   * Validate that the WebDriver session is still active
   */
  private async validateSession(): Promise<void> {
    if (!this.driver) {
      throw new Error('Driver not initialized');
    }
    
    try {
      // Try to get the current URL to validate session
      await this.driver.getCurrentUrl();
    } catch (error) {
      throw new Error(`WebDriver session is invalid: ${error}`);
    }
  }
  
  async cleanup(): Promise<void> {
    if (this.driver) {
      try {
        await this.driver.quit();
      } catch (error) {
        console.log('Warning: Error during driver cleanup:', error);
      }
      this.driver = null;
    }
    await this.stopDockerCompose();
  }
  
  async run(): Promise<void> {
    try {
      await this.initialize();
      await this.runBasicTests();
      console.log('\n🎉 All tests passed!');
    } catch (error) {
      console.error('\n💥 Test run failed:', error);
      process.exit(1);
    } finally {
      await this.cleanup();
    }
  }
}

// Run tests if called directly
if (require.main === module) {
  const runner = new SimpleE2ERunner();
  runner.run().catch(console.error);
}

export { SimpleE2ERunner };

