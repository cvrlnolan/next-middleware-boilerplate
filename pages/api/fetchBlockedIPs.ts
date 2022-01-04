import type { NextApiRequest, NextApiResponse } from "next";
import { getBlockedIPs } from "lib/utils/dbUtils";
import { IP_Address } from "lib/utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IP_Address[] | any>
) {
  try {
    let blocked_ips = await getBlockedIPs();
    if (blocked_ips) {
      res.status(200).json(blocked_ips as IP_Address[]);
    } else {
      res.status(200).json([]);
    }
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
