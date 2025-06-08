import { WebDriver, By, until } from 'selenium-webdriver';
import { BasePage } from '../framework/BasePageFactory';

/**
 * Page Object for Home page functionality
 * Handles landing page interactions and user onboarding
 */
export class HomePageObject extends BasePage {
  // Home page locators
  private readonly pageTitle = By.css('h2');
  private readonly welcomeSection = By.css('header');
  private readonly shareToolsLink = By.css('a[href="/share"]');
  private readonly browseToolsLink = By.css('a[href="/browse"]');
  // Updated selectors to match actual DOM structure
  private readonly createAccountLink = By.css('a[href="/register"].btn.btn-primary');
  private readonly signInLink = By.css('a[href="/login"].btn.btn-secondary');
  
  // Authenticated user elements
  private readonly welcomeBackMessage = By.xpath('//h3[contains(text(), "Welcome back")]');
  private readonly shareItemButton = By.css('a[href="/share"].btn-primary');
  private readonly myProfileButton = By.css('a[href="/profile"].btn-secondary');
  
  // Logout confirmation
  private readonly logoutMessage = By.css('.bg-green-50 p');
  
  async navigate(): Promise<void> {
    await this.driver.get(this.baseUrl);
  }
  
  async waitForPageLoad(): Promise<void> {
    await this.waitForElement(this.pageTitle);
  }
  
  /**
   * Get the main page title
   */
  async getPageTitle(): Promise<string> {
    const element = await this.driver.findElement(this.pageTitle);
    return await element.getText();
  }
  
  /**
   * Check if user is authenticated (welcome back message visible)
   */
  async isUserAuthenticated(): Promise<boolean> {
    try {
      await this.driver.findElement(this.welcomeBackMessage);
      return true;
    } catch {
      return false;
    }
  }
  
  /**
   * Navigate to registration page
   */
  async goToRegister(): Promise<void> {
    // First try the primary selector
    try {
      const element = await this.driver.findElement(this.createAccountLink);
      await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
      await this.driver.sleep(500);
      await element.click();
      await this.driver.sleep(1000); // Wait for navigation
      return;
    } catch (error) {
      console.log(`Primary selector failed: ${error.message}`);
    }
    
    // Try alternative selectors for registration link
    const altSelectors = [
      By.linkText('Create Account'),
      By.linkText('Join Community'),
      By.linkText('Sign up'),
      By.linkText('Register'),
      By.css('a[href*="register"]'),
      By.css('a[href*="signup"]')
    ];
    
    for (const selector of altSelectors) {
      try {
        const element = await this.driver.findElement(selector);
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
        await this.driver.sleep(500);
        await element.click();
        await this.driver.sleep(1000); // Wait for navigation
        return;
      } catch {
        // Continue to next selector
      }
    }
    
    throw new Error('Registration link not found with any selector');
  }
  
  /**
   * Navigate to login page
   */
  async goToLogin(): Promise<void> {
    await this.safeClick(this.signInLink);
  }
  
  /**
   * Navigate to browse tools page
   */
  async goToBrowse(): Promise<void> {
    await this.safeClick(this.browseToolsLink);
  }
  
  /**
   * Navigate to share tools page
   */
  async goToShare(): Promise<void> {
    await this.safeClick(this.shareToolsLink);
  }
  
  /**
   * Navigate to profile page (authenticated users)
   */
  async goToProfile(): Promise<void> {
    await this.safeClick(this.myProfileButton);
  }
  
  /**
   * Check if logout confirmation message is displayed
   */
  async hasLogoutMessage(): Promise<boolean> {
    try {
      const element = await this.driver.findElement(this.logoutMessage);
      const text = await element.getText();
      return text.includes('successfully signed out');
    } catch {
      return false;
    }
  }
  
  /**
   * Get the welcome message for authenticated users
   */
  async getWelcomeMessage(): Promise<string> {
    try {
      const element = await this.driver.findElement(this.welcomeBackMessage);
      return await element.getText();
    } catch {
      return '';
    }
  }
}

