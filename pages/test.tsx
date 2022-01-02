import type { NextPage } from "next";
import Head from "next/head";

const Test: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edge Functions | Rewrite</title>
      </Head>
      <div className="flex w-full min-h-screen justify-center items-center">
        <p>Test Edge Function Page</p>
      </div>
    </>
  );
};

export default Test;
