import bodyParser from 'body-parser';
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const directoryPath = process.cwd() + '/data/blog/'
  const files = fs.readdirSync(directoryPath);
  const slugs = files.map((file: string) => file.split('.')[0]);
  const paths = slugs.map(slug => '/blog/' + slug)
  res.status(200).json({ paths: paths});
}