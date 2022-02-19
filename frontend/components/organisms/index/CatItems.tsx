import styled from "styled-components";
import { memo, useEffect, useState, VFC } from "react";
import { device } from "../../utility/responsive";
import Image from "next/image";
import { fetchCatLabel } from "../../../state/model/cats/cat_label";

// import data
type Props = {
  title: string;
  sex: string;
  address: string;
  status: string;
};


export const CatItems: VFC<Props> = memo((props) => {
  const { title, sex, address, status } = props;

  const [catLabel, setcatLabel] = useState([]);

  useEffect(() => {
    fetchCatLabel()
    .then((data) =>
      setcatLabel(data)
    )
  }, [])

  return (
    <>
      <CatItem>
        <CatItemImageWrap>
          <Image
            src="/top/cat-sample.jpg"
            height={350} // 高さ指定
            width={350} // 幅指定
            alt="cat-sample"
          />
        </CatItemImageWrap>
        <CatItemTextWrap>
          <CatItemH3>{title}</CatItemH3>
          <CatItemText>{sex}</CatItemText>
          <CatItemText>{address}</CatItemText>
          <CatItemStatus>{status}</CatItemStatus>
        </CatItemTextWrap>
      </CatItem>
    </>
  );
});

// styled-components

const CatItem = styled.li`
  @media ${device.sp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

const CatItemImageWrap = styled.div``;
const CatItemTextWrap = styled.div`
  @media ${device.pc} {
    gap: 10px 0px;
    display: grid;
  }
`;

const CatItemH3 = styled.h3`
  font-size: 14px;
  font-weight: bold;
  @media ${device.sp} {
    padding-bottom: 10px;
  }
`;

const CatItemText = styled.p`
  font-size: 14px;
  @media ${device.sp} {
    padding-bottom: 10px;
  }
`;

const CatItemStatus = styled.p`
  font-size: 14px;
`;
