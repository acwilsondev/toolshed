# Docker Self-Hosting Guide

This guide covers self-hosting Toolshed using Docker and Docker Compose.

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd toolshed

# Start the application
docker-compose up

# Or run in background
docker-compose up -d
```

The application will be available at `http://localhost:3000`.

## What Gets Created

### Services
- **app**: Remix.js application server
- **db**: PostgreSQL 16 database

### Volumes
- **postgres_data**: Persistent database storage

### Network
- Internal Docker network for service communication

## Sample Data

The application comes pre-loaded with sample users and tools:

### Sample Users
| Name | Email | Password | Neighborhood |
|------|-------|----------|-------------|
| Alice Johnson | alice@neighborhood.local | password123 | Downtown |
| Bob Smith | bob@neighborhood.local | password123 | Riverside |
| Carol Davis | carol@neighborhood.local | password123 | Hillside |

### Sample Tools
- Electric Drill (owned by Alice)
- Ladder (owned by Bob)
- Garden Hose (owned by Carol)

## Configuration

### Environment Variables

The default configuration works out of the box. For customization, create a `.env` file:

```bash
# Copy the example file
cp .env.example .env

# Edit as needed
# DATABASE_URL=postgresql://toolshed:toolshed@db:5432/toolshed
# SESSION_SECRET=your-secure-secret-here
# NODE_ENV=production
# PORT=3000
```

### Port Mapping

By default, the application runs on port 3000. To change this:

```yaml
# In docker-compose.yml
services:
  app:
    ports:
      - "8080:3000"  # Maps host port 8080 to container port 3000
```

## Production Deployment

### Security Considerations

1. **Change the session secret**:
   ```bash
   SESSION_SECRET=$(openssl rand -base64 32)
   echo "SESSION_SECRET=$SESSION_SECRET" > .env
   ```

2. **Use external database** (recommended for production):
   ```bash
   # In .env
   DATABASE_URL=postgresql://user:pass@your-db-host:5432/toolshed
   ```
   
   Then comment out the `db` service in docker-compose.yml

3. **Run behind reverse proxy** (nginx, Caddy, Traefik)

### Reverse Proxy Example (nginx)

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Maintenance

### Database Backup

```bash
# Create backup
docker-compose exec db pg_dump -U toolshed toolshed > backup.sql

# Restore backup
docker-compose exec -T db psql -U toolshed toolshed < backup.sql
```

### Update Application

```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose down
docker-compose up --build
```

### View Logs

```bash
# All services
docker-compose logs

# Specific service
docker-compose logs app
docker-compose logs db

# Follow logs
docker-compose logs -f
```

### Clean Up

```bash
# Stop services
docker-compose down

# Remove volumes (WARNING: destroys data)
docker-compose down -v

# Remove images
docker-compose down --rmi all
```

## Health Checks

Both services include health checks:

- **Database**: Uses `pg_isready` to verify PostgreSQL is accepting connections
- **Application**: Uses the `/api/health` endpoint to verify the app is running

Health status can be checked with:
```bash
docker-compose ps
```

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Change port in docker-compose.yml
   ports:
     - "3001:3000"
   ```

2. **Database connection issues**
   ```bash
   # Check database logs
   docker-compose logs db
   
   # Verify database is healthy
   docker-compose ps
   ```

3. **Application won't start**
   ```bash
   # Check application logs
   docker-compose logs app
   
   # Try rebuilding
   docker-compose up --build
   ```

4. **Sample data not loading**
   ```bash
   # Recreate database
   docker-compose down -v
   docker-compose up
   ```

### Development vs Replit

This Docker setup is independent of the Replit configuration. Both environments can coexist:

- **Replit**: Uses `.replit` configuration and Neon database
- **Docker**: Uses local PostgreSQL and docker-compose configuration

The application automatically detects the environment and uses appropriate settings.

## System Requirements

- Docker Engine 20.10+
- Docker Compose 2.0+
- 2GB RAM minimum
- 1GB disk space for images and data

## Security Notes

- Default passwords are for development only
- Change all default credentials in production
- Run behind HTTPS in production
- Consider using Docker secrets for sensitive data
- Regularly update base images for security patches

