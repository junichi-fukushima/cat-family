// import React && Redux
import { memo, VFC } from "react";

// import styled-components
import styled from "styled-components";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { MyCatItem } from "../../molecules/My/MyCatItem";

// import components

export const CatApplyList: VFC = memo(() => {
  return (
    <>
      <CatList>
        <MyCatItem />
        <MyCatItem />
        <MyCatItem />
      </CatList>
    </>
  );
});

// styled-components
const CatList = styled.ul``;
const ButtonWrap = styled.div`
  max-width: 300px;
  margin: 30px auto 0;
  text-align: center;
`;
