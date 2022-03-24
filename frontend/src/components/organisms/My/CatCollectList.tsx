// import React && Redux
import { memo, VFC } from "react";

// import styled-components
import styled from "styled-components";
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:0 15px;
  width: 85%;
  margin: 30px auto 0;
`;
