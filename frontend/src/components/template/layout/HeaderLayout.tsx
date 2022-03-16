// import React && Redux
import { memo, useCallback, useState, VFC } from "react";

// import Next
import Link from "next/link";

// import components
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { HeaderNavigation } from "../../molecules/HeaderNavigation";
import { Avatar } from "../../atoms/Icon/Avatar";

// import hooks
import { useWindowResize } from "../../../hooks/useWindowResize";

// import styled-components
import { device } from "../../../utility/responsive";
import styled from "styled-components";
import { color } from "../../../utility/colors";

// onClick=
export const HeaderLayout: VFC = memo(() => {
  const [spNavState, setspNavState] = useState<boolean>(false);
  const onClickNav = useCallback(() => {
    setspNavState(!spNavState);
  }, [spNavState]);
  const [isSp] = useWindowResize();
  return (
    <>
      <Header>
        <HeaderNavigation />
        <Avatar onClick={onClickNav} />
        {isSp === false && spNavState === true && (
          <SpNav>
            <SpNavList>
              <SpNavItem>
                <Link href="/signin">
                  <a>ログイン</a>
                </Link>
              </SpNavItem>
              <SpNavItem>
                <Link href="/signup">
                  <a>新規登録</a>
                </Link>
              </SpNavItem>
            </SpNavList>
          </SpNav>
        )}
        <HeaderButtonWrap>
          <Link href="/signin">
            <a>
              <PrimaryButton>ログイン</PrimaryButton>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <PrimaryButton>新規登録</PrimaryButton>
            </a>
          </Link>
        </HeaderButtonWrap>
      </Header>
    </>
  );
});

const SpNav = styled.div`
  position: absolute;
  background-color: ${color.lightGrey};
  padding: 10px 20px;
  top: 65px;
  right: 20px;
  width: 220px;
  text-align: center;
`;
const SpNavList = styled.ul``;
const SpNavItem = styled.li`
  &:first-child {
    margin-bottom: 10px;
  }
`;

const Header = styled.header`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  background-color: ${color.white};
  position: relative;
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
