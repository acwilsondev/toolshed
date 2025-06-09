import { WebDriver } from 'selenium-webdriver';
import { WebDriverFactory, BrowserConfig } from '../../framework/BasePageFactory';
import { HomePageObject } from '../../pages/HomePageObject';
import { LoginPageObject } from '../../pages/LoginPageObject';
import { BrowsePageObject } from '../../pages/BrowsePageObject';
import { ProfilePageObject } from '../../pages/ProfilePageObject';

/**
 * Shared test configuration and setup for Epic E2E tests
 */
export interface TestContext {
  driver: WebDriver;
  homePage: HomePageObject;
  loginPage: LoginPageObject;
  browsePage: BrowsePageObject;
  profilePage: ProfilePageObject;
}

export const config: BrowserConfig = {
  browser: 'chrome',
  headless: process.env.CI === 'true' || process.env.HEADLESS === 'true',
  windowSize: { width: 1920, height: 1080 },
  timeout: 20000
};

// Test data for consistent testing across epics
export const testUser = {
  name: 'John Smith',
  email: 'john.smith.test@example.com',
  password: 'TestPassword123!',
  neighborhood: 'Test Neighborhood',
  contactMethod: 'email'
};

export const secondTestUser = {
  name: 'Jane Doe', 
  email: 'jane.doe.test@example.com',
  password: 'SecurePass456!',
  neighborhood: 'Another Neighborhood',
  contactMethod: 'phone'
};

/**
 * Initialize test context with driver and page objects
 */
export async function initializeTestContext(): Promise<TestContext> {
  const driver = await WebDriverFactory.createDriver(config);
  
  return {
    driver,
    homePage: new HomePageObject(driver),
    loginPage: new LoginPageObject(driver),
    browsePage: new BrowsePageObject(driver),
    profilePage: new ProfilePageObject(driver)
  };
}

/**
 * Cleanup test context
 */
export async function cleanupTestContext(context: TestContext): Promise<void> {
  if (context.driver) {
    await context.driver.quit();
  }
}

/**
 * Reset to home page before each test
 */
export async function resetToHomePage(context: TestContext): Promise<void> {
  try {
    await context.homePage.navigate();
    await context.driver.sleep(200);
  } catch (error) {
    console.log('Navigation error in beforeEach:', error.message);
  }
}

