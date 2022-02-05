import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeaderLayout } from "../components/organisms/leyout/HeaderLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cat Family 猫好きのための里親コミュニティ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container my-0 lg:mx-auto md:w-screen">
        <HeaderLayout />
      </div>
    </>
  );
};

export default Home;
