// import React && Redux
import Image from "next/image";
import Link from "next/link";
import { memo, VFC } from "react";

// import styled-components
import styled from "styled-components";

export const SideBar: VFC = memo(() => {
  return (
    <>
      <Aside>
        <MyNavList>
        <Link href="/my/profile">
            <a>
              <MyNavItem>
                <ImgWrap>
                  <Image
                    src="/my/icon_profile.png"
                    height={24} // 高さ指定
                    width={24} // 幅指定
                    alt="profile"
                  />
                </ImgWrap>
                <Text>プロフィール</Text>
              </MyNavItem>
            </a>
          </Link>
          <Link href="/my/follow">
            <a>
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
            </a>
          </Link>

          <Link href="/my/bookmark">
            <a>
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
            </a>
          </Link>
          <Link href="/my/collect">
            <a>
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
            </a>
          </Link>
          <Link href="/my/apply">
            <a>
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
            </a>
          </Link>
          <Link href="/my/message">
            <a>
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
            </a>
          </Link>
        </MyNavList>
      </Aside>
    </>
  );
});

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
