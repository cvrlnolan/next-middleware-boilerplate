import { supabase } from "./supabaseClient";

export async function getIPAddresses() {
  let { data: ip_addresses, error } = await supabase
    .from("request_ip_address")
    .select("ip_address");
  if (error) console.log(error.message);
  console.log(ip_addresses);
}

export async function getBlockedIPs() {
  let { data: blocked_ips, error } = await supabase
    .from("request_ip_address")
    .select("ip_address")
    .eq("blocked", true);
  if (error) console.log(error.message);
  // console.log(blocked_ips);
  return blocked_ips;
}
