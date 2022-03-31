import { memo, VFC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { device } from "../../../utility/responsive";

type Props = {
  onClick: () => void;
}

export const Avatar: VFC<Props> = memo((props) => {
  const { onClick } = props;
  return (
    <>
      <SpUserAvatarWrap onClick={onClick}>
        <Image
          src="/top/non-user-avatar.png"
          height={33} // 高さ指定
          width={33} // 幅指定
          alt="user-avatar"
        />
      </SpUserAvatarWrap>
    </>
  );
});

const SpUserAvatarWrap = styled.div`
  cursor: pointer;
`;
