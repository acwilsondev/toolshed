import { WebDriver, Builder, Capabilities } from 'selenium-webdriver';
import { Options as ChromeOptions } from 'selenium-webdriver/chrome';
import * as chrome from 'selenium-webdriver/chrome';
import { Options as FirefoxOptions } from 'selenium-webdriver/firefox';

/**
 * Browser configuration interface
 */
export interface BrowserConfig {
  browser: 'chrome' | 'firefox';
  headless?: boolean;
  windowSize?: { width: number; height: number };
  timeout?: number;
}

/**
 * Factory for creating WebDriver instances with proper configuration
 * Follows Factory pattern for browser instance creation
 */
export class WebDriverFactory {
  private static readonly DEFAULT_TIMEOUT = 10000;
  private static readonly DEFAULT_WINDOW_SIZE = { width: 1920, height: 1080 };

  static async createDriver(config: BrowserConfig): Promise<WebDriver> {
    const { browser, headless = false, windowSize = this.DEFAULT_WINDOW_SIZE, timeout = this.DEFAULT_TIMEOUT } = config;
    
    let driver: WebDriver;
    
    switch (browser) {
      case 'chrome':
        driver = await this.createChromeDriver(headless, windowSize);
        break;
      case 'firefox':
        driver = await this.createFirefoxDriver(headless, windowSize);
        break;
      default:
        throw new Error(`Unsupported browser: ${browser}`);
    }
    
    await driver.manage().setTimeouts({ implicit: timeout });
    return driver;
  }
  
  private static async createChromeDriver(headless: boolean, windowSize: { width: number; height: number }): Promise<WebDriver> {
    const options = new ChromeOptions();
    
    if (headless) {
      options.addArguments('--headless=new');
    }
    
    options.addArguments(
      '--no-sandbox',
      '--disable-dev-shm-usage',
      `--window-size=${windowSize.width},${windowSize.height}`
    );
    
    const service = new chrome.ServiceBuilder('/bin/chromedriver');
    
    return new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .setChromeService(service)
      .build();
  }
  
  private static async createFirefoxDriver(headless: boolean, windowSize: { width: number; height: number }): Promise<WebDriver> {
    const options = new FirefoxOptions();
    
    // Set Firefox-specific preferences
    options.set('moz:firefoxOptions', {
      prefs: {
        'browser.startup.homepage': 'about:blank',
        'browser.cache.disk.enable': false,
        'browser.cache.memory.enable': false,
        'browser.cache.offline.enable': false,
        'network.http.use-cache': false,
        'javascript.enabled': true,
        'dom.disable_beforeunload': true,
        'dom.webnotifications.enabled': false,
        'dom.push.enabled': false,
        'media.navigator.enabled': false,
        'network.manage-offline-status': false,
        'browser.tabs.remote.autostart': false,
        'toolkit.cosmeticAnimations.enabled': false
      },
      args: headless ? [
        '-headless',
        `--width=${windowSize.width}`,
        `--height=${windowSize.height}`
      ] : [
        `--width=${windowSize.width}`,
        `--height=${windowSize.height}`
      ]
    });
    
    return new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .build();
  }
}

/**
 * Abstract base class for Page Objects following Page Object Model pattern
 */
export abstract class BasePage {
  protected driver: WebDriver;
  protected baseUrl: string;
  
  constructor(driver: WebDriver, baseUrl: string = 'http://localhost:3000') {
    this.driver = driver;
    this.baseUrl = baseUrl;
  }
  
  /**
   * Navigate to the page
   */
  abstract navigate(): Promise<void>;
  
  /**
   * Wait for page to be loaded
   */
  abstract waitForPageLoad(): Promise<void>;
  
  /**
   * Get the current page title
   */
  async getTitle(): Promise<string> {
    return await this.driver.getTitle();
  }
  
  /**
   * Get the current URL
   */
  async getCurrentUrl(): Promise<string> {
    return await this.driver.getCurrentUrl();
  }
  
  /**
   * Take a screenshot for debugging
   */
  async takeScreenshot(): Promise<string> {
    return await this.driver.takeScreenshot();
  }
  
  /**
   * Wait for an element to be present
   */
  protected async waitForElement(locator: any, timeout: number = 10000): Promise<void> {
    await this.driver.wait(async () => {
      try {
        await this.driver.findElement(locator);
        return true;
      } catch {
        return false;
      }
    }, timeout);
  }
  
  /**
   * Safe click that waits for element to be clickable
   */
  protected async safeClick(locator: any): Promise<void> {
    const element = await this.driver.findElement(locator);
    await this.driver.wait(async () => {
      try {
        await element.click();
        return true;
      } catch {
        return false;
      }
    }, 5000);
  }
  
  /**
   * Safe text input that clears field first
   */
  protected async safeType(locator: any, text: string): Promise<void> {
    const element = await this.driver.findElement(locator);
    await element.clear();
    await element.sendKeys(text);
  }
}

