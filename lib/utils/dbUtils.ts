import { supabase } from "./supabaseClient";

export async function getIPAddresses() {
  try {
    let { data: ip_addresses, error } = await supabase
      .from("request_ip_address")
      .select("ip_address");
    if (error) console.log(error.message);
    console.log(ip_addresses);
  } catch (e: any) {
    console.log(e.message);
  }
}

export function getBlockedIPs () {
  
}
