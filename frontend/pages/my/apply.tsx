// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import styled from "styled-components";
import { H2Text } from "../../src/components/atoms/text/H2Text";
import { color } from "../../src/utility/colors";
import { MyPageTemplate } from "../../src/components/template/pages/My";

const MyPageApply: NextPage = () => {
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
      <MyPageTemplate>
      <MyPageSec>
            <H2Text>応募一覧</H2Text>
            <MyPageContent>
              <Inner>
                <p>a</p>
              </Inner>
            </MyPageContent>
          </MyPageSec>
      </MyPageTemplate>
    </>
  );
};
export default MyPageApply;


// section
const MyPageSec = styled.section``;
const MyPageContent = styled.div`
  margin-top: 67px;
`;
const Inner = styled.div`
  background-color: ${color.white};
  padding: 33px 57px;
`;
