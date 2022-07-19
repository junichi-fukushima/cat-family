/***********
 * ブックマーク管理ページ
 * /my/bookmark/
 ***********/

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import { MyPageTemplate } from "../../src/components/template/My";
import { MyCatList } from "../../src/components/organisms/MyCatList";

const MyPageBookMark: NextPage = () => {
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
      <MyPageTemplate title="ブックマーク">
        <MyCatList />
      </MyPageTemplate>
    </>
  );
};
export default MyPageBookMark;
