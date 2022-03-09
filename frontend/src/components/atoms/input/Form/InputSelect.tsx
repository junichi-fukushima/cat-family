import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";
import { color } from "../../../../utility/colors";

type Props = {
  children?: ReactNode;
  notice?: string;
  options: { id: number; name: string }[];
};

export const InputSelect: VFC<Props> = memo((props) => {
  const { children, notice, options } = props;
  return (
    <>
      <FormItem>
        <FormLabel>{children}</FormLabel>
        <Select>
          {options &&
            options.map((option, index) => (
              <Option id={`${index + 1}`} key={index} value={option.name}>
                {option.name}
              </Option>
            ))}
        </Select>
        <Notice>{notice}</Notice>
      </FormItem>
    </>
  );
});

const FormItem = styled.div`
  text-align: left;
`;
const FormLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  &::after {
    content: "必須";
    font-size: 12px;
    color: ${color.white};
    background-color: ${color.green};
    padding: 3px 5px;
    border-radius: 4px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;
const Notice = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 10px 14px 16px;
  background-color: ${color.lightGrey};
  color: ${color.black};
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  &::placeholder {
    font-size: 16px;
    color: ${color.grey};
  }
`;
const Option = styled.option``;
