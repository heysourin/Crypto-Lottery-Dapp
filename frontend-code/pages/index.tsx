import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Web3 Lottery Dapp </title>
        <link rel="icon" href="/lottery2.png" />
      </Head>
      {/* <h1 className="text-white">Building Awesome Web3 Dapp</h1> */}
      <Header/>
    </div>
  );
};

export default Home;
