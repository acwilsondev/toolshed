#!/usr/bin/env tsx

import { WebDriver } from 'selenium-webdriver';
import { WebDriverFactory, BrowserConfig } from './framework/BasePageFactory';

/**
 * Demo E2E Test Runner
 * Demonstrates Selenium framework with a simple test
 */
class DemoE2ERunner {
  private driver: WebDriver | null = null;
  private config: BrowserConfig;
  
  constructor() {
    this.config = {
      browser: (process.env.BROWSER as 'chrome' | 'firefox') || 'chrome',
      headless: process.env.CI === 'true' || process.env.HEADLESS === 'true',
      windowSize: { width: 1920, height: 1080 },
      timeout: 10000
    };
  }
  
  async initialize(): Promise<void> {
    console.log(`🚀 Demo: Initializing E2E tests with ${this.config.browser} (headless: ${this.config.headless})`);
    this.driver = await WebDriverFactory.createDriver(this.config);
  }
  
  async runDemoTests(): Promise<void> {
    if (!this.driver) {
      throw new Error('Driver not initialized');
    }
    
    console.log('\n🎭 Demo E2E Tests');
    console.log('=================');
    
    let passed = 0;
    let failed = 0;
    
    // Test 1: Google homepage loads (doesn't require local app)
    try {
      console.log('🔄 Demo Test 1: Navigate to Google and verify title');
      await this.driver.get('https://www.google.com');
      
      // Wait for page to load
      await this.driver.wait(async () => {
        const title = await this.driver!.getTitle();
        return title.length > 0;
      }, 10000);
      
      const title = await this.driver.getTitle();
      
      if (title.toLowerCase().includes('google')) {
        console.log(`✅ Demo Test 1 PASSED: Google page loaded with title: "${title}"`);
        passed++;
      } else {
        console.log(`❌ Demo Test 1 FAILED: Unexpected title: "${title}"`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ Demo Test 1 FAILED: ${error}`);
      failed++;
    }
    
    // Test 2: Window resize test
    try {
      console.log('🔄 Demo Test 2: Test responsive window resizing');
      
      // Test desktop size
      await this.driver.manage().window().setRect({ width: 1920, height: 1080 });
      await this.driver.sleep(500);
      
      const desktopSize = await this.driver.manage().window().getRect();
      
      // Test mobile size
      await this.driver.manage().window().setRect({ width: 375, height: 667 });
      await this.driver.sleep(500);
      
      const mobileSize = await this.driver.manage().window().getRect();
      
      if (desktopSize.width > mobileSize.width) {
        console.log('✅ Demo Test 2 PASSED: Window resizing works correctly');
        passed++;
      } else {
        console.log('❌ Demo Test 2 FAILED: Window resizing not working as expected');
        failed++;
      }
      
      // Reset to desktop
      await this.driver.manage().window().setRect({ width: 1920, height: 1080 });
    } catch (error) {
      console.log(`❌ Demo Test 2 FAILED: ${error}`);
      failed++;
    }
    
    // Test 3: Screenshot capability
    try {
      console.log('🔄 Demo Test 3: Test screenshot capability');
      
      const screenshot = await this.driver.takeScreenshot();
      
      if (screenshot && screenshot.length > 0) {
        console.log('✅ Demo Test 3 PASSED: Screenshot captured successfully');
        console.log(`   Screenshot size: ${screenshot.length} bytes`);
        passed++;
      } else {
        console.log('❌ Demo Test 3 FAILED: Screenshot capture failed');
        failed++;
      }
    } catch (error) {
      console.log(`❌ Demo Test 3 FAILED: ${error}`);
      failed++;
    }
    
    // Summary
    console.log('\n📊 Demo Test Results');
    console.log('====================');
    console.log(`Total Tests: ${passed + failed}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);
    
    if (failed > 0) {
      console.log('\n⚠️  Some demo tests failed, but the Selenium framework is working!');
    } else {
      console.log('\n🎉 All demo tests passed! Selenium framework is working perfectly!');
    }
  }
  
  async cleanup(): Promise<void> {
    if (this.driver) {
      await this.driver.quit();
      this.driver = null;
    }
  }
  
  async run(): Promise<void> {
    try {
      await this.initialize();
      await this.runDemoTests();
    } catch (error) {
      console.error('\n💥 Demo test run failed:', error);
      process.exit(1);
    } finally {
      await this.cleanup();
    }
  }
}

// Run demo if called directly
if (require.main === module) {
  const runner = new DemoE2ERunner();
  runner.run().catch(console.error);
}

export { DemoE2ERunner };

