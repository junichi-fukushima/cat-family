import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../../../utility/colors";

type Props = {
  children: ReactNode;
};

export const SecondaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Button>{children}</Button>
    </>
  );
});

const Button = styled.div`
  color: ${color.red};
  border: 1px solid ${color.red};
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${color.red};
    color: ${color.white};
  }
`;
