# Contributing to Toolshed

Thank you for your interest in contributing to Toolshed! This document provides guidelines and information for contributors.

## Code of Conduct

We are committed to providing a welcoming and inclusive experience for all contributors. Please be respectful and considerate in all interactions.

## Ways to Contribute

### Bug Reports

- **Search existing issues** first to avoid duplicates
- **Use the issue template** when creating new bug reports
- **Include reproduction steps** and environment details
- **Provide logs or screenshots** when helpful

### Feature Requests

- **Check existing feature requests** to avoid duplicates
- **Describe the use case** and why the feature would be valuable
- **Consider the scope** - does it fit with Toolshed's community focus?
- **Be open to discussion** about implementation approaches

### Documentation

- **Fix typos or unclear instructions**
- **Add examples** for complex setup scenarios
- **Improve user guides** for community administrators
- **Update API documentation** when code changes

### Code Contributions

- **Start with small changes** to get familiar with the codebase
- **Follow existing patterns** and coding conventions
- **Write tests** for new functionality
- **Update documentation** when needed

## Development Setup

### Prerequisites

- **Node.js** (v18 or later)
- **Docker** and **Docker Compose**
- **Git**

### Getting Started

1. **Fork and clone** the repository:

   ```bash
   git clone https://github.com/yourusername/toolshed.git
   cd toolshed
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment**:

   ```bash
   cp .env.example .env
   # Edit .env if needed for local development
   ```

4. **Start the development environment**:

   ```bash
   # Option 1: Full Docker development
   docker-compose up
   
   # Option 2: Local development with Docker database
   docker-compose up db  # Start just the database
   npm run dev          # Start the app locally
   ```

5. **Verify setup**: Open `http://localhost:3000`

### Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run typecheck`: Run TypeScript type checking
- `npm test`: Run tests (when implemented)

## Code Standards

### Architecture Principles

**Follow the established patterns in the codebase:**

- **Event Sourcing**: Reservations use event sourcing for complete audit trails
- **OOP with Design Patterns**: Use object-oriented programming with established design patterns (naming classes with the pattern in the name)
- **Dependency Injection**: Make testing easier through dependency injection
- **Single Responsibility**: Test one class at a time by mocking external dependencies

### Coding Guidelines

**TypeScript/JavaScript:**

- Use **TypeScript** for all new code
- Follow **existing naming conventions**
- Use **async/await** instead of Promises where possible
- **Handle errors gracefully** with proper error messages

**React/Remix:**

- Use **functional components** with hooks
- Follow **Remix conventions** for loaders and actions
- Keep **components focused** and reusable
- Use **TypeScript interfaces** for props

**Database:**

- Use **Drizzle ORM** for database interactions
- Write **migrations** for schema changes
- Follow **event sourcing patterns** for reservations
- Ensure **data integrity** and proper validation

**Styling:**

- Use **Tailwind CSS** classes
- Follow **existing design patterns**
- Ensure **responsive design**
- Test on **multiple screen sizes**

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Pull Request Process

### Before Submitting

1. **Create a feature branch** from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Test your changes**:

   ```bash
   npm run typecheck
   npm test
   npm run build  # Ensure it builds successfully
   ```

4. **Update documentation** if needed

5. **Commit with clear messages**:

   ```bash
   git commit -m "feat: add user notification system"
   git commit -m "fix: resolve reservation overlap validation"
   git commit -m "docs: update API documentation"
   ```

### Submitting the PR

1. **Push your branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** with:
   - **Clear title** describing the change
   - **Detailed description** of what was changed and why
   - **Screenshots** for UI changes
   - **Testing notes** for reviewers
   - **Link to related issues**

3. **Address review feedback** promptly and professionally

### PR Requirements

- [ ] **Tests pass** (all existing and new tests)
- [ ] **TypeScript compiles** without errors
- [ ] **Documentation updated** (if applicable)
- [ ] **No regressions** in existing functionality
- [ ] **Code follows** established patterns
- [ ] **Changes are focused** (single responsibility)

## Issue Labels

- `bug`: Something isn't working correctly
- `feature`: New functionality request
- `documentation`: Improvements to docs
- `good first issue`: Good for newcomers
- `help wanted`: Community help needed
- `priority-high`: Critical issues
- `priority-low`: Nice to have improvements

## Project Structure

```
toolshed/
├── app/                 # Remix application code
│   ├── routes/         # Route handlers and pages
│   ├── components/     # Reusable React components
│   └── lib/           # Utility functions and services
├── server/             # Server-side code
├── shared/             # Shared utilities and types
├── build/              # Compiled application
├── docker/             # Docker configuration
├── docs/               # Documentation
└── public/             # Static assets
```

## Community Focus

Remember that Toolshed is built for **community tool sharing**. When contributing:

- **Consider the end user**: neighbors sharing tools
- **Keep it simple**: avoid over-engineering
- **Think about trust**: features should build community trust
- **Consider privacy**: communities want to keep their data private
- **Support self-hosting**: make deployment and maintenance simple

## Questions?

If you have questions about contributing:

1. **Check existing documentation** in the `/docs` folder
2. **Search existing issues** for similar questions
3. **Create a new issue** with the "question" label
4. **Join community discussions** in GitHub Discussions

Thank you for helping make tool sharing easier for communities everywhere!
