# Turso Database Setup with Drizzle ORM

This project is configured to use Turso database with Drizzle ORM.

## Setup Instructions

### 1. Install Turso CLI
```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

### 2. Create a Turso Database
```bash
turso db create your-database-name
```

### 3. Get Database URL and Auth Token
```bash
# Get the database URL
turso db show your-database-name --url

# Get the auth token
turso db tokens create your-database-name
```

### 4. Set Environment Variables
Create a `.env.local` file in your project root with:
```
TURSO_DATABASE_URL=libsql://your-database-name.turso.io
TURSO_AUTH_TOKEN=your-auth-token-here
```

### 5. Generate and Run Migrations
```bash
# Generate migration files
yarn db:generate

# Apply migrations to your database
yarn db:migrate
```

### 6. (Optional) Open Drizzle Studio
```bash
yarn db:studio
```

## Available Scripts

- `yarn db:generate` - Generate migration files from schema changes
- `yarn db:migrate` - Apply migrations to the database
- `yarn db:studio` - Open Drizzle Studio for database management

## Database Schema

The current schema includes:
- `users` table with id, name, email, and timestamps
- `posts` table with id, title, content, author reference, and timestamps

You can modify the schema in `src/lib/schema.ts` and run `yarn db:generate` to create new migrations.

## API Usage

The project includes example API routes:
- `GET /api/users` - Fetch all users
- `POST /api/users` - Create a new user

Example usage:
```typescript
import { db } from '../lib/db';
import { users } from '../lib/schema';

// Query all users
const allUsers = await db.select().from(users);

// Insert a new user
const newUser = await db.insert(users).values({
  name: 'John Doe',
  email: 'john@example.com'
}).returning();
```
