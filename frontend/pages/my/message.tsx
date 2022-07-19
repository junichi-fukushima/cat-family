/***********
 * DM
 * /my/message/
***********/

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import { MyPageTemplate } from "../../src/components/template/My";

const MyPageMessage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cat Family 猫好きのための里親コミュニティ</title>
        <meta
          name="description"
          content="Cat Family 猫好きのための里親コミュニティ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyPageTemplate title="メッセージ">
        <p>a</p>
      </MyPageTemplate>
    </>
  );
};
export default MyPageMessage;