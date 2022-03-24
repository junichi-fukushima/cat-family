import Image from "next/image";
import { memo, VFC } from "react";
import styled from "styled-components";

export const MyCatItem: VFC = memo(() => {
  return (
    <>
      <CatItem>
        <Image
          src="/dummy_cat.png"
          height={150} // 高さ指定
          width={230} // 幅指定
          alt="dummy-cat"
        ></Image>
        <CatItemText>
          <Text>チャチャ</Text>
          <H3>元気なわんぱくなキジ白！人懐き抜群！</H3>
          <Text>
            ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
          </Text>
        </CatItemText>
      </CatItem>
    </>
  );
});

// styled-components
const Text = styled.p`
  font-size: 12px;
  line-height: 20px;
`;
const H3 = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0;
`;
const CatItem = styled.li`
  display: grid;
  grid-template-columns: 230px 1fr;
  gap: 0 10px;
  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;
const CatItemText = styled.div``;
