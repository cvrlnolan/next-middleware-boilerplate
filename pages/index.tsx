import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import map from "public/world.svg";
import Image from "next/image";
import axios from "axios";
import { supabase } from "lib/utils/supabaseClient";

export const getServerSideProps = ({ query }: any) => ({
  props: query,
});

const Home: NextPage<{
  country: string;
  ip: string;
  region: string;
  city: string;
  ua: string;
  os: string;
  os_version: string;
  browser: string;
}> = ({ country, ip, region, city, ua, os, os_version, browser }) => {
  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     await axios.get("/api/fetchIPs");
    //   } catch (e: any) {
    //     console.log(e.message);
    //   }
    // }
    // fetchData();
    registerIP(ip);
  }, [ip]);

  const blockIP = async (ip: string) => {
    let { data: ip_address, error } = await supabase
      .from("request_ip_address")
      .update({ blocked: true })
      .eq("ip_address", ip)
      .single();
    if (error) console.log(error.message);
    console.log(ip_address);
  };

  const registerIP = async (ip: string) => {
    let { data: ip_address, error } = await supabase
      .from("request_ip_address")
      .upsert({ ip_address: ip }, { onConflict: "ip_address" })
      .single();
    if (error) console.log(error.message);
    console.log(ip_address);
  };

  return (
    <>
      <Head>
        <title>Edge Functions</title>
      </Head>
      <div className="flex w-full min-h-screen p-2 justify-center items-center overflow-hidden relative fixed inset-0">
        <Image
          alt="map"
          src={map}
          layout="fill"
          objectFit="cover"
          className="opacity-75"
          quality={100}
          priority
        />
        <div className="block p-4 w-4/5 md:w-1/2 mx-auto space-y-2 shadow rounded absolute">
          <p>Request User Information</p>
          <p>Country: {country}</p>
          <p>Region: {region}</p>
          <p>City: {city}</p>
          <p>IP Address: {ip}</p>
          <p>User Agent: {ua}</p>
          <p>
            Operating System: {os} {os_version}
          </p>
          <p>Browser: {browser}</p>
        </div>
        <div className="flex w-4/5 md:w-1/2 mx-auto mb-4 justify-between items-center absolute bottom-0">
          <button
            className="px-2 py-1.5 bg-sky-200 rounded shadow appearance-none focus:ring-2 focus:ring-offset-2 focus-ring-sky-100 hover:bg-sky-300 transition duration-300"
            onClick={() => blockIP(ip)}
          >
            Block IP Address
          </button>
          <button
            className="px-2 py-1.5 bg-sky-200 rounded shadow appearance-none focus:ring-2 focus:ring-offset-2 focus-ring-sky-100 hover:bg-sky-300 transition duration-300"
            onClick={() => console.log("clicked")}
          >
            Block Country
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
