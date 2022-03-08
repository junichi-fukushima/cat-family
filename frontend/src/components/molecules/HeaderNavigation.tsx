import styled from "styled-components";
import Link from "next/link";
import { memo, VFC } from "react";
import { device } from "../../utility/responsive";

export const HeaderNavigation: VFC = memo(() => {
  return (
    <>
      <HeaderFixed>
        <HeaderLogo>
          <Link href="/">
            <a>
              <LinkInner>ロゴ</LinkInner>
            </a>
          </Link>
        </HeaderLogo>
        <HeaderNav>
          <HeaderList>
            <HeaderItem>
              <Link href="/">
                <a>
                  <LinkInner>里親募集</LinkInner>
                </a>
              </Link>
            </HeaderItem>
          </HeaderList>
          <HeaderText>猫好きのための里親募集コミュニティ</HeaderText>
        </HeaderNav>
      </HeaderFixed>
    </>
  );
});

const HeaderFixed = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.div`
  /* 仮置きしとく */
  font-size: 24px;
  cursor: pointer;
  @media ${device.pc} {
    margin-right: 40px;

  }
  @media ${device.sp} {
    margin-right: 20px;

  }
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
const LinkInner = styled.div``;
