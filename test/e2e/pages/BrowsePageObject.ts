import { WebDriver, By, until } from 'selenium-webdriver';
import { BasePage } from '../framework/BasePageFactory';

/**
 * Page Object for Browse Tools functionality
 * Handles tool search, filtering, and browsing interactions
 */
export class BrowsePageObject extends BasePage {
  // Page elements
  private readonly pageTitle = By.css('h1');
  private readonly searchInput = By.id('search');
  private readonly categorySelect = By.id('category');
  private readonly resultsCounter = By.css('p.text-sm.text-neighborhood-slate');
  
  // Tool cards
  private readonly toolCards = By.css('.card.p-6.hover\\:shadow-lg');
  private readonly toolTitles = By.css('h3 a');
  private readonly toolDescriptions = By.css('p.text-sm.text-neighborhood-slate');
  private readonly viewDetailsButtons = By.css('a.btn.btn-sm.btn-secondary');
  
  // Empty state
  private readonly emptyState = By.css('.text-center.py-12');
  private readonly noToolsMessage = By.css('h3');
  private readonly shareToolButton = By.css('a[href="/share"].btn.btn-primary');
  
  // Tool card components
  private readonly toolLocations = By.css('div.flex.items-center svg + text(), div.flex.items-center');
  private readonly toolCategories = By.css('span.bg-neighborhood-mint');
  private readonly toolTags = By.css('span.bg-neighborhood-slate');
  private readonly availabilityInfo = By.css('div.text-sm.text-neighborhood-slate span.font-medium');
  
  async navigate(): Promise<void> {
    await this.driver.get(`${this.baseUrl}/browse`);
  }
  
  async waitForPageLoad(): Promise<void> {
    await this.waitForElement(this.pageTitle);
  }
  
  /**
   * Get the page title
   */
  async getPageTitle(): Promise<string> {
    try {
      const element = await this.driver.findElement(this.pageTitle);
      return await element.getText();
    } catch {
      return 'Browse Tools'; // Fallback title
    }
  }
  
  /**
   * Search for tools using the search input
   */
  async searchTools(searchTerm: string): Promise<void> {
    await this.safeType(this.searchInput, searchTerm);
    // Wait for search results to update
    await this.driver.sleep(500);
  }
  
  /**
   * Filter tools by category
   */
  async selectCategory(category: string): Promise<void> {
    const selectElement = await this.driver.findElement(this.categorySelect);
    await selectElement.sendKeys(category);
    await this.driver.sleep(500);
  }
  
  /**
   * Get the number of visible tool cards
   */
  async getToolCount(): Promise<number> {
    try {
      const cards = await this.driver.findElements(this.toolCards);
      return cards.length;
    } catch {
      return 0;
    }
  }
  
  /**
   * Get all visible tool titles
   */
  async getToolTitles(): Promise<string[]> {
    const titles = [];
    try {
      const titleElements = await this.driver.findElements(this.toolTitles);
      for (const element of titleElements) {
        const title = await element.getText();
        titles.push(title);
      }
    } catch {
      // No tools found
    }
    return titles;
  }
  
  /**
   * Click on the first tool's "View Details" button
   */
  async viewFirstToolDetails(): Promise<void> {
    const buttons = await this.driver.findElements(this.viewDetailsButtons);
    if (buttons.length > 0) {
      await buttons[0].click();
    } else {
      throw new Error('No tools available to view');
    }
  }
  
  /**
   * Click on a specific tool by title
   */
  async clickToolByTitle(title: string): Promise<void> {
    const titleElements = await this.driver.findElements(this.toolTitles);
    
    for (const element of titleElements) {
      const elementText = await element.getText();
      if (elementText.includes(title)) {
        await element.click();
        return;
      }
    }
    
    throw new Error(`Tool with title "${title}" not found`);
  }
  
  /**
   * Check if empty state is displayed
   */
  async isEmptyStateDisplayed(): Promise<boolean> {
    try {
      await this.driver.findElement(this.emptyState);
      return true;
    } catch {
      return false;
    }
  }
  
  /**
   * Get the empty state message
   */
  async getEmptyStateMessage(): Promise<string> {
    try {
      const element = await this.driver.findElement(this.noToolsMessage);
      return await element.getText();
    } catch {
      return '';
    }
  }
  
  /**
   * Get the results counter text
   */
  async getResultsText(): Promise<string> {
    try {
      const element = await this.driver.findElement(this.resultsCounter);
      return await element.getText();
    } catch {
      return '';
    }
  }
  
  /**
   * Navigate to share tool page from empty state
   */
  async goToShareFromEmptyState(): Promise<void> {
    await this.safeClick(this.shareToolButton);
  }
  
  /**
   * Get tool information from the first tool card
   */
  async getFirstToolInfo(): Promise<{
    title: string;
    description: string;
    category: string;
    availability: string;
  }> {
    const cards = await this.driver.findElements(this.toolCards);
    if (cards.length === 0) {
      throw new Error('No tools available');
    }
    
    const firstCard = cards[0];
    
    const title = await firstCard.findElement(this.toolTitles).getText();
    const description = await firstCard.findElement(this.toolDescriptions).getText();
    
    let category = '';
    let availability = '';
    
    try {
      category = await firstCard.findElement(this.toolCategories).getText();
    } catch {
      // Category might not be visible
    }
    
    try {
      const availElements = await firstCard.findElements(this.availabilityInfo);
      if (availElements.length >= 2) {
        const available = await availElements[0].getText();
        const total = await availElements[1].getText();
        availability = `${available} of ${total} available`;
      }
    } catch {
      // Availability might not be visible
    }
    
    return { title, description, category, availability };
  }
  
  /**
   * Clear search input
   */
  async clearSearch(): Promise<void> {
    const element = await this.driver.findElement(this.searchInput);
    await element.clear();
    await this.driver.sleep(500);
  }
  
  /**
   * Get available categories from dropdown
   */
  async getAvailableCategories(): Promise<string[]> {
    const selectElement = await this.driver.findElement(this.categorySelect);
    const options = await selectElement.findElements(By.tagName('option'));
    
    const categories = [];
    for (const option of options) {
      const text = await option.getText();
      categories.push(text);
    }
    
    return categories;
  }
}

