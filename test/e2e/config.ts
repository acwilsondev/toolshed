/**
 * E2E Test Configuration
 * Centralized configuration for Selenium E2E tests
 */

export interface E2EConfig {
  baseUrl: string;
  browser: 'chrome' | 'firefox';
  headless: boolean;
  timeout: number;
  windowSize: { width: number; height: number };
  screenshotDir: string;
  retries: number;
  slowMo?: number;
}

const getConfig = (): E2EConfig => {
  return {
    baseUrl: process.env.E2E_BASE_URL || 'http://localhost:3000', // Using the app service port mapping from docker-compose.yml
    browser: (process.env.BROWSER as 'chrome' | 'firefox') || 'chrome',
    headless: process.env.CI === 'true' || process.env.HEADLESS === 'true',
    timeout: parseInt(process.env.E2E_TIMEOUT || '15000'),
    windowSize: {
      width: parseInt(process.env.WINDOW_WIDTH || '1920'),
      height: parseInt(process.env.WINDOW_HEIGHT || '1080')
    },
    screenshotDir: process.env.SCREENSHOT_DIR || './test-screenshots',
    retries: parseInt(process.env.E2E_RETRIES || '1'),
    slowMo: process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : undefined
  };
};

export default getConfig();

