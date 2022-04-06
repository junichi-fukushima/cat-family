/***********
 * プロフィール情報管理ページ
 * /cat/post/
 ***********/

// import React && Redux && react-hook-form
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import styled from "styled-components";
import { InputText } from "../../src/components/atoms/input/InputText";
import { prefecture } from "../../src/data/prefecture";
import { InputSelect } from "../../src/components/atoms/input/InputSelect";
import { InputTextField } from "../../src/components/atoms/input/inputTextField";
import { SubmitButton } from "../../src/components/atoms/input/SubmitButton";
import { InputFileField } from "../../src/components/atoms/input/InputFileField";
import { device } from "../../src/utility/responsive";
import { CatPageTemplate } from "../../src/components/template/pages/Cat/Post";
import { State } from "../../src/state/store/type";
import {
  getCatAge,
  getCatLabel,
  getCatSex,
  getCatType,
} from "../../src/state/ducks/labels/selectors";
import {
  fetchCatAge,
  fetchCatLabel,
  fetchCatSex,
  fetchCatType,
  updateCatLabel,
} from "../../src/state/ducks/labels/operation";
import { useEffect } from "react";
import { CheckBoxCatSearch } from "../../src/components/atoms/input/CheckBoxSearch";

// プロフィール更新の際に使用
export interface FormValues {
  name: string;
  title: string;
  terms: string;
  summary: string;
  price: number;
  status: boolean;
  cat_label_id: number;
  cat_sex_id: number;
  cat_type_id: number;
  cat_age_id: number;
  created_at: string;
  updated_at: string;
  main_image_url: string;
  sub_image_url?: Array<string>;
}

const CatPost: NextPage = () => {
  // react-hook-form
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => data;

  const dispatch = useDispatch();
  const handleChecked = (id: number) => {
    dispatch(updateCatLabel(id));
  };

  // redux
  useEffect(() => {
    dispatch(fetchCatLabel());
    dispatch(fetchCatAge());
    dispatch(fetchCatSex());
    dispatch(fetchCatType());
  }, []);

  const selector = useSelector((state: State) => state);
  const catLabels = getCatLabel(selector);
  const ages = getCatAge(selector);
  const types = getCatType(selector);
  const sexs = getCatSex(selector);

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
      <CatPageTemplate title="里親を募集する">
        <Form>
          <FormList>
            <FormItemCol1>
              <InputText
                type="text"
                placeholder="元気なわんぱくチャ猫！人懐き抜群！"
                notice="里親募集する猫ちゃんの特徴をわかりやすく記載してください！20文字以上80文字以内。"
                register={register("title", {
                  required: {
                    value: true,
                    message: "ニックネームを入力してください",
                  },
                })}
                errors={errors}
              >
                タイトル
              </InputText>
            </FormItemCol1>
            <FormItemCol2>
              <InputSelect
                options={sexs}
                register={register("cat_sex_id", {
                  validate: {
                    value: (value) =>
                      value !== "選択してください" || "性別を選択してください",
                  },
                })}
                errors={errors}
              >
                性別
              </InputSelect>
              <InputSelect
                options={types}
                register={register("cat_type_id", {
                  validate: {
                    value: (value) =>
                      value !== "選択してください" || "種類を選択してください",
                  },
                })}
                errors={errors}
              >
                種類
              </InputSelect>
            </FormItemCol2>
            <FormItemCol2>
              <InputSelect
                options={ages}
                register={register("cat_age_id", {
                  validate: {
                    value: (value) =>
                      value !== "年齢してください" || "年齢を選択してください",
                  },
                })}
                errors={errors}
              >
                年齢
              </InputSelect>
              <InputText
                type="text"
                placeholder="チャチャ"
                register={register("name", {
                  required: {
                    value: true,
                    message: "猫ちゃんの名前を入力してください。",
                  },
                })}
                errors={errors}
              >
                猫ちゃんの名前
              </InputText>
            </FormItemCol2>
            <FormItemCol1>
              <InputFileField type="file" register={register("main_image_url")}>
                メイン画像
              </InputFileField>
            </FormItemCol1>
            <FormItemCol1>
              <InputFileField type="file" register={register("sub_image_url")}>
                サブ画像
              </InputFileField>
            </FormItemCol1>
            <FormItemCol1>
              <InputTextField
                type="text"
                notice="募集の経緯、猫ちゃんの特徴など出来るだけ詳しく記載しましょう。どう言ったイメージの里親さんを求めているのか記載するのも良いかもしれません。"
                register={register("building", { required: false })}
                errors={errors}
                required={false}
              >
                募集概要
              </InputTextField>
            </FormItemCol1>
            <FormItemCol1>
              <CheckBoxWrap>
                {catLabels.map((label, index) => {
                  index = index + 1;
                  return (
                    <CheckBoxCatSearch
                      key={index}
                      id={label.id}
                      checked={label.checked}
                      onChange={handleChecked}
                    >
                      {label.name}
                    </CheckBoxCatSearch>
                  );
                })}
              </CheckBoxWrap>
            </FormItemCol1>
            <FormItemCol1>
              <InputText
                type="text"
                placeholder="30000"
                notice="ワクチン接種費/餌代/交通費など実費でかかったもののみを請求することが出来ます。
                半角数字で入力してください。"
                register={register("title", {
                  required: {
                    value: true,
                    message: "ニックネームを入力してください",
                  },
                })}
                errors={errors}
              >
                譲渡費
              </InputText>
            </FormItemCol1>
            <FormItemSubmitWrap>
              <SubmitButton type="submit" value="投稿する" />
            </FormItemSubmitWrap>
          </FormList>
        </Form>
      </CatPageTemplate>
    </>
  );
};
export default CatPost;

// プロフィール編集
const Form = styled.form``;
const FormList = styled.ul`
  display: grid;
  @media ${device.pc} {
    gap: 40px 0;
  }
  @media ${device.sp} {
    gap: 20px 0;
  }
`;
const FormItemCol2 = styled.li`
  gap: 0 20px;
  @media ${device.pc} {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.sp} {
    > div {
      margin-bottom: 20px;
    }
  }
`;
const FormItemCol1 = styled.li``;
const FormItemSubmitWrap = styled.li`
  text-align: center;
`;

const CheckBoxWrap = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;
