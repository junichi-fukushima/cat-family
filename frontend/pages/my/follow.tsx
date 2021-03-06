/***********
 * フォロー/フォロワー管理ページ
 * /my/follow/
 ***********/

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components && styled-components
import styled from "styled-components";
import { color } from "../../src/utility/colors";
import { MyPageTemplate } from "../../src/components/template/My";
import Image from "next/image";
import { device } from "../../src/utility/responsive";

const MyPageFollow: NextPage = () => {
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
      <MyPageTemplate title="フォローリスト">
        <Tab>
          <Text>フォロー(5人)</Text>
          <Text>フォロワー(5人)</Text>
        </Tab>
        <FollowList>
          <FollowItem>
            <Image
              src="/dummy_follow.png"
              height={100} // 高さ指定
              width={100} // 幅指定
              alt="user-avatar"
            ></Image>
            <FollowItemText>
              <Text>オラウータン</Text>
              <Text>
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト...
              </Text>
            </FollowItemText>
          </FollowItem>
          <FollowItem>
            <Image
              src="/dummy_follow.png"
              height={100} // 高さ指定
              width={100} // 幅指定
              alt="user-avatar"
            ></Image>
            <FollowItemText>
              <Text>オラウータン</Text>
              <Text>
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト...
              </Text>
            </FollowItemText>
          </FollowItem>
          <FollowItem>
            <Image
              src="/dummy_follow.png"
              height={100} // 高さ指定
              width={100} // 幅指定
              alt="user-avatar"
            ></Image>
            <FollowItemText>
              <Text>オラウータン</Text>
              <Text>
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト...
              </Text>
            </FollowItemText>
          </FollowItem>
        </FollowList>
      </MyPageTemplate>
    </>
  );
};
export default MyPageFollow;

const Tab = styled.div`
  display: flex;
  gap: 0 10px;
  color: ${color.green};
  font-weight: bold;
  margin-bottom: 15px;
`;
const Text = styled.p`
  font-size: 12px;
  line-height: 20px;
`;
const FollowList = styled.ul``;
const FollowItem = styled.li`
  @media ${device.pc} {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 0 10px;
    align-items: center;
  }
  @media ${device.sp} {
  }
  &:not(:first-of-type) {
    @media ${device.pc} {
      margin-top: 30px;
    }
    @media ${device.sp} {
      margin-top: 20px;
    }
  }
`;
const FollowItemText = styled.div`
  > p {
    &:first-child {
      font-weight: bold;
      @media ${device.pc} {
        margin-bottom: 10px;
      }
      @media ${device.sp} {
        margin: 10px 0;
      }
    }
  }
`;
