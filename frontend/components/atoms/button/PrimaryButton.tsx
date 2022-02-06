import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../../utility/colors";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Button>{children}</Button>
    </>
  );
});

const Button = styled.div`
  background-color: ${color.green};
  color: ${color.white};
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
