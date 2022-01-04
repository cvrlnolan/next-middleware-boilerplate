import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { generateIP } from "lib/utils/helper";

export default function middleware(req: NextRequest) {
  console.log("Running at the Edge !");

  const { ip, geo, nextUrl: url, ua: userAgent } = req;

  //   console.log(userAgent);

  const country = geo?.country || "Namek";

  const region = geo?.region || "Kame House";

  const city = geo?.city || "Capsule City";

  const agent = userAgent?.ua || "Dragon Ball";

  const OS = userAgent?.os.name || "";

  const OS_version = userAgent?.os.version || "";

  const browser = userAgent?.browser.name || "Non identified";

  url.searchParams.set("country", country);
  url.searchParams.set("ip", ip || generateIP()); // Generate a random IP Address if running on localhost
  url.searchParams.set("region", region);
  url.searchParams.set("city", city);
  url.searchParams.set("ua", agent);
  url.searchParams.set("os", OS);
  url.searchParams.set("os_version", OS_version);
  url.searchParams.set("browser", browser);

  return NextResponse.rewrite(url);
}
