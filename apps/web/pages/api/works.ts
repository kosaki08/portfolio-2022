import { prisma } from '@portfolio-2022/database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const works = await prisma.work.findMany();
    if (!works)
      throw {
        message: 'Failed to retrieve works',
        status: 500,
      };

    return res.status(200).json({
      works,
    });
  } catch ({ message = 'An unknown error occured', status = 500 }) {
    console.error({ message, status });
    return res.status(status as number).end(message);
  }
}
