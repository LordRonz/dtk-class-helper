// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import type { DataMatkul } from '@/data/dataMatkul';
import dataMatkul from '@/data/dataMatkul';

type Data = {
  dataMatkul: DataMatkul[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ dataMatkul });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
