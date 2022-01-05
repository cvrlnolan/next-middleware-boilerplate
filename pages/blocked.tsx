import type { NextPage } from "next";
import Head from "next/head";

export const getServerSideProps = ({ query }: any) => ({
  props: query,
});

const Blocked: NextPage<{ ip: string }> = ({ ip }) => {
  return (
    <>
      <Head>
        <title>Edge Functions | Blocked IP</title>
      </Head>
      <div className="flex w-full min-h-screen justify-center items-center">
        <p>Your IP Address: {ip} has been banned from this website.</p>
      </div>
    </>
  );
};

export default Blocked;
