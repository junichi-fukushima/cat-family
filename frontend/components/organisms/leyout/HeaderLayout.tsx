import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { memo, VFC } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { device } from "../../utility/responsibe";

export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header>
        <HeaderFixed>
          <HeaderLogo>
            <LinkInner>ロゴ</LinkInner>
          </HeaderLogo>
          <HeaderNav>
            <HeaderList>
              <HeaderItem>
                <Link href="#">
                  <LinkInner>里親募集</LinkInner>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#">
                  <LinkInner>猫ブログ</LinkInner>
                </Link>
              </HeaderItem>
            </HeaderList>
            <HeaderText>猫好きのための里親募集コミュニティ</HeaderText>
          </HeaderNav>
        </HeaderFixed>
        <SpUserAvatarWrap>
          <Image
            src="/top/non-user-avatar.png"
            height={30} // 高さ指定
            width={30} // 幅指定
            alt="user-avatar"
          />
        </SpUserAvatarWrap>
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
  padding: 20px 30px;
  display: flex;
  align-items: center;
`;

const HeaderFixed = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.div`
  /* 仮置きしとく */
  font-size: 24px;
  margin-right: 40px;
  cursor: pointer;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

const HeaderList = styled.ul`
  display: flex;
`;

const HeaderItem = styled.nav`
  font-size: 14px;
  margin-right: 30px;
  line-height: 40px;
  /* hover時に文字が動くので */
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #3eb370;
  }
`;

const HeaderText = styled.nav`
  font-size: 12px;
  @media ${device.sp} {
    display: none;
  }
`;

const HeaderButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-gap: 20px;
  margin-left: auto;
  @media ${device.sp} {
    display: none;
  }
`;

const LinkInner = styled.div``;
const SpUserAvatarWrap = styled.div`
  @media ${device.pc} {
    display: none;
  }
  margin-left: auto;
  cursor: pointer;
`;

const SpUserAvatar = styled.div``;
