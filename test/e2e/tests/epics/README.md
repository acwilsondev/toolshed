# Epic E2E Tests

This directory contains end-to-end tests organized by epic from the user stories document. Each epic is in its own test file for isolated testing and better maintainability.

## Epic Structure

- **Epic 1**: User Registration and Authentication (`epic1-auth.test.ts`)
  - US-001: New User Registration
  - US-002: User Login
  - US-003: User Logout

- **Epic 2**: Tool Management (`epic2-tool-management.test.ts`)
  - US-004: Add New Tool
  - US-005: View My Tools
  - US-006: Edit Tool Information
  - US-007: Delete Tool

- **Epic 3**: Tool Discovery (`epic3-tool-discovery.test.ts`)
  - US-008: Browse Available Tools
  - US-009: Search for Specific Tools
  - US-010: View Tool Details

## Running Tests

### Using npm scripts (recommended):

```bash
# Run individual epics
npm run test:epic:1              # Epic 1: Authentication
npm run test:epic:2              # Epic 2: Tool Management
npm run test:epic:3              # Epic 3: Tool Discovery

# Run in headless mode
npm run test:epic:1:headless     # Epic 1 headless
npm run test:epic:2:headless     # Epic 2 headless
npm run test:epic:3:headless     # Epic 3 headless

# Run all epics
npm run test:epic:all            # All epics with browser UI
npm run test:epic:all:headless   # All epics headless
```

### Using the epic runner directly:

```bash
# Show usage and available options
npx tsx test/e2e/tests/epics/run-epics.ts

# Run specific epic
npx tsx test/e2e/tests/epics/run-epics.ts 1
npx tsx test/e2e/tests/epics/run-epics.ts 2 --headless
npx tsx test/e2e/tests/epics/run-epics.ts 3 --verbose

# Run all epics
npx tsx test/e2e/tests/epics/run-epics.ts all
npx tsx test/e2e/tests/epics/run-epics.ts all --headless --verbose
```

### Using vitest directly:

```bash
# Run specific epic file
npm test -- test/e2e/tests/epics/epic1-auth.test.ts
HEADLESS=true npm test -- test/e2e/tests/epics/epic2-tool-management.test.ts

# Run all epic tests
npm test -- test/e2e/tests/epics/
```

## Test Configuration

### Environment Variables

- `HEADLESS=true` - Run tests in headless mode (no browser UI)
- `CI=true` - Enable CI mode optimizations
- `BROWSER=chrome|firefox` - Choose browser (default: chrome)

### Shared Setup

All epic tests use a shared setup (`shared-setup.ts`) that provides:

- Common test context with driver and page objects
- Consistent test data
- Browser configuration
- Setup and teardown helpers

## Test Design Principles

### Isolation

- Each epic runs in its own test file
- Independent browser sessions
- No shared state between epics
- Clean setup/teardown for each test

### Page Object Pattern

Tests use page objects for maintainable selectors and actions:

- `HomePageObject` - Home page interactions
- `LoginPageObject` - Login form interactions
- `BrowsePageObject` - Tool browsing and search
- `ProfilePageObject` - User profile and tool management

### Resilient Testing

- Flexible selectors that adapt to different implementations
- Graceful degradation when elements aren't found
- Informative console logging for debugging
- Timeout optimizations for faster execution

## Development Guidelines

### Adding New Tests

1. Add tests to the appropriate epic file
2. Use the shared setup and test context
3. Follow the existing pattern for error handling
4. Add descriptive console logging
5. Use appropriate timeouts

### Modifying Existing Tests

1. Test changes in isolation first
2. Ensure no regressions in other epics
3. Update timeouts if needed
4. Maintain backwards compatibility

### Best Practices

- Keep tests focused on user stories
- Use meaningful test descriptions
- Handle both success and error cases
- Optimize for speed while maintaining reliability
- Document any complex logic

## Troubleshooting

### Common Issues

1. **Timeouts**: Increase test timeouts or reduce wait times
2. **Element not found**: Update selectors or add fallbacks
3. **Browser crashes**: Check memory usage, use headless mode
4. **Flaky tests**: Add proper waits, check for race conditions

### Debug Mode

```bash
# Run with verbose output
npm run test:epic:1 -- --reporter=verbose

# Run without headless to see browser
HEADLESS=false npm run test:epic:1

# Single test with debugging
npm test -- test/e2e/tests/epics/epic1-auth.test.ts --reporter=verbose
```

### Logs

- Check console output for test progress
- Page object methods log their actions
- Error messages include context information
- Browser errors are captured and logged

## Performance Considerations

- Epic tests run independently for parallel execution
- Reduced wait times where safe
- Optimized selectors for faster element location
- Headless mode for faster CI execution
- Modular design allows testing specific areas

## Integration with CI/CD

The epic structure supports various CI strategies:

```bash
# Run critical path only (Epic 1)
npm run test:epic:1:headless

# Run full suite
npm run test:epic:all:headless

# Parallel execution (run in separate jobs)
npm run test:epic:1:headless &
npm run test:epic:2:headless &
npm run test:epic:3:headless &
wait
```

