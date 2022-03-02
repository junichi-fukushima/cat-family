import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../../../utility/colors";

type Props = {
  children: ReactNode;
};

export const H2Text: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <H2>{children}</H2>
    </>
  );
});

const H2 = styled.h2`
  font-size: 28px;
  background: linear-gradient(transparent 70%, ${color.yellow} 0%);
  display: inline-block;
  font-weight: 600;
`;
