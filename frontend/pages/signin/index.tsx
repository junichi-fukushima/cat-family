// import React && Redux && react-hook-form
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";

// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

// import styled-components
import styled from "styled-components";

// import components
import { AuthButton } from "../../src/components/atoms/button/AuthButton";
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { H3Text } from "../../src/components/atoms/text/H3Text";
import { InputText } from "../../src/components/atoms/input/InputText";
import { SubmitButton } from "../../src/components/atoms/input/SubmitButton";
import { AuthTemplate } from "../../src/components/template/pages/Auth";
import { FormWrapper } from "../../src/components/organisms/Form/FormWrapper";
import { useSignIn } from "../../src/state/ducks/user/operation";
import { useDispatch } from "react-redux";
import { signIn } from "../../src/lib/api/auth";

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
  } = useForm<FormValues>();

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    try {
      const res = await signIn(data);
      console.log(res);
      if(res.status === 200){
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        dispatch(useSignIn(data))
        console.log("成功")
      } else {
        console.log("ユーザー情報を確認してください")
      }
    } catch (err) {
      // console.log(err);
    }
    // 成功時の処理
    // ユーザー情報をstateに格納
    // トップへリダイレクト
    // 失敗時の処理
    // サーバー側からエラー文をもらう
    // ログインstatusをfalseに変更
    //
    // 大枠
    // ログイン自体の機能を実装
    // 全体に反映させる
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

const LoginForm = styled.form``;
