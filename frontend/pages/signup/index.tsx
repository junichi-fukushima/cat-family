// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

// import styled-components
import styled from "styled-components";

// import components
import { AuthButton } from "../../src/components/atoms/button/AuthButton";
import { AuthTemplate } from "../../src/components/template/Auth";
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { H3Text } from "../../src/components/atoms/text/H3Text";


const SignUp: NextPage = () => {
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
      <AuthTemplate>
        <H2Text>新規登録</H2Text>
        <AuthButtonWraper>
          <Link href="/signup/email">
            <a>
              <AuthButton auth="email">メールアドレスで登録</AuthButton>
            </a>
          </Link>
          <Link href="#">
            <a>
              <AuthButton auth="google">Googleアカウントで登録</AuthButton>
            </a>
          </Link>
        </AuthButtonWraper>
        <AuthBottom>
          <H3Text>アカウントをお持ちの方</H3Text>
          <AuthButtonWraper>
            <Link href="/signin">
              <a>
                <AuthButton auth="normal">ログインページ</AuthButton>
              </a>
            </Link>
          </AuthButtonWraper>
        </AuthBottom>
      </AuthTemplate>
    </>
  );
};
export default SignUp;

const AuthButtonWraper = styled.div`
  padding: 15px 0;
  display: grid;
  gap: 20px 0;
`;
const AuthBottom = styled.div`
  margin-top: 30px;
`;
