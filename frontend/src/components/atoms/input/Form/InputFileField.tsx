import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";
import { color } from "../../../../utility/colors";
import { device } from "../../../../utility/responsive";

type Props = {
  type: string;
  placeholder?: string;
  children?: ReactNode;
  // 一旦anyで黙らせるがstringに戻したい
  register: any;
};

export const InputFileField: VFC<Props> = memo((props) => {
  const { type, placeholder, children, register } = props;
  return (
    <>
      <FormItem>
        <FormLabel>{children}</FormLabel>
        <FileArea>
          <Notice>画像をアップロードする（縦横200px×200px以上推奨、5MB未満）</Notice>
          <Input type={type} placeholder={placeholder} {...register} />
        </FileArea>
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

const FileArea = styled.div`
  background-color: ${color.lightGrey};
  color: ${color.black};
  padding: 14px 10px 14px 16px;
`;

const Notice = styled.p`
  font-size: 14px;
  margin-top: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 0;
  border-radius: 4px;
  text-align: left;
  &::placeholder {
    font-size: 16px;
    color: ${color.grey};
  }
`;
