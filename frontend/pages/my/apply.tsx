/***********
 * 応募管理ページ
 * /my/apply/
 ***********/
// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import { MyPageTemplate } from "../../src/components/template/My";
import { CatApplyList } from "../../src/components/organisms/CatApplyList";

const MyPageApply: NextPage = () => {
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
      <MyPageTemplate title="応募一覧">
        <CatApplyList />
      </MyPageTemplate>
    </>
  );
};
export default MyPageApply;
