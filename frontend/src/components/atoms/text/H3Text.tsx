import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../../../utility/colors";
import { device } from "../../../utility/responsive";

type Props = {
  children: ReactNode;
};

export const H3Text: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <H3>{children}</H3>
    </>
  );
});

const H3 = styled.h3`
  background: linear-gradient(transparent 70%, ${color.yellow} 0%);
  display: inline-block;
  font-weight: 600;
  @media ${device.pc} {
    font-size: 18px;
  }
  @media ${device.sp} {
    font-size: 16px;
  }
`;
