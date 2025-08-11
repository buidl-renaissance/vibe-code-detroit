# Database Setup Guide

## Quick Setup for Email Subscriptions

The email subscription feature requires a Turso database to be configured. Follow these steps to set it up:

### 1. Install Turso CLI
```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

### 2. Create a Turso Database
```bash
turso db create vibe-code-detroit
```

### 3. Get Database URL and Auth Token
```bash
# Get the database URL
turso db show vibe-code-detroit --url

# Get the auth token
turso db tokens create vibe-code-detroit
```

### 4. Set Environment Variables
Create a `.env.local` file in your project root with:
```
TURSO_DATABASE_URL=libsql://vibe-code-detroit.turso.io
TURSO_AUTH_TOKEN=your-auth-token-here
```

### 5. Run Database Migrations
```bash
# Apply migrations to your database
yarn db:migrate
```

### 6. Test the Setup
Start your development server and try subscribing to the email list. It should work without errors.

## Alternative: Skip Database Setup

If you don't want to set up the database right now, the QR code page and other features will still work. The email subscription will show a "service temporarily unavailable" message until the database is configured.

## Available Database Scripts

- `yarn db:generate` - Generate migration files from schema changes
- `yarn db:migrate` - Apply migrations to the database  
- `yarn db:studio` - Open Drizzle Studio for database management

## Troubleshooting

If you see "SQLite error: no such table" errors, it means the database migrations haven't been run. Follow steps 4-5 above.

If you see "HTTP status 401" errors, it means your `TURSO_AUTH_TOKEN` is invalid or missing. Regenerate the token using `turso db tokens create vibe-code-detroit`.
