// import React && Redux && react-hook-form
import { SubmitHandler, useForm } from "react-hook-form";

// import Next
import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";

// import components && styled-components
import styled from "styled-components";
import { HeaderLayout } from "../../src/components/template/layout/HeaderLayout";
import { Container } from "../../src/components/template/layout/Container";
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { device } from "../../src/utility/responsive";
import { color } from "../../src/utility/colors";
import { InputText } from "../../src/components/atoms/input/Form/InputText";
import { prefecture } from "../../src/data/prefecture";
import { InputSelect } from "../../src/components/atoms/input/Form/InputSelect";
import { InputTextField } from "../../src/components/atoms/input/Form/inputTextField";
import { SubmitButton } from "../../src/components/atoms/input/Form/SubmitButton";

// プロフィール更新の際に使用
export interface FormValues {
  user_name: string;
  nickname: string;
  phone: number;
  email: string;
  post_code: number;
  prefecture_id: string;
  city: string;
  building: string;
  cat_type_id: string;
  password: string;
  password_confirmation: string;
}

const MyPage: NextPage = () => {
  // react-hook-form
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
        <Main>
          <Aside>
            <MyNavList>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_home.png"
                    height={20} // 高さ指定
                    width={24} // 幅指定
                    alt="home"
                  />
                </ImgWrap>
                <Text>ホーム</Text>
              </MyNavItem>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_follow.png"
                    height={20} // 高さ指定
                    width={24} // 幅指定
                    alt="follow"
                  />
                </ImgWrap>
                <Text>フォローリスト</Text>
              </MyNavItem>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_profile.png"
                    height={24} // 高さ指定
                    width={24} // 幅指定
                    alt="profile"
                  />
                </ImgWrap>
                <Text>フォローリスト</Text>
              </MyNavItem>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_bookmark.png"
                    height={24} // 高さ指定
                    width={24} // 幅指定
                    alt="bookmark"
                  />
                </ImgWrap>
                <Text>ブックマーク</Text>
              </MyNavItem>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_boshu.png"
                    height={24} // 高さ指定
                    width={24} // 幅指定
                    alt="boshu"
                  />
                </ImgWrap>
                <Text>募集一覧</Text>
              </MyNavItem>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_obo.png"
                    height={24} // 高さ指定
                    width={24} // 幅指定
                    alt="boshu"
                  />
                </ImgWrap>
                <Text>応募履歴</Text>
              </MyNavItem>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_message.png"
                    height={20} // 高さ指定
                    width={24} // 幅指定
                    alt="boshu"
                  />
                </ImgWrap>
                <Text>ダイレクトメッセージ</Text>
              </MyNavItem>
            </MyNavList>
          </Aside>
          <MyPageSec>
            <H2Text>プロフィール</H2Text>
            <MyPageContent>
              <Inner>
                {/* ここをコンポーネント化したい */}
                <Form>
                  <FormList>
                    <FormItemCol2>
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
                      >
                        ニックネーム
                      </InputText>
                    </FormItemCol2>
                    <FormItemCol2>
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
                            message:
                              "正しい形式でメールアドレスを入力してください。",
                          },
                        })}
                        errors={errors}
                      >
                        メールアドレス
                      </InputText>
                      <InputText
                        type="tel"
                        placeholder="(例) 08021494335"
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
                      >
                        電話番号
                      </InputText>
                    </FormItemCol2>
                    <FormItemCol2>
                      <InputText
                        type="text"
                        placeholder="(例) 1112222"
                        register={register("post_code", {
                          required: {
                            value: true,
                            message: "郵便番号を入力してください",
                          },
                          pattern: {
                            value: /^\d{7}$/,
                            message: "正しい形式で郵便番号を入力してください。",
                          },
                        })}
                        errors={errors}
                      >
                        郵便番号
                      </InputText>
                      <InputSelect
                        options={prefecture}
                        register={register("prefecture_id", {
                          validate: {
                            value: (value) =>
                              value !== "選択してください" ||
                              "都道府県を選択してください",
                          },
                        })}
                        errors={errors}
                      >
                        都道府県
                      </InputSelect>
                    </FormItemCol2>
                    <FormItemCol2>
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
                    </FormItemCol2>
                    <FormItemCol1>
                      {/* プロフィール画像の設置 */}
                      {/* ./プロフィール画像の設置 */}
                    </FormItemCol1>
                    <FormItemCol1>
                      <InputTextField
                        type="text"
                        notice="※200字以内で記入してください"
                        placeholder="(例) ３−３−３猫ハウス２０１号室"
                        register={register("building", { required: false })}
                        errors={errors}
                        required={false}
                      >
                        自己紹介
                      </InputTextField>
                    </FormItemCol1>
                    <FormItemSubmitWrap>
                      <SubmitButton type="submit" value="更新する" />
                    </FormItemSubmitWrap>
                  </FormList>
                </Form>
                {/* ./ここをコンポーネント化したい */}
              </Inner>
            </MyPageContent>
          </MyPageSec>
        </Main>
      </Container>
    </>
  );
};
export default MyPage;

const PageHeader = styled.div`
  margin-left: 250px;
`;

const Main = styled.main`
  @media ${device.pc} {
    padding: 0px 30px;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-column-gap: 2%;
  }
  @media ${device.sp} {
    padding: 30px 20px;
  }
`;

// aside
const Aside = styled.aside`
  padding-top: 100px;
`;
const MyNavList = styled.ul`
  display: grid;
  gap: 20px 0;
`;
const MyNavItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 40px 1fr;
  cursor: pointer;
`;
const ImgWrap = styled.div``;
const Text = styled.p``;

// section
const MyPageSec = styled.section``;
const MyPageContent = styled.div`
  margin-top: 67px;
`;
const Inner = styled.div`
  background-color: ${color.white};
  padding: 33px 57px;
`;

// プロフィール編集
const Form = styled.form``;
const FormList = styled.ul`
  display: grid;
  gap: 40px 0;
`;
const FormItemCol2 = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
`;
const FormItemCol1 = styled.li``;
const FormItemSubmitWrap = styled.li`
text-align: center;
`;