// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

// import components
import { H2Text } from "../../src/components/atoms/text/H2Text";

// import styled-components
import styled from "styled-components";
import { HeadTemplate } from "../../src/components/template/head/Head";
import { AuthTemplate } from "../../src/components/template/pages/Auth";
import { PrimaryButton } from "../../src/components/atoms/button/PrimaryButton";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <HeadTemplate />
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
