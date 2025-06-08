# Toolshed Development Guide

This guide helps you set up the Toolshed application for local development.

## Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose
- Git

## Quick Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd toolshed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and use the local development database URL:
   # DATABASE_URL=postgresql://toolshed:toolshed@localhost:5433/toolshed
   ```

4. **Start the database**
   ```bash
   docker compose up -d db
   ```
   This starts PostgreSQL with sample data pre-loaded.

5. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000` (or another port if 3000 is busy).

## Database Information

- **Database**: PostgreSQL 16 running in Docker
- **Port**: 5433 (exposed to host)
- **Credentials**: `toolshed` / `toolshed` / `toolshed`
- **Sample Data**: Automatically loaded with 3 users and 3 tools

### Sample Tools Available
- Electric Drill (Alice Johnson, Downtown)
- Ladder (Bob Smith, Riverside)  
- Garden Hose (Carol Davis, Hillside)

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Generate test coverage report
- `npm run typecheck` - Run TypeScript type checking

## Testing

The project uses Vitest for testing with React Testing Library:

- Unit tests for utility functions
- Component tests for React components
- Integration tests for database operations
- Coverage reporting with V8

## Docker Development

Alternatively, you can run the entire application in Docker:

```bash
# Start everything (app + database)
docker compose up

# Or start just the database for local development
docker compose up -d db
```

## Project Structure

- `app/` - Remix application code
  - `routes/` - Page routes and API endpoints
  - `components/` - React components
  - `utils/` - Utility functions and database operations
- `shared/` - Shared schemas and types
- `server/` - Server configuration and storage
- `docker/` - Docker configuration files
- `test/` - Test utilities and configuration

## Key Features

- **Browse Tools**: View all available tools with search and filtering
- **User Authentication**: Session-based auth with secure cookies
- **Event Sourcing**: Reservation system using event sourcing pattern
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Type Safety**: Full TypeScript support throughout
- **Testing**: Comprehensive test suite with Vitest

## Troubleshooting

### Port Conflicts
If you get "port already in use" errors:
- Check for existing processes: `lsof -i :3000` or `ss -tlnp | grep :3000`
- Use a different port: `PORT=3005 npm run dev`
- Stop conflicting Docker containers: `docker compose down`

### Database Connection Issues
- Ensure Docker database is running: `docker compose ps`
- Check database logs: `docker compose logs db`
- Verify `.env` has correct DATABASE_URL for localhost:5433

### Build Issues
- Clear build cache: `rm -rf build/ public/build/`
- Reinstall dependencies: `rm -rf node_modules/ && npm install`
- Check TypeScript errors: `npm run typecheck`

## Contributing

1. Create a feature branch from `main`
2. Make your changes with tests
3. Run the test suite: `npm run test:run`
4. Commit with descriptive messages
5. Create a pull request

All commits should follow the conventional commit format and include appropriate test coverage.

