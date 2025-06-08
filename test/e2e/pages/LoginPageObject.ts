import { WebDriver, By, until } from 'selenium-webdriver';
import { BasePage } from '../framework/BasePageFactory';

/**
 * Page Object for Login functionality
 * Handles user authentication and login form interactions
 */
export class LoginPageObject extends BasePage {
  // Form locators
  private readonly pageTitle = By.css('h1');
  private readonly emailInput = By.id('email');
  private readonly passwordInput = By.id('password');
  private readonly rememberMeCheckbox = By.id('remember-me');
  private readonly loginButton = By.css('button[type="submit"]');
  private readonly createAccountLink = By.css('a[href="/register"].btn.btn-secondary');
  private readonly forgotPasswordLink = By.css('a[href="/forgot-password"]');
  
  // Error and status messages
  private readonly errorMessage = By.css('.error');
  private readonly loadingState = By.xpath('//button[contains(text(), "Signing in...")]');
  
  async navigate(): Promise<void> {
    await this.driver.get(`${this.baseUrl}/login`);
  }
  
  async waitForPageLoad(): Promise<void> {
    await this.waitForElement(this.pageTitle);
  }
  
  /**
   * Perform login with credentials
   */
  async login(email: string, password: string, rememberMe: boolean = false): Promise<void> {
    await this.safeType(this.emailInput, email);
    await this.safeType(this.passwordInput, password);
    
    if (rememberMe) {
      await this.safeClick(this.rememberMeCheckbox);
    }
    
    await this.safeClick(this.loginButton);
  }
  
  /**
   * Check if login form is displayed
   */
  async isLoginFormVisible(): Promise<boolean> {
    try {
      await this.driver.findElement(this.emailInput);
      await this.driver.findElement(this.passwordInput);
      await this.driver.findElement(this.loginButton);
      return true;
    } catch {
      return false;
    }
  }
  
  /**
   * Get error message if login failed
   */
  async getErrorMessage(): Promise<string> {
    try {
      const element = await this.driver.findElement(this.errorMessage);
      return await element.getText();
    } catch {
      return '';
    }
  }
  
  /**
   * Check if login is in progress
   */
  async isLoading(): Promise<boolean> {
    try {
      await this.driver.findElement(this.loadingState);
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
      By.linkText('Create an account'),
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
   * Navigate to forgot password page
   */
  async goToForgotPassword(): Promise<void> {
    await this.safeClick(this.forgotPasswordLink);
  }
  
  /**
   * Wait for login to complete (redirect away from login page)
   */
  async waitForLoginSuccess(): Promise<void> {
    await this.driver.wait(async () => {
      const currentUrl = await this.driver.getCurrentUrl();
      return !currentUrl.includes('/login');
    }, 10000);
  }
  
  /**
   * Fill email field
   */
  async fillEmail(email: string): Promise<void> {
    await this.safeType(this.emailInput, email);
  }
  
  /**
   * Fill password field
   */
  async fillPassword(password: string): Promise<void> {
    await this.safeType(this.passwordInput, password);
  }
  
  /**
   * Submit the login form
   */
  async submitForm(): Promise<void> {
    await this.safeClick(this.loginButton);
  }
}

