// import React && Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../src/state/store/type";
import { getCatType } from "../../src/state/ducks/labels/selectors";
import { fetchCatType } from "../../src/state/ducks/labels/operation";

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
import { InputSelect } from "../../src/components/atoms/input/Form/InputSelect";
import { prefecture } from "../../src/data/prefecture";


const EmailSignUp: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatType());
  }, []);
  const selector = useSelector((state: State) => state);
  const catType = getCatType(selector);

  return (
    <>
      <Head>
        <HeadTemplate />
      </Head>
      <AuthTemplate>
        <H2Text>新規登録</H2Text>
        <FormItem>
          <InputText type="text" placeholder="(例) 福嶋 淳一">
            氏名(フルネーム)
          </InputText>
          <InputText type="text" placeholder="(例) 猫好き福ちゃん">
            ニックネーム
          </InputText>
          <InputText
            type="tel"
            placeholder="(例) 08021494335"
            notice="※ハイフンなしで入力してください"
          >
            電話番号
          </InputText>
          <InputText type="email" placeholder="(例) nekochan@gmail.com">
            メールアドレス
          </InputText>
          <InputText
            type="text"
            placeholder="(例) 1112222"
            notice="※ハイフンなしで入力してください"
          >
            郵便番号
          </InputText>
          <InputSelect options={prefecture}>都道府県</InputSelect>
          <InputText type="text" placeholder="(例) 市区町村">
            市区町村
          </InputText>
          <InputText type="text" placeholder="(例) ３−３−３猫ハウス２０１号室">
            番地以下
          </InputText>
          {console.log(catType)}
          <InputSelect options={catType}>好みの猫ちゃん</InputSelect>
          <InputText
            type="text"
            notice="※半角英数字8文字以上で入力してください。"
          >
            パスワード
          </InputText>
          <InputText type="text">パスワード(確認)</InputText>
          <SubmitButton type="submit" value="新規登録" />
        </FormItem>
      </AuthTemplate>
    </>
  );
};
export default EmailSignUp;
