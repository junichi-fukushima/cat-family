// import React && Redux
// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import styled-components
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { InputText } from "../../src/components/atoms/input/Form/InputText";
import { SubmitButton } from "../../src/components/atoms/input/Form/SubmitButton";
import { AuthTemplate } from "../../src/components/template/pages/Auth";
import { HeadTemplate } from "../../src/components/template/head/Head";
import { FormItem } from "../../src/components/organisms/Form/FormItem";

const EmailSignUp: NextPage = () => {
  return (
    <>
      <Head>
        <HeadTemplate />
      </Head>
      <AuthTemplate>
        <H2Text>新規登録</H2Text>
        <FormItem>
          <InputText type="text" placeholder="(例) 福嶋 淳一">氏名(フルネーム)</InputText>
          <InputText type="text" placeholder="(例) 猫好き福ちゃん">ニックネーム</InputText>
          <InputText type="tel" placeholder="(例) 08021494335" notice="※ハイフンなしで入力してください">電話番号</InputText>
          <InputText type="email" placeholder="(例) nekochan@gmail.com">メールアドレス</InputText>
          <InputText type="text" placeholder="(例) 1112222" notice="※ハイフンなしで入力してください">郵便番号</InputText>
          <InputText type="text" placeholder="選択してください">都道府県</InputText>
          <InputText type="text" placeholder="(例) 市区町村">市区町村</InputText>
          <InputText type="text" placeholder="(例) ３−３−３猫ハウス２０１号室">番地以下</InputText>
          <InputText type="text" placeholder="選択してください">好みの猫ちゃん</InputText>
          <InputText type="text" notice="※半角英数字8文字以上で入力してください。">パスワード</InputText>
          <InputText type="text">パスワード(確認)</InputText>
          <SubmitButton type="submit" value="新規登録" />
        </FormItem>
      </AuthTemplate>
    </>
  );
};
export default EmailSignUp;
