// import React && Redux
import { memo, ReactNode, VFC } from "react";

// import styled-components
import styled from "styled-components";
import { HeaderLayout } from "../layout/HeaderLayout";
import { Container } from "../layout/Container";
import { device } from "../../../utility/responsive";
import { color } from "../../../utility/colors";

type Props = {
  children: ReactNode;
};

export const AuthTemplate: VFC<Props> = memo((props) =>{
  const { children } = props;
  return (
    <>
      <HeaderLayout />
      <Container>
        <AuthWrap>
          <AuthInner>
            {children}
          </AuthInner>
        </AuthWrap>
      </Container>
    </>
  );
});

const AuthWrap = styled.div`
  background-color: ${color.white};
  text-align: center;
  @media ${device.pc} {
    display: grid;
    grid-template-columns: 1fr 600px 1fr;
  }
  @media ${device.sp} {
    margin: 0 15px;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    background-color: ${color.lightGrey};
  }
`;
const AuthInner = styled.div`
  padding: 30px;
`;
