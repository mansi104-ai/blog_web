import { NextApiRequest, NextApiResponse } from 'next';
import { draftMode } from 'next/headers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({enable : true});
  res.writeHead(307,{Location : "/"});
  res.end();
}
