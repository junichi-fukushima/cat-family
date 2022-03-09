import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../../../utility/colors";

type Props = {
  children: ReactNode;
  auth: string;
};

export const AuthButton: VFC<Props> = memo((props) => {
  const { children, auth } = props;
  return (
    <>
      {auth && auth === "email" ? <EmailButton>{children}</EmailButton> : ""}
      {auth && auth === "google" ? <GoogleButton>{children}</GoogleButton> : ""}
      {auth && auth === "normal" ? (
        <RefistarButton>{children}</RefistarButton>
      ) : (
        ""
      )}
    </>
  );
});

const Button = styled.div`
  background-color: ${color.green};
  color: ${color.white};
  border-radius: 4px;
  padding: 14px 10px 14px 16px;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const EmailButton = styled(Button)`
  background-color: ${color.red};
  color: ${color.white};
  border: 1px solid ${color.white};
  &::before {
    content: "";
    background-image: url("../../../../assets/email.png");
    width: 48px;
    height: 48px;
  }
`;
const GoogleButton = styled(Button)`
  background-color: ${color.white};
  color: ${color.black};
  border: 1px solid ${color.black};
`;
const RefistarButton = styled(Button)`
  background-color: ${color.white};
  color: ${color.red};
  border: 1px solid ${color.red};
`;
