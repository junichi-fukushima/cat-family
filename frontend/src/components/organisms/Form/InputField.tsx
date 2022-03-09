import { memo, VFC } from "react";
import styled from "styled-components";
import { color } from "../../../utility/colors";

type Props = {
  type: string;
  placeholder?: string;
};

export const InputField: VFC<Props> = memo((props) => {
  const { type, placeholder } = props;
  return (
    <>
      <Input type={type} placeholder={placeholder}></Input>
    </>
  );
});

const Input = styled.input`
  width: 100%;
  padding: 14px 10px 14px 16px;
  background-color: ${color.lightGrey};
  color: ${color.black};
  border-radius: 4px;
  text-align: left;
  &::placeholder {
    font-size: 16px;
    color: ${color.grey};
  }
`;
