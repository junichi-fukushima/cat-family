import styled from "styled-components";
import { memo, VFC } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { device } from "../../../utility/responsive";
import { HeaderNavigation } from "../../molecules/HeaderNavigation";
import { Avatar } from "../../atoms/Icon/Avatar";

export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header>
        <HeaderNavigation />
        <Avatar />
        <HeaderButtonWrap>
          <PrimaryButton>ログイン</PrimaryButton>
          <PrimaryButton>新規登録</PrimaryButton>
        </HeaderButtonWrap>
      </Header>
    </>
  );
});

const Header = styled.header`
  padding: 20px 30px;
  display: flex;
  align-items: center;
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