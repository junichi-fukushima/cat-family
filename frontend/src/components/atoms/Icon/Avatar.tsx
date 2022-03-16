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
          height={30} // 高さ指定
          width={30} // 幅指定
          alt="user-avatar"
        />
      </SpUserAvatarWrap>
    </>
  );
});

const SpUserAvatarWrap = styled.div`
  @media ${device.pc} {
    display: none;
  }
  margin-left: auto;
  cursor: pointer;
`;
