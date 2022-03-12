// import React && Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../src/state/store/type";
import { getCatType } from "../../src/state/ducks/labels/selectors";
import { fetchCatType } from "../../src/state/ducks/labels/operation";
import { useForm, SubmitHandler } from "react-hook-form";

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import styled-components
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { InputText } from "../../src/components/atoms/input/Form/InputText";
import { SubmitButton } from "../../src/components/atoms/input/Form/SubmitButton";
import { AuthTemplate } from "../../src/components/template/pages/Auth";
import { HeadTemplate } from "../../src/components/template/head/Head";
import { FormWrapper } from "../../src/components/organisms/Form/FormWrapper";
import { InputSelect } from "../../src/components/atoms/input/Form/InputSelect";
import { prefecture } from "../../src/data/prefecture";
import styled from "styled-components";

export interface FormValues {
  user_name: string;
  nickname: string;
  phone: number;
  email: string;
  post_code: number;
  prefecture_id: number;
  city: string;
  building: string;
  cat_type_id: number;
  password: string;
  password_confirmation: string;
}

const EmailSignUp: NextPage = () => {
  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatType());
  }, []);
  const selector = useSelector((state: State) => state);
  const catType = getCatType(selector);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <Head>
        <HeadTemplate />
      </Head>
      <AuthTemplate>
        <H2Text>新規登録</H2Text>
        <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <InputText
              type="text"
              placeholder="(例) 福嶋 淳一"
              register={register("user_name", {
                required: {
                  value: true,
                  message: "氏名を入力してください",
                },
              })}
              errors={errors}
              required={true}
            >
              氏名
            </InputText>
            <InputText
              type="text"
              placeholder="(例) 猫好き福ちゃん"
              register={register("nickname", {
                required: {
                  value: true,
                  message: "ニックネームを入力してください",
                },
              })}
              errors={errors}
              required={true}
            >
              ニックネーム
            </InputText>
            <InputText
              type="tel"
              placeholder="(例) 08021494335"
              notice="※ハイフンなしで入力してください"
              register={register("phone", {
                required: {
                  value: true,
                  message: "電話番号を入力してください",
                },
                pattern: {
                  value: /^0\d{9,10}$/,
                  message: "正しい形式で電話番号を入力してください。",
                },
              })}
              errors={errors}
              required={true}
            >
              電話番号
            </InputText>
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
              required={true}
            >
              メールアドレス
            </InputText>
            <InputText
              type="text"
              placeholder="(例) 1112222"
              notice="※ハイフンなしで入力してください"
              register={register("post_code", {
                required: {
                  value: true,
                  message: "郵便番号を入力してください",
                },
                pattern: {
                  value: /^0\d{9,10}$/,
                  message: "正しい形式で郵便番号を入力してください。",
                },
              })}
              errors={errors}
              required={true}
            >
              郵便番号
            </InputText>
            <InputSelect
              options={prefecture}
              register={register("prefecture_id", {
                required: {
                  value: true,
                  message: "都道府県を選択してください",
                },
              })}
              errors={errors}
              required={true}
            >
              都道府県
            </InputSelect>
            <InputText
              type="text"
              placeholder="(例) 市区町村"
              register={register("city", {
                required: {
                  value: true,
                  message: "市区町村を入力してください",
                },
              })}
              errors={errors}
              required={true}
            >
              市区町村
            </InputText>
            <InputText
              type="text"
              placeholder="(例) ３−３−３猫ハウス２０１号室"
              register={register("building", { required: false })}
              errors={errors}
              required={false}
            >
              番地以下
            </InputText>
            <InputSelect
              options={catType}
              register={register("cat_type_id", {
                required: {
                  value: true,
                  message: "好みの猫ちゃんを選択してください",
                },
              })}
              errors={errors}
              required={true}
            >
              好みの猫ちゃん
            </InputSelect>
            <InputText
              type="password"
              notice="※半角英数字8文字以上で入力してください。"
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
              required={true}
            >
              パスワード
            </InputText>
            <InputText
              type="password"
              register={register("password_confirmation", {
                required: {
                  value: true,
                  message: "パスワード(確認)を入力してください",
                },
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
                  message: "半角英数字8文字以上で入力してください",
                },
                validate: {
                  value: (value) =>
                    value === getValues("password") ||
                    "パスワードが一致していません。",
                },
              })}
              errors={errors}
              required={true}
            >
              パスワード(確認)
            </InputText>
            <SubmitButton type="submit" value="新規登録" />
          </FormWrapper>
        </RegistrationForm>
      </AuthTemplate>
    </>
  );
};
export default EmailSignUp;

const RegistrationForm = styled.form``;
