// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import styled-components
import styled from "styled-components";

// import components
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { AuthTemplate } from "../../src/components/template/Auth";

const Temporary: NextPage = () => {
  return (
    <>
      <Head>
      <Head>
        <title>Cat Family 猫好きのための里親コミュニティ</title>
        <meta
          name="description"
          content="Cat Family 猫好きのための里親コミュニティ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      </Head>
      <AuthTemplate>
        <H2Text>仮登録が完了しました</H2Text>
        <SubText>ご登録頂いたメールアドレスに確認用メールを送付しました。</SubText>
        <SubText>※まだ、本登録は完了していませんので、ご注意ください。</SubText>
      </AuthTemplate>
    </>
  );
};
export default Temporary;

const SubText = styled.p`
  margin: 20px 0;
`;
