import { IP_Address } from "./types";

export function generateIP(): string {
  let ip_address =
    Math.floor(Math.random() * 255) +
    1 +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255);
  return ip_address;
}

export async function middlewareBlockedIPs() {
  /** Since node-fetch uses absolute URLs, set the resource variable to your production URL
   * or during developement use: http://localhost:3000/.
   * We do this manually because middlewares run on the server-side hence can't capture the window.location object
   * */

  const response = await fetch(
    "https://next-middleware-boilerplate.vercel.app/api/fetchBlockedIPs",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await response.json();
  // console.log(data);
  return data;
}

export function searchBlockedIP(
  ip: string,
  blocked_ips: IP_Address[]
): boolean {
  let blocked = false;
  blocked_ips.forEach((data: IP_Address, i: number) => {
    if (data.ip_address === ip) {
      console.log(data.ip_address);
      blocked = true;
    }
  });
  return blocked;
}
