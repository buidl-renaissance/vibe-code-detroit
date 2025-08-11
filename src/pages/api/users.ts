import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../lib/db';
import { users, type NewUser } from '../../lib/schema';
import { eq } from 'drizzle-orm';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const allUsers = await db.select().from(users);
      res.status(200).json(allUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, email } = req.body as NewUser;
      
      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }

      const newUser = await db.insert(users).values({
        name,
        email,
      }).returning();

      res.status(201).json(newUser[0]);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
