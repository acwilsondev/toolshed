# Toolshed

A community tool sharing platform that makes it easy to lend and borrow tools with your neighbors. Built for individuals, neighborhoods, makerspaces, and community organizations.

## Features

- **Share Your Tools**: List tools, equipment, and items you're willing to lend
- **Browse & Borrow**: Find what you need from your community
- **Easy Reservations**: Request items with flexible dates and quantities
- **Approval Workflow**: Owners can approve or decline requests
- **Simple Management**: Track active loans, returns, and history
- **Self-Hosted**: Keep your community data private and secure
- **Docker Ready**: One-command deployment with no configuration

## How It Works

### For Tool Owners

1. **List Your Tools**: Add tools with photos, descriptions, and availability
2. **Set Your Terms**: Define loan periods, quantities, and any special notes
3. **Approve Requests**: Review and approve reservation requests from borrowers
4. **Track Loans**: Monitor active reservations and receive return notifications

### For Borrowers

1. **Browse Available Tools**: Search and filter through community inventory
2. **Request Items**: Submit reservation requests with your preferred dates
3. **Coordinate Pickup**: Arrange pickup details with the owner
4. **Return Safely**: Complete the loan and update the system

### Reservation States

- **Pending**: Waiting for owner approval
- **Approved**: Ready for pickup
- **Active**: Item is currently borrowed
- **Returned**: Successfully completed
- **Cancelled**: Cancelled by either party

## Self-Hosting with Docker

## Quick Start (2 Minutes)

Get Toolshed running for your community:

**Prerequisites**: Install [Docker](https://docs.docker.com/get-docker/) on your computer

```bash
git clone <repository-url>
cd toolshed
docker-compose up
```

That's it! Open `http://localhost:3000` in your browser and start sharing tools with your neighbors.

### What happens

- PostgreSQL database is created with sample data
- Application builds and starts automatically  
- Database persists between container restarts
- Health checks ensure services are running properly

## Demo Users

The application comes with sample data for testing:

| User | Email | Password | Role |
|------|-------|----------|----- |
| Alice Johnson | `alice@neighborhood.local` | `password123` | Tool owner & borrower |
| Bob Smith | `bob@neighborhood.local` | `password123` | Tool owner & borrower |
| Carol Davis | `carol@neighborhood.local` | `password123` | Tool owner & borrower |

## Configuration

### For Your Community

To set up Toolshed for your neighborhood or community:

1. **Change the Session Secret** (Important for security):

   ```bash
   cp .env.example .env
   # Edit .env and change SESSION_SECRET to a random string
   ```

2. **Run in Production Mode**:

   ```bash
   echo "NODE_ENV=production" >> .env
   echo "SESSION_SECRET=$(openssl rand -base64 32)" >> .env
   docker-compose up -d
   ```

3. **Access Your Site**: Open `http://your-server:3000` in a web browser

### Important Security Notes

- Always change the default `SESSION_SECRET` before sharing with others
- Consider setting up HTTPS if accessible from the internet
- The database saves all your community's data automatically

## Getting Started for Your Community

### Setting Up User Accounts

1. **Remove Demo Users**: After testing, delete the sample accounts (Alice, Bob, Carol)
2. **Create Real Accounts**: Have community members sign up with their real email addresses
3. **Start Small**: Begin with a few trusted neighbors before expanding

### Community Guidelines (Suggested)

- **Tool Condition**: Only list tools in good working condition
- **Pickup/Return**: Coordinate convenient times for both parties
- **Duration**: Agree on reasonable loan periods (usually a few days to a week)
- **Responsibility**: Borrowers return items in the same condition
- **Communication**: Use the built-in messaging to stay in touch

## Need Help?

If you run into issues:

1. Check that Docker is installed and running
2. Make sure port 3000 isn't being used by another application
3. Look in the `/docs` folder for more detailed instructions
4. Open an issue on GitHub if you're stuck

---

**Built for communities who want to share more and waste less.**
