import type { NextPage } from "next";
import Head from "next/head";
import map from "../public/world.svg";
import Image from "next/image";

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
  return (
    <>
      <Head>
        <title>Edge Functions</title>
      </Head>
      <div className="flex w-full min-h-screen justify-center items-center overflow-hidden fixed inset-0">
        <Image
          alt="map"
          src={map}
          layout="fill"
          objectFit="cover"
          className="opacity-75"
          quality={100}
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
      </div>
    </>
  );
};

export default Home;
