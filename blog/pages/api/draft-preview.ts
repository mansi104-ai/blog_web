// pages/api/draft-preview.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'next-sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the request method is GET
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // Get the preview token from the Authorization header
  const previewToken = req.headers.authorization?.split(' ')[1];

  if (!previewToken) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // Create a Sanity client with the preview token
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    token: previewToken,
  });

  // Get the slug from the query parameters
  const slug = req.query.slug;

  if (!slug) {
    res.status(400).json({ error: 'Slug is required' });
    return;
  }

  try {
    // Fetch the draft content using the slug
    const data = await client.fetch(`
      *[slug.current == $slug && !(_id in path('drafts.**'))][0]
    `, { slug });

    // If no content is found, return a 404 error
    if (!data) {
      res.status(404).json({ error: 'Content not found' });
      return;
    }

    // Send the draft content as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching draft preview data:', error);
    res.status(500).json({ error: 'Error fetching draft preview data' });
  }
}