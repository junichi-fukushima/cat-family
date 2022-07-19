/***********
 * 募集管理ページ
 * /my/collect/
***********/

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import { MyPageTemplate } from "../../src/components/template/My";
import { CatCollectList } from "../../src/components/organisms/CatCollectList";

const MyPageCollect: NextPage = () => {
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
      <MyPageTemplate title="募集一覧">
        <CatCollectList />
      </MyPageTemplate>
    </>
  );
};
export default MyPageCollect;
