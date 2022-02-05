import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";

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

// styled-components
const Button = styled.div`
  background-color: #3eb370;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  &:hover{
    opacity:0.7;
  }
`;
