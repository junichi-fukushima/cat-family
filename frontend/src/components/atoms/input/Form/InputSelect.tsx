import { memo, ReactNode, VFC } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { color } from "../../../../utility/colors";
import { device } from "../../../../utility/responsive";

type Props = {
  children?: ReactNode;
  notice?: string;
  options: { id: number; name: string }[];
  // 一旦anyで黙らせる
  register: any;
  errors?: any;
  required?: boolean;
};

export const InputSelect: VFC<Props> = memo((props) => {
  const { children, notice, options, errors, required, register } = props;
  // react-hook-form
  return (
    <>
      <FormItem>
        <FormLabel>
          {children}
          {required ? <Required>必須</Required> : ""}
        </FormLabel>
        <Select {...register}>
          {options &&
            options.map((option, index) => (
              <Option id={`${index + 1}`} key={index} value={option.id}>
                {option.name}
              </Option>
            ))}
        </Select>
        <Notice>{notice}</Notice>
        <ErrorText>
          {errors[register.name]?.type === "value"
            ? errors[register.name]?.message
            : ""}
        </ErrorText>
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
`;
const Required = styled.span`
  color: ${color.white};
  background-color: ${color.green};
  padding: 2px 4px;
  border-radius: 4px;
  margin-left: 5px;
  margin-bottom: 7px;
  font-size: 12px;
  position: relative;
  top: -2px;
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

const ErrorText = styled.p`
  color: ${color.red};
  font-weight: 600;
  @media ${device.pc} {
    font-size: 14px;
  }
  @media ${device.sp} {
    font-size: 12px;
  }
`;
