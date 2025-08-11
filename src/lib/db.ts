import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

// Create the libsql client
const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Create the drizzle database instance
export const db = drizzle(client);
