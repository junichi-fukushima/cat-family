// import components && styled-components
import styled from "styled-components";
import { HeaderLayout } from "../layout/HeaderLayout";

import { SideBar } from "../../molecules/SideBar";
import { memo, ReactNode, VFC } from "react";
import { device } from "../../../utility/responsive";
import { Container } from "../layout/Container";
import { color } from "../../../utility/colors";
import { H2Text } from "../../atoms/text/H2Text";

type Props = {
  children: ReactNode;
  title?: string;
};

export const MyPageTemplate: VFC<Props> = memo((props) => {
  const { children, title } = props;
  return (
    <>
      <HeaderLayout />
      <Container>
        <Main>
          <SideBar />
          <MyPageSec>
            <H2Text>{title}</H2Text>
            <MyPageContent>
              <Inner>{children}</Inner>
            </MyPageContent>
          </MyPageSec>
        </Main>
      </Container>
    </>
  );
});

const Main = styled.main`
  @media ${device.pc} {
    padding: 0px 30px 30px;
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

const MyPageContent = styled.div`
  margin-top: 67px;
`;
const Inner = styled.div`
  background-color: ${color.white};
  padding: 30px;
`;
