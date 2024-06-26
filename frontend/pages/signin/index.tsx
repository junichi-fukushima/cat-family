// import React && Redux && react-hook-form
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
// import styled-components
import styled from "styled-components";

// import components
import { AuthButton } from "../../src/components/atoms/button/AuthButton";
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { H3Text } from "../../src/components/atoms/text/H3Text";
import { InputText } from "../../src/components/atoms/input/InputText";
import { SubmitButton } from "../../src/components/atoms/input/SubmitButton";
import { AuthTemplate } from "../../src/components/template/Auth";
import { FormWrapper } from "../../src/components/organisms/FormWrapper";
import { useSignIn } from "../../src/state/ducks/user/operation";

import { color } from "../../src/utility/colors";
import { signIn } from "../../src/hooks/auth";

// ログインの際に使用する値
export interface FormValues {
  email: string;
  password: string;
}
const SignIn: NextPage = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "fukushima146749@gmail.com",
      password: "AAA55555",
    },
  });

  // ログインに失敗した時はエラー文を表示
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const res = await signIn(data);
    console.log(res);
    try {
      // ログイン画面のエラー表示をOFFに
      setAlertMessageOpen(false);
      // localstorageに保存
      window.localStorage.setItem("token", `Bearer ${res.data.token}`);
      // storeにデータを格納する
      dispatch(useSignIn(res.data.user));
      router.push("/");
    } catch (err) {
      if(res.data.message === "メール認証をしてください"){
        // リダイレクトさせる際は、アラート表示する前にリダイレクトしたいのでawaitさせる
        await router.push("/signup/temporary");
      }
      setAlertMessageOpen(true);
    }
  };
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
        <H2Text>ログイン</H2Text>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          {alertMessageOpen ? (
            <ErrorMessage>
              メールアドレスもしくはパスワードをご確認ください。
            </ErrorMessage>
          ) : null}
          <FormWrapper>
            <InputText
              type="email"
              placeholder="(例) nekochan@gmail.com"
              register={register("email", {
                required: {
                  value: true,
                  message: "メールアドレスを入力してください",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "正しい形式でメールアドレスを入力してください。",
                },
              })}
              errors={errors}
            >
              メールアドレス
            </InputText>
            <InputText
              type="password"
              register={register("password", {
                required: {
                  value: true,
                  message: "パスワードを入力してください",
                },
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
                  message: "半角英数字8文字以上で入力してください",
                },
              })}
              errors={errors}
            >
              パスワード
            </InputText>
            <SubmitButton type="submit" value="ログイン" />
          </FormWrapper>
        </LoginForm>
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

const ErrorMessage = styled.p`
  color: ${color.red};
  margin-top: 10px;
`;

const LoginForm = styled.form``;
