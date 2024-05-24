import { NextApiRequest, NextApiResponse } from 'next';
import { draftMode } from 'next/headers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  draftMode().enable();
  return res.status(200).json({ message: 'Draft mode enabled' });
}
