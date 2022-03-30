import { memo, VFC } from "react";
import styled from "styled-components";
import { CircularIndeterminate } from "../../../hooks/spiner";

export const LoadingIcon: VFC = memo(() => {
  return (
    <Wrap>
      <CircularIndeterminate />
    </Wrap>
  );
});

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
