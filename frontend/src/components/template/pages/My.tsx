// import components && styled-components
import styled from "styled-components";
import { HeaderLayout } from "../layout/HeaderLayout";

import { SideBar } from "../../molecules/my/SideBar";
import { memo, ReactNode, VFC } from "react";
import { device } from "../../../utility/responsive";
import { Container } from "../layout/Container";

type Props = {
  children: ReactNode;
};

export const MyPageTemplate: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <HeaderLayout />
      <Container>
        <Main>
          <SideBar />
          <MyPageSec>{children}</MyPageSec>
        </Main>
      </Container>
    </>
  );
});

const Main = styled.main`
  @media ${device.pc} {
    padding: 0px 30px;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-column-gap: 2%;
  }
  @media ${device.sp} {
    padding: 30px 20px;
  }
`;

// section
const MyPageSec = styled.section``;
