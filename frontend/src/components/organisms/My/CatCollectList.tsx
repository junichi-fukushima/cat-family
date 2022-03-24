// import React && Redux
import { memo, VFC } from "react";

// import styled-components
import styled from "styled-components";
import { device } from "../../../utility/responsive";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { MyCatItem } from "../../molecules/My/MyCatItem";

// import components

export const CatCollectList: VFC = memo(() => {
  return (
    <>
      <CatList>
        <MyCatItem />
        <ButtonWrap>
          <PrimaryButton>募集を停止する</PrimaryButton>
          <PrimaryButton>投稿を編集する</PrimaryButton>
          <PrimaryButton>投稿を削除する</PrimaryButton>
        </ButtonWrap>
        <MyCatItem />
        <ButtonWrap>
          <PrimaryButton>募集を停止する</PrimaryButton>
          <PrimaryButton>投稿を編集する</PrimaryButton>
          <PrimaryButton>投稿を削除する</PrimaryButton>
        </ButtonWrap>
        <MyCatItem />
        <ButtonWrap>
          <PrimaryButton>募集を停止する</PrimaryButton>
          <PrimaryButton>投稿を編集する</PrimaryButton>
          <PrimaryButton>投稿を削除する</PrimaryButton>
        </ButtonWrap>
      </CatList>
    </>
  );
});

// styled-components
const CatList = styled.ul``;
const ButtonWrap = styled.div`
  margin: 30px auto 0;
  display: grid;

  @media ${device.pc} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 15px;
    width: 100%;
    max-width:600px;

  }
  @media ${device.sp} {
    gap: 15px 0;
    max-width:300px;
  }
`;
