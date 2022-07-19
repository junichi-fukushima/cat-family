import styled from "styled-components";
import { memo, VFC } from "react";
import { device } from "../../utility/responsive";
import Image from "next/image";

type Props = {
  title: string;
  sex: string;
  status: string;
  main_img: string;
};

export const CatItems: VFC<Props> = memo((props) => {
  const { title, sex, status, main_img } = props;

  return (
    <>
      <CatItem>
        <CatItemImageWrap>
          <Image
            src={main_img}
            height={350}
            width={350}
            alt="猫メイン画像"
          />
        </CatItemImageWrap>
        <CatItemTextWrap>
          <CatItemH3>{title}</CatItemH3>
          <CatItemText>{sex}</CatItemText>
          <CatItemText>神奈川県横浜市</CatItemText>
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
