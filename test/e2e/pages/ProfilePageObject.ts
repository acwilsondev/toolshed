import { WebDriver, By, until } from 'selenium-webdriver';
import { BasePage } from '../framework/BasePageFactory';

/**
 * Page Object for User Profile functionality
 * Handles profile viewing, editing, and user account management
 */
export class ProfilePageObject extends BasePage {
  // Profile page elements
  private readonly pageTitle = By.css('h1, h2');
  private readonly userNameDisplay = By.css('[data-testid="user-name"], .user-name, h1, h2');
  private readonly userEmailDisplay = By.css('[data-testid="user-email"], .user-email');
  
  // Navigation elements that might be on profile page
  private readonly editProfileButton = By.css('button, a[href*="edit"], .btn');
  private readonly myToolsSection = By.css('[data-testid="my-tools"], .my-tools');
  private readonly myReservationsSection = By.css('[data-testid="my-reservations"], .my-reservations');
  
  // Generic elements that might indicate a profile page
  private readonly profileContent = By.css('.profile, .user-profile, main');
  private readonly actionButtons = By.css('.btn, button');
  private readonly links = By.css('a');
  
  async navigate(): Promise<void> {
    await this.driver.get(`${this.baseUrl}/profile`);
  }
  
  async waitForPageLoad(): Promise<void> {
    await this.driver.wait(async () => {
      try {
        // Wait for either profile-specific content or any main content
        const currentUrl = await this.driver.getCurrentUrl();
        if (currentUrl.includes('/profile')) {
          // Try to find any content that indicates the page loaded
          const elements = await this.driver.findElements(By.css('h1, h2, main, .profile'));
          return elements.length > 0;
        }
        return false;
      } catch {
        return false;
      }
    }, 10000);
  }
  
  /**
   * Check if we're on a profile page
   */
  async isProfilePage(): Promise<boolean> {
    try {
      const currentUrl = await this.driver.getCurrentUrl();
      return currentUrl.includes('/profile');
    } catch {
      return false;
    }
  }
  
  /**
   * Get the page title or main heading
   */
  async getPageTitle(): Promise<string> {
    try {
      const titleElement = await this.driver.findElement(this.pageTitle);
      return await titleElement.getText();
    } catch {
      // Fallback to any heading
      try {
        const headings = await this.driver.findElements(By.css('h1, h2, h3'));
        if (headings.length > 0) {
          return await headings[0].getText();
        }
      } catch {
        // No headings found
      }
      return '';
    }
  }
  
  /**
   * Get user name if displayed
   */
  async getUserName(): Promise<string> {
    try {
      const nameElement = await this.driver.findElement(this.userNameDisplay);
      return await nameElement.getText();
    } catch {
      return '';
    }
  }
  
  /**
   * Get user email if displayed
   */
  async getUserEmail(): Promise<string> {
    try {
      const emailElement = await this.driver.findElement(this.userEmailDisplay);
      return await emailElement.getText();
    } catch {
      return '';
    }
  }
  
  /**
   * Check if edit profile button is available
   */
  async canEditProfile(): Promise<boolean> {
    try {
      const buttons = await this.driver.findElements(this.editProfileButton);
      for (const button of buttons) {
        const text = await button.getText();
        if (text.toLowerCase().includes('edit')) {
          return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  }
  
  /**
   * Click edit profile button if available
   */
  async clickEditProfile(): Promise<void> {
    const buttons = await this.driver.findElements(this.editProfileButton);
    for (const button of buttons) {
      const text = await button.getText();
      if (text.toLowerCase().includes('edit')) {
        await button.click();
        return;
      }
    }
    throw new Error('Edit profile button not found');
  }
  
  /**
   * Check if user has tools listed
   */
  async hasToolsSection(): Promise<boolean> {
    try {
      await this.driver.findElement(this.myToolsSection);
      return true;
    } catch {
      return false;
    }
  }
  
  /**
   * Check if user has reservations section
   */
  async hasReservationsSection(): Promise<boolean> {
    try {
      await this.driver.findElement(this.myReservationsSection);
      return true;
    } catch {
      return false;
    }
  }
  
  /**
   * Get all available action buttons on the profile page
   */
  async getAvailableActions(): Promise<string[]> {
    const actions = [];
    
    try {
      const buttons = await this.driver.findElements(this.actionButtons);
      for (const button of buttons) {
        const text = await button.getText();
        if (text.trim()) {
          actions.push(text.trim());
        }
      }
    } catch {
      // No buttons found
    }
    
    try {
      const links = await this.driver.findElements(this.links);
      for (const link of links) {
        const text = await link.getText();
        const href = await link.getAttribute('href');
        if (text.trim() && href && !href.includes('javascript:')) {
          actions.push(text.trim());
        }
      }
    } catch {
      // No links found
    }
    
    return actions;
  }
  
  /**
   * Navigate to a page using available links
   */
  async navigateToPage(linkText: string): Promise<void> {
    const links = await this.driver.findElements(this.links);
    
    for (const link of links) {
      const text = await link.getText();
      if (text.toLowerCase().includes(linkText.toLowerCase())) {
        await link.click();
        return;
      }
    }
    
    throw new Error(`Link with text "${linkText}" not found`);
  }
  
  /**
   * Check if the profile page loaded successfully
   */
  async isPageLoaded(): Promise<boolean> {
    try {
      // Check if we can find any content on the page
      const content = await this.driver.findElements(By.css('main, .profile, .container, div'));
      return content.length > 0;
    } catch {
      return false;
    }
  }
}

