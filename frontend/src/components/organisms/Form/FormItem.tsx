import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
};

export const FormItem: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Form>{children}</Form>
    </>
  );
});

const Form = styled.form`
  padding: 15px 0;
  display: grid;
  gap: 20px 0;
`;
