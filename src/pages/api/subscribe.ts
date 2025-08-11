import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../lib/db';
import { emailSubscriptions, type NewEmailSubscription } from '../../lib/schema';
import { eq } from 'drizzle-orm';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body as { email: string };
      
      if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
      }

      // Check if email already exists
      const existingSubscription = await db
        .select()
        .from(emailSubscriptions)
        .where(eq(emailSubscriptions.email, email))
        .limit(1);

      if (existingSubscription.length > 0) {
        const subscription = existingSubscription[0];
        
        if (subscription.isActive) {
          return res.status(409).json({ error: 'Email already subscribed' });
        } else {
          // Reactivate subscription
          await db
            .update(emailSubscriptions)
            .set({ 
              isActive: true, 
              unsubscribedAt: null 
            })
            .where(eq(emailSubscriptions.id, subscription.id));
          
          return res.status(200).json({ message: 'Email subscription reactivated' });
        }
      }

      // Create new subscription
      const newSubscription = await db
        .insert(emailSubscriptions)
        .values({
          email: email.toLowerCase().trim(),
        })
        .returning();

      res.status(201).json({ 
        message: 'Successfully subscribed!',
        subscription: newSubscription[0]
      });
    } catch (error) {
      console.error('Error subscribing email:', error);
      
      // Check if it's a database connection error
      if (error instanceof Error && error.message.includes('no such table') || 
          error instanceof Error && error.message.includes('SQLITE_UNKNOWN')) {
        return res.status(503).json({ 
          error: 'Database not configured. Please set up the database first.',
          message: 'Email subscription service temporarily unavailable'
        });
      }
      
      res.status(500).json({ error: 'Failed to subscribe email' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { email } = req.body as { email: string };
      
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      await db
        .update(emailSubscriptions)
        .set({ 
          isActive: false, 
          unsubscribedAt: new Date() 
        })
        .where(eq(emailSubscriptions.email, email.toLowerCase().trim()));

      res.status(200).json({ message: 'Successfully unsubscribed' });
    } catch (error) {
      console.error('Error unsubscribing email:', error);
      
      // Check if it's a database connection error
      if (error instanceof Error && error.message.includes('no such table') || 
          error instanceof Error && error.message.includes('SQLITE_UNKNOWN')) {
        return res.status(503).json({ 
          error: 'Database not configured. Please set up the database first.',
          message: 'Email subscription service temporarily unavailable'
        });
      }
      
      res.status(500).json({ error: 'Failed to unsubscribe email' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
