// import React && Redux
import { memo, VFC } from "react";

// import Next
import Link from "next/link";

// import components
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { HeaderNavigation } from "../../molecules/HeaderNavigation";
import { Avatar } from "../../atoms/Icon/Avatar";

// import styled-components
import { device } from "../../../utility/responsive";
import styled from "styled-components";
import { color } from "../../../utility/colors";

export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header>
        <HeaderNavigation />
        <Avatar />
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

const Header = styled.header`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  background-color: ${color.white};
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
