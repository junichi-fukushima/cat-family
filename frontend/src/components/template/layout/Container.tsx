// import React
import { memo, ReactNode, VFC } from "react";

// import styled-components
import styled from "styled-components";
import { color } from "../../../utility/colors";
import { device } from "../../../utility/responsive";

type Props = {
  children: ReactNode;
};

export const Container: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
    <Inner>
      {children}
    </Inner>
    </>
  );
});
const Inner = styled.div`
  color: ${color.black};
  max-width: 1200px;
  position: relative;
  @media ${device.pc} {
    margin: 40px auto 0;
  }
  @media ${device.sp} {
    margin: 20px auto 0;
  }
`;