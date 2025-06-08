# E2E Testing with Selenium

This directory contains comprehensive end-to-end tests using Selenium WebDriver with TypeScript.

## Setup

The E2E testing framework includes:

- **Selenium WebDriver** for browser automation
- **Page Object Model** pattern for maintainable test code
- **Chrome and Firefox** support
- **Headless mode** for CI/CD
- **Screenshot capture** on test failures
- **Comprehensive reporting**

## Running Tests

### Prerequisites

1. Start your Remix application:
   ```bash
   npm run dev
   ```

2. Ensure Chrome or Firefox is installed on your system

### Basic Usage

```bash
# Run all E2E tests with default settings (Chrome, headed)
npm run test:e2e

# Run with specific browser
npm run test:e2e:chrome
npm run test:e2e:firefox

# Run in headless mode (faster, good for CI)
npm run test:e2e:headless

# Run with CI configuration (headless + optimized for CI)
npm run test:e2e:ci
```

### Environment Variables

```bash
# Browser selection
BROWSER=chrome|firefox

# Run mode
HEADLESS=true|false
CI=true|false

# Application URL
E2E_BASE_URL=http://localhost:3000

# Timeouts and window size
E2E_TIMEOUT=15000
WINDOW_WIDTH=1920
WINDOW_HEIGHT=1080

# Screenshot directory
SCREENSHOT_DIR=./test-screenshots

# Retry configuration
E2E_RETRIES=1

# Slow motion (for debugging)
SLOW_MO=1000
```

## Framework Architecture

### Page Object Model

The framework follows the Page Object Model pattern for maintainable and reusable test code.

### Test Structure

```
test/e2e/
├── framework/           # Core framework classes
│   └── BasePageFactory.ts    # WebDriver factory and base page
├── pages/              # Page Object classes
│   └── NavigationPageObject.ts
├── config.ts           # Configuration
├── runner.ts           # Main test runner
└── README.md          # This file
```

## Writing Tests

The framework is designed to work with your Remix application regardless of the specific authentication or UI framework used.

## Best Practices

### 1. Use Page Objects
Always use Page Objects to encapsulate page interactions

### 2. Handle Authentication
Many pages require authentication. Tests should handle this gracefully

### 3. Use Meaningful Assertions
Use descriptive assertions that clearly indicate what is being tested

## Debugging

### Visual Debugging
Run tests in headed mode to see what's happening:
```bash
HEADLESS=false npm run test:e2e
```

### Slow Motion
Add delays between actions for easier observation:
```bash
SLOW_MO=1000 npm run test:e2e
```

## Troubleshooting

If you encounter issues with E2E tests, see [DEBUGGING.md](./DEBUGGING.md) for detailed troubleshooting information.

### Common Issues

1. **Session Invalid Errors**: Usually caused by window resizing or browser instability
   - Solution: Tests now include session validation and proper error handling

2. **Element Not Found**: Elements may not be loaded yet
   - Solution: Use `waitForElement()` or increase timeouts

3. **Timing Issues**: Tests running too fast for page loads
   - Solution: Add explicit waits with `driver.sleep()` or element waits

4. **Browser Crashes**: Insufficient system resources or unstable configuration
   - Solution: Use headless mode or adjust Chrome flags

## Contributing

When adding new tests:

1. Follow the Page Object Model pattern
2. Use descriptive test names
3. Handle authentication gracefully
4. Add proper error handling
5. Validate session state before critical operations
6. Update this documentation if needed

