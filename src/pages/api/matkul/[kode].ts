// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import type { DataMatkul } from '@/data/dataMatkul';
import dataMatkul from '@/data/dataMatkul';

export default function handler(req: NextApiRequest, res: NextApiResponse<DataMatkul>) {
  const {
    query: { kode },
    method,
  } = req;

  const matkul = dataMatkul.find((mk) => mk.kode.toLowerCase() == kode.toString().toLowerCase());

  switch (method) {
    case 'GET':
      if (!matkul) {
        res.status(404).end('Not found');
        return;
      }
      res.status(200).json(matkul);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
