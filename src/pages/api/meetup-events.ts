import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://meetup.builddetroit.xyz/api/meetup/events');
    
    if (!response.ok) {
      throw new Error(`Meetup API returned ${response.status}`);
    }

    const data = await response.json();
    
    // Cache for 5 minutes
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching meetup events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}
