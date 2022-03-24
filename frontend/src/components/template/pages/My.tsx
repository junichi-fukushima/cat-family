// import components && styled-components
import styled from "styled-components";
import { HeaderLayout } from "../layout/HeaderLayout";

import { SideBar } from "../../molecules/SideBar";
import { memo, ReactNode, useState, VFC } from "react";
import { device } from "../../../utility/responsive";
import { Container } from "../layout/Container";
import { color } from "../../../utility/colors";
import { H2Text } from "../../atoms/text/H2Text";
import { useWindowResize } from "../../../hooks/useWindowResize";

type Props = {
  children: ReactNode;
  title?: string;
};

export const MyPageTemplate: VFC<Props> = memo((props) => {
  const { children, title } = props;
  const [isSp] = useWindowResize();
  const [spNavState, setspNavState] = useState<boolean>(false);
  return (
    <>
      <HeaderLayout />
      <Container>
        <Main>
          {isSp === true && <SideBar />}
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
    padding: 10px 20px 30px;
  }
`;

// section
const MyPageSec = styled.section``;

const MyPageContent = styled.div`
  @media ${device.pc} {
    margin-top: 67px;
  }
  @media ${device.sp} {
    margin-top: 27px;
  }
`;
const Inner = styled.div`
  background-color: ${color.white};
  @media ${device.pc} {
    padding: 30px;
  }
  @media ${device.sp} {
    padding: 10px 20px;
  }
`;
