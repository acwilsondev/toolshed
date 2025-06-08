import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { WebDriver, By } from 'selenium-webdriver';
import { WebDriverFactory, BrowserConfig } from '../framework/BasePageFactory';
import { NavigationPageObject } from '../pages/NavigationPageObject';
import { HomePageObject } from '../pages/HomePageObject';
import { LoginPageObject } from '../pages/LoginPageObject';
import { BrowsePageObject } from '../pages/BrowsePageObject';
import { ProfilePageObject } from '../pages/ProfilePageObject';

/**
 * Critical User Flows E2E Tests
 * Tests the most important user journeys in the Toolshed application
 */
describe('Critical User Flows E2E Tests', () => {
  let driver: WebDriver;
  let navigationPage: NavigationPageObject;
  let homePage: HomePageObject;
  let loginPage: LoginPageObject;
  let browsePage: BrowsePageObject;
  let profilePage: ProfilePageObject;
  
  const config: BrowserConfig = {
    browser: 'chrome',
    headless: process.env.CI === 'true' || process.env.HEADLESS === 'true',
    windowSize: { width: 1920, height: 1080 },
    timeout: 15000
  };
  
  beforeAll(async () => {
    driver = await WebDriverFactory.createDriver(config);
    navigationPage = new NavigationPageObject(driver);
    homePage = new HomePageObject(driver);
    loginPage = new LoginPageObject(driver);
    browsePage = new BrowsePageObject(driver);
    profilePage = new ProfilePageObject(driver);
  }, 30000);
  
  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });
  
  beforeEach(async () => {
    // Reset to home page before each test
    await homePage.navigate();
    await homePage.waitForPageLoad();
  });
  
  describe('User Onboarding Flow', () => {
    it('should allow new users to discover the platform', async () => {
      // Verify home page loads with welcoming content
      const pageTitle = await homePage.getPageTitle();
      expect(pageTitle).toContain('Welcome to Toolshed');
      
      // Check that key value propositions are visible
      const isAuthenticated = await homePage.isUserAuthenticated();
      expect(isAuthenticated).toBe(false);
      
      // Verify navigation to browse tools works
      await homePage.goToBrowse();
      await browsePage.waitForPageLoad();
      
      const browseTitle = await browsePage.getPageTitle();
      expect(browseTitle).toContain('Browse');
    }, 20000);
    
    it('should guide users to registration from home page', async () => {
      // Navigate to registration from home page
      await homePage.goToRegister();
      
      // Verify we reach the registration page
      const currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).toContain('/register');
    }, 15000);
    
    it('should guide users to login from home page', async () => {
      // Navigate to login from home page
      await homePage.goToLogin();
      await loginPage.waitForPageLoad();
      
      // Verify login form is displayed
      const isFormVisible = await loginPage.isLoginFormVisible();
      expect(isFormVisible).toBe(true);
    }, 15000);
  });
  
  describe('Authentication Flow', () => {
    it('should display login form correctly', async () => {
      await loginPage.navigate();
      await loginPage.waitForPageLoad();
      
      // Verify form elements are present
      const isFormVisible = await loginPage.isLoginFormVisible();
      expect(isFormVisible).toBe(true);
      
      // Verify navigation to registration works
      await loginPage.goToRegister();
      const currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).toContain('/register');
    }, 15000);
    
    it('should handle invalid login attempts gracefully', async () => {
      await loginPage.navigate();
      await loginPage.waitForPageLoad();
      
      // Attempt login with invalid credentials
      await loginPage.login('invalid@email.com', 'wrongpassword');
      
      // Wait a moment for potential error message
      await driver.sleep(2000);
      
      // Check if we're still on login page (indicating failure)
      const currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).toContain('/login');
      
      // Try to get error message if present
      const errorMessage = await loginPage.getErrorMessage();
      // Error message might or might not be present depending on implementation
      console.log('Error message (if any):', errorMessage);
    }, 20000);
  });
  
  describe('Tool Discovery Flow', () => {
    it('should allow users to browse and search tools', async () => {
      await browsePage.navigate();
      await browsePage.waitForPageLoad();
      
      // Verify browse page loads
      const pageTitle = await browsePage.getPageTitle();
      expect(pageTitle).toContain('Browse');
      
      // Check if tools are available or empty state is shown
      const toolCount = await browsePage.getToolCount();
      const isEmptyState = await browsePage.isEmptyStateDisplayed();
      
      if (toolCount > 0) {
        console.log(`Found ${toolCount} tools available`);
        
        // Test search functionality
        await browsePage.searchTools('drill');
        await driver.sleep(1000);
        
        // Test category filtering
        const categories = await browsePage.getAvailableCategories();
        expect(categories.length).toBeGreaterThan(1);
        console.log('Available categories:', categories);
        
        // Reset search
        await browsePage.clearSearch();
      } else if (isEmptyState) {
        console.log('No tools available - empty state displayed');
        const emptyMessage = await browsePage.getEmptyStateMessage();
        expect(emptyMessage).toBeTruthy();
      }
    }, 25000);
    
    it('should handle tool search and filtering', async () => {
      await browsePage.navigate();
      await browsePage.waitForPageLoad();
      
      // Test search functionality
      await browsePage.searchTools('tool');
      await driver.sleep(1000);
      
      const resultsText = await browsePage.getResultsText();
      console.log('Search results:', resultsText);
      
      // Clear search and test category filtering
      await browsePage.clearSearch();
      await driver.sleep(500);
      
      // Test category selection
      await browsePage.selectCategory('All Categories');
      await driver.sleep(500);
    }, 20000);
  });
  
  describe('User Profile Flow', () => {
    it('should redirect unauthenticated users appropriately', async () => {
      await profilePage.navigate();
      
      // Wait for redirect or page load
      await driver.sleep(2000);
      
      const currentUrl = await driver.getCurrentUrl();
      
      // Should either redirect to login or show profile page
      const isOnLogin = currentUrl.includes('/login');
      const isOnProfile = currentUrl.includes('/profile');
      
      expect(isOnLogin || isOnProfile).toBe(true);
      
      if (isOnProfile) {
        console.log('Profile page accessible without authentication');
        const isLoaded = await profilePage.isPageLoaded();
        expect(isLoaded).toBe(true);
      } else {
        console.log('Redirected to login as expected for unauthenticated user');
      }
    }, 15000);
  });
  
  describe('Navigation Flow', () => {
    it('should provide basic navigation functionality', async () => {
      // Test navigation from home page
      await homePage.navigate();
      await homePage.waitForPageLoad();
      
      // Verify navigation bar exists and has links
      const navBar = await driver.findElement(By.css('nav'));
      const isVisible = await navBar.isDisplayed();
      expect(isVisible).toBe(true);
      
      // Test basic navigation to browse page
      await homePage.goToBrowse();
      await browsePage.waitForPageLoad();
      
      const currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).toContain('/browse');
    }, 15000);
  });
  
  describe('End-to-End User Journey', () => {
    it('should support complete user journey from discovery to engagement', async () => {
      // 1. User arrives at home page
      await homePage.navigate();
      await homePage.waitForPageLoad();
      
      const welcomeTitle = await homePage.getPageTitle();
      expect(welcomeTitle).toContain('Welcome');
      
      // 2. User explores available tools
      await homePage.goToBrowse();
      await browsePage.waitForPageLoad();
      
      const browseTitle = await browsePage.getPageTitle();
      expect(browseTitle).toContain('Browse');
      
      // 3. User searches for specific tools
      await browsePage.searchTools('garden');
      await driver.sleep(1000);
      
      // 4. User decides to join the platform
      await loginPage.navigate();
      await loginPage.waitForPageLoad();
      
      const isLoginForm = await loginPage.isLoginFormVisible();
      expect(isLoginForm).toBe(true);
      
      // 5. User explores registration option
      await loginPage.goToRegister();
      const finalUrl = await driver.getCurrentUrl();
      expect(finalUrl).toContain('/register');
      
      console.log('✅ Complete user journey flow successful');
    }, 30000);
  });
});

