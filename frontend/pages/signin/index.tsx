// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

// import components
import { Container } from "../../src/components/template/layout/Container";
import { HeaderLayout } from "../../src/components/template/layout/HeaderLayout";

// import styled-components
import styled from "styled-components";
import { color } from "../../src/utility/colors";
import { device } from "../../src/utility/responsive";
import { AuthButton } from "../../src/components/atoms/button/AuthButton";
import { H2Text } from "../../src/components/atoms/text/H2Text";

const SignIn: NextPage = () => {
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
      <HeaderLayout />
      <Container>
        <AuthWrap>
          <AuthInner>
            <H2Text>ログイン</H2Text>
            <AuthButtonWraper>
              <Link href="#">
                <a>
                  <AuthButton auth="google">Googleアカウントで登録</AuthButton>
                </a>
              </Link>
            </AuthButtonWraper>
            <H2Text>アカウントをお持ちでない方</H2Text>
            <AuthButtonWraper>
              <Link href="/signup">
                <a>
                  <AuthButton auth="normal">新規登録ページ</AuthButton>
                </a>
              </Link>
            </AuthButtonWraper>
          </AuthInner>
        </AuthWrap>
      </Container>
    </>
  );
};
export default SignIn;

const AuthWrap = styled.div`
  background-color: ${color.white};
  text-align: center;
  @media ${device.pc} {
    display: grid;
    grid-template-columns: 1fr 600px 1fr;
  }
  @media ${device.sp} {
    margin: 0 15px;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    background-color: ${color.lightGrey};
  }
`;

const AuthInner = styled.div`
  padding: 30px;
`;
const AuthButtonWraper = styled.div`
  padding: 15px 0;
  display: grid;
  gap: 20px 0;
`;
