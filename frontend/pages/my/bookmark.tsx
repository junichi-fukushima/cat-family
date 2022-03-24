/***********
 * ブックマーク管理ページ
 * /my/bookmark/
 ***********/

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import styled from "styled-components";
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { color } from "../../src/utility/colors";
import { MyPageTemplate } from "../../src/components/template/pages/My";
import Image from "next/image";

const MyPageBookMark: NextPage = () => {
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
      <MyPageTemplate title="ブックマーク">
        <CatList>
          <CatItem>
            <Image
              src="/dummy_cat.png"
              height={150} // 高さ指定
              width={230} // 幅指定
              alt="dummy-cat"
            ></Image>
            <CatItemText>
              <Text>チャチャ</Text>
              <H3>元気なわんぱくなキジ白！人懐き抜群！</H3>
              <Text>
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
              </Text>
            </CatItemText>
          </CatItem>
          <CatItem>
            <Image
              src="/dummy_cat.png"
              height={150} // 高さ指定
              width={230} // 幅指定
              alt="dummy-cat"
            ></Image>
            <CatItemText>
              <Text>チャチャ</Text>
              <H3>元気なわんぱくなキジ白！人懐き抜群！</H3>
              <Text>
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
              </Text>
            </CatItemText>
          </CatItem>
          <CatItem>
            <Image
              src="/dummy_cat.png"
              height={150} // 高さ指定
              width={230} // 幅指定
              alt="dummy-cat"
            ></Image>
            <CatItemText>
              <Text>チャチャ</Text>
              <H3>元気なわんぱくなキジ白！人懐き抜群！</H3>
              <Text>
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
              </Text>
            </CatItemText>
          </CatItem>
        </CatList>
      </MyPageTemplate>
    </>
  );
};
export default MyPageBookMark;

const Text = styled.p`
  font-size: 12px;
  line-height: 20px;
`;
const H3 = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0;
`;
const CatList = styled.ul``;
const CatItem = styled.li`
  display: grid;
  grid-template-columns: 230px 1fr;
  gap: 0 10px;
  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;
const CatItemText = styled.div``;
