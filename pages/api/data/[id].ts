import type { NextApiRequest, NextApiResponse } from 'next';
import { task } from '../../../utils/data/test.json';


export default function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const { query } = req
   const { id } = query
   const filtered = task.filter((p) => p.id === id)
   res.status(200).json(filtered[0])
}
