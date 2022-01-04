import type { NextApiRequest, NextApiResponse } from "next";
import { getIPAddresses } from "lib/utils/dbUtils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    getIPAddresses();
    res.status(200).end();
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
