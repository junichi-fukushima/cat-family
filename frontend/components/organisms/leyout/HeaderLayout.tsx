import styled from "styled-components";
import Link from "next/link";
import { memo, VFC } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header>
        <HeaderFixed>
          <h1>
            <a>ロゴ</a>
          </h1>
          <HeaderNav>
            <HeaderList>
              <HeaderItem>
                <Link href="#">
                  <a>里親募集</a>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#">
                  <a>猫ブログ</a>
                </Link>
              </HeaderItem>
            </HeaderList>
            <p>猫好きのための里親募集コミュニティ</p>
          </HeaderNav>
        </HeaderFixed>
        <HeaderButtonWrap>
          <PrimaryButton>ログイン</PrimaryButton>
          <PrimaryButton>新規登録</PrimaryButton>
        </HeaderButtonWrap>
      </Header>
    </>
  );
});

// styled-components
const Header = styled.header`
  display: flex;
`;
const HeaderFixed = styled.div`
  display: flex;
`;
const HeaderNav = styled.nav`
  display: flex;
`;
const HeaderList = styled.ul`
  display: flex;
`;
const HeaderItem = styled.nav``;
const HeaderButtonWrap = styled.nav`
  margin-left: auto;
`;
