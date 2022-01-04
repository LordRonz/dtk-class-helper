// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import safe from 'safe-regex';

import type { DataMatkul } from '@/data/dataMatkul';
import dataMatkul from '@/data/dataMatkul';
import escape from '@/lib/escapeRegex';

type Data = {
  dataMatkul: DataMatkul[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {
    query: { search },
    method,
  } = req;

  const s = search?.toString();

  switch (method) {
    case 'GET': {
      if (!s) {
        res.status(200).json({ dataMatkul });
        return;
      }
      const escapedSearch = escape(s);
      if ((escapedSearch && !safe(escapedSearch)) || !escapedSearch) {
        res.status(400).end('Bad input!');
        return;
      }
      const searchRegex = new RegExp(escapedSearch, 'i');
      const filteredData = dataMatkul.filter((datum) => searchRegex.test(datum.kode) || searchRegex.test(datum.nama));
      res.status(200).json({ dataMatkul: filteredData });
      break;
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
