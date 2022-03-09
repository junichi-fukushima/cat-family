// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

// import styled-components
import styled from "styled-components";
import { AuthButton } from "../../src/components/atoms/button/AuthButton";
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { H3Text } from "../../src/components/atoms/text/H3Text";
import { InputText } from "../../src/components/atoms/input/Form/InputText";
import { SubmitButton } from "../../src/components/atoms/input/Form/SubmitButton";
import { AuthTemplate } from "../../src/components/template/pages/Auth";
import { HeadTemplate } from "../../src/components/template/head/Head";
import { FormItem } from "../../src/components/organisms/Form/FormItem";

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <HeadTemplate />
      </Head>
      <AuthTemplate>
        <H2Text>ログイン</H2Text>
        <FormItem>
          <InputText type="email" placeholder="fukuima1749@gmail.com">氏名(フルネーム)</InputText>
          <InputText type="text">パスワード</InputText>
          <SubmitButton type="submit" value="ログイン" />
        </FormItem>
        <AuthButtonWraper>
          <Link href="#">
            <a>
              <AuthButton auth="google">Googleアカウントでログイン</AuthButton>
            </a>
          </Link>
        </AuthButtonWraper>
        <AuthBottom>
          <H3Text>アカウントをお持ちでない方</H3Text>
          <AuthButtonWraper>
            <Link href="/signup">
              <a>
                <AuthButton auth="normal">新規登録ページ</AuthButton>
              </a>
            </Link>
          </AuthButtonWraper>
        </AuthBottom>
      </AuthTemplate>
    </>
  );
};
export default SignIn;

const AuthButtonWraper = styled.div`
  padding: 15px 0;
  display: grid;
  gap: 20px 0;
`;
const AuthBottom = styled.div`
  margin-top: 30px;
`;
