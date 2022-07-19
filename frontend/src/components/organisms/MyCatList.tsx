// import React && Redux
import { memo, VFC } from "react";

// import styled-components
import styled from "styled-components";
import { MyCatItem } from "../molecules/MyCatItem";

// import components

export const MyCatList: VFC = memo(() => {
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
