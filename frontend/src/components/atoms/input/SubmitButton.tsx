import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../../../utility/colors";

type Props = {
  type: string;
  value?: string;
};

export const SubmitButton: VFC<Props> = memo((props) => {
  const { type, value } = props;
  return (
    <>
      <Input type={type} value={value}></Input>
    </>
  );
});

const Input = styled.input`
  background-color: ${color.green};
  color: ${color.white};
  border-radius: 4px;
  padding: 14px 10px 14px 16px;
  text-align: center;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  &:hover {
    opacity: 0.7;
  }
`;
