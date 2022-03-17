// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

// import styled-components
import styled from "styled-components";

// import components
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { AuthTemplate } from "../../src/components/template/pages/Auth";
import { PrimaryButton } from "../../src/components/atoms/button/PrimaryButton";

const SignUp: NextPage = () => {
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
        <H2Text>登録が完了しました！</H2Text>
        <SubText>ご登録ありがとうございます！</SubText>
        <Link href="/">
          <a>
            <PrimaryButton>トップページへ戻る</PrimaryButton>
          </a>
        </Link>
      </AuthTemplate>
    </>
  );
};
export default SignUp;

const SubText = styled.p`
  margin: 20px 0;
`;
