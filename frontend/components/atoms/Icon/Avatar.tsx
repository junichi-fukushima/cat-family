import { memo, VFC, ReactNode } from "react";
import styled from "styled-components";
import Image from "next/image";
import { device } from "../../utility/responsive";

export const Avatar: VFC = memo(() => {
  return (
    <>
      <SpUserAvatarWrap>
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
