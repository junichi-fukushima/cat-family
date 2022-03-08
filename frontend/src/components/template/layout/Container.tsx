// import React
import { memo, ReactNode, VFC } from "react";

// import styled-components
import styled from "styled-components";
import { color } from "../../../utility/colors";

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
  margin: 40px auto 0;
`;