// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

// import components
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { H3Text } from "../../src/components/atoms/text/H3Text";

// import styled-components
import styled from "styled-components";
import { AuthButton } from "../../src/components/atoms/button/AuthButton";
import { HeadTemplate } from "../../src/components/template/head/Head";
import { AuthTemplate } from "../../src/components/template/pages/Auth";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <HeadTemplate />
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