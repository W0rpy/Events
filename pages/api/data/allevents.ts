import type { NextApiRequest, NextApiResponse } from 'next';
import { task } from '../../../utils/data/test.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(task)
}
