import type { NextPage } from "next";
import Head from "next/head";

const Blocked: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edge Functions | Blocked IP</title>
      </Head>
      <div className="flex w-full min-h-screen justify-center items-center">
        <p>Your IP Address an been banned from this website.</p>
      </div>
    </>
  );
};

export default Blocked;
