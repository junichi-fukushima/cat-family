// import components && styled-components
import styled from "styled-components";
import { HeaderLayout } from "./HeaderLayout";

import { memo, ReactNode, VFC } from "react";
import { device } from "../../utility/responsive";
import { Container } from "./Container";
import { color } from "../../utility/colors";
import { H2Text } from "../atoms/text/H2Text";

type Props = {
  children: ReactNode;
  title?: string;
};

export const CatPageTemplate: VFC<Props> = memo((props) => {
  const { children, title } = props;
  return (
    <>
      <HeaderLayout />
      <Container>
        <Main>
          <CatPostPageSec>
            <H2Text>{title}</H2Text>
            <CatPostContent>
              <Inner>{children}</Inner>
            </CatPostContent>
          </CatPostPageSec>
        </Main>
      </Container>
    </>
  );
});

const Main = styled.main`
  @media ${device.pc} {
    padding: 0px 30px 30px;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    grid-column-gap: 2%;
  }
  @media ${device.sp} {
    padding: 10px 20px 30px;
  }
  &::before,
  &::after {
    @media ${device.pc} {
      content: "";
      display: block;
      background-color: #f4f8fa;
    }
  }
`;

// section
const CatPostPageSec = styled.section``;

const CatPostContent = styled.div`
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
