# Epic Test Migration Guide

The original monolithic `userStories.test.ts` file has been refactored into separate epic test files for better maintainability and isolated testing.

## What Changed

### Before (Deprecated)
```
test/e2e/tests/userStories.test.ts         # Single large file with all tests
```

### After (New Structure)
```
test/e2e/tests/epics/
├── shared-setup.ts                        # Common test utilities
├── epic1-auth.test.ts                     # User Registration & Authentication
├── epic2-tool-management.test.ts           # Tool Management
├── epic3-tool-discovery.test.ts            # Tool Discovery
├── run-epics.ts                            # Test runner utility
└── README.md                               # Documentation
```

## Benefits of the New Structure

1. **Isolation** - Each epic can be tested independently
2. **Parallel Execution** - Run multiple epics simultaneously
3. **Faster Debugging** - Focus on specific functionality
4. **Better Maintainability** - Smaller, focused test files
5. **Reduced Flakiness** - Independent browser sessions
6. **Selective Testing** - Run only the epics you need

## Migration Commands

### Old Commands (Still Work)
```bash
# These still work but run the deprecated large file
npm test -- test/e2e/tests/userStories-DEPRECATED.test.ts
```

### New Commands (Recommended)
```bash
# Run individual epics
npm run test:epic:1              # Authentication tests
npm run test:epic:2              # Tool management tests  
npm run test:epic:3              # Tool discovery tests

# Run all epics
npm run test:epic:all            # All epics together
npm run test:epic:all:headless   # All epics in headless mode

# Run with specific options
npx tsx test/e2e/tests/epics/run-epics.ts 1 --headless --verbose
```

## Test Coverage Mapping

### Epic 1: User Registration and Authentication
- US-001: New User Registration (5 tests)
- US-002: User Login (4 tests)
- US-003: User Logout (3 tests)
- **Total: 12 tests**

### Epic 2: Tool Management  
- US-004: Add New Tool (3 tests)
- US-005: View My Tools (2 tests)
- US-006: Edit Tool Information (1 test)
- US-007: Delete Tool (1 test)
- **Total: 7 tests**

### Epic 3: Tool Discovery
- US-008: Browse Available Tools (4 tests)
- US-009: Search for Specific Tools (4 tests)
- US-010: View Tool Details (2 tests)
- **Total: 10 tests**

**Grand Total: 29 tests** (same as before, just organized)

## Performance Improvements

- **Reduced execution time** when testing specific areas
- **Better resource utilization** with isolated browser sessions
- **Faster feedback** during development
- **Parallel CI execution** capability

## CI/CD Integration

### Sequential Execution (Current)
```yaml
- name: Run E2E Tests
  run: npm run test:epic:all:headless
```

### Parallel Execution (Future Optimization)
```yaml
- name: Run Epic 1
  run: npm run test:epic:1:headless
- name: Run Epic 2  
  run: npm run test:epic:2:headless
- name: Run Epic 3
  run: npm run test:epic:3:headless
```

## Backwards Compatibility

The original test file is preserved as `userStories-DEPRECATED.test.ts` for reference. However, you should migrate to the new epic structure for:

- Better development experience
- Improved test reliability
- Faster execution times
- Better debugging capabilities

## Next Steps

1. **Start using the new epic commands** in your workflow
2. **Update CI/CD pipelines** to use epic-specific tests when appropriate
3. **Consider parallel execution** for faster CI times
4. **Remove the deprecated file** once you're comfortable with the new structure

## Questions?

See the detailed documentation in `test/e2e/tests/epics/README.md` or run:

```bash
npx tsx test/e2e/tests/epics/run-epics.ts
```

For usage information and examples.

