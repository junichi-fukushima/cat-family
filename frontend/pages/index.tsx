import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { CheckBoxCatSearch } from "../components/atoms/input/CheckBoxCatSearch";
import { SelectCatSearch } from "../components/atoms/input/SelectCatSearch";
import { H2Text } from "../components/atoms/text/H2Text";
import { HeaderLayout } from "../components/organisms/layout/HeaderLayout";
import { color } from "../components/utility/colors";
import { device } from "../components/utility/responsive";

// import from Material UI
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

// import data
import {
  ages,
  catList,
  checkLists,
  prefectures,
  sexs,
  types,
} from "../api/cat-data";

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 10,
  },
  fullList: {
    width: "auto",
  },
  button: {
    borderRadius: "10px",
    padding: "10px",
    color: "#E9463F",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid #E9463F",
    width: "100%",
    "&:hover": {
      backgroundColor: "#E9463F",
      color: "#fff",
    },
  },
});

const Home: NextPage = () => {
  const [checkState, setCheckState] = useState(checkLists);

  // Note : 実際のデータはidで比較した方が良い
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckState(
      checkState.map((x) =>
        x.value == event.target.value
          ? { value: x.value, checked: event.target.checked }
          : x
      )
    );
  };

  // SP用検索窓
  const classes = useStyles();
  const [spSearchState, setSpSearchState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setSpSearchState({ ...spSearchState, [anchor]: open });
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        <SelectWrap>
          <SelectCatSearch options={prefectures} />
          <SelectCatSearch options={ages} />
          <SelectCatSearch options={types} />
          <SelectCatSearch options={sexs} />
        </SelectWrap>
        <CheckBoxWrap>
          {checkState.map((item, index) => {
            index = index + 1;
            return (
              <CheckBoxCatSearch
                key={index}
                index={`id_${index}`}
                item={item.value}
                onChange={handleChecked}
              >
                {item.value}
              </CheckBoxCatSearch>
            );
          })}
        </CheckBoxWrap>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <Head>
        <title>Cat Family 猫好きのための里親コミュニティ</title>
        <meta
          name="description"
          content="Cat Family 猫好きのための里親コミュニティ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HeaderLayout />
        <HeadingWrap>
          <H2Text>猫の里親募集</H2Text>
        </HeadingWrap>
        <Main>
          <Aside>
            <CatSearchHeading>
              <CatSearchHeadingItem>絞り込む</CatSearchHeadingItem>
              <CatSearchHeadingItem>クリア</CatSearchHeadingItem>
            </CatSearchHeading>
            <Form>
              <SelectWrap>
                <SelectCatSearch options={prefectures} />
                <SelectCatSearch options={ages} />
                <SelectCatSearch options={types} />
                <SelectCatSearch options={sexs} />
              </SelectWrap>
              <CheckBoxWrap>
                {checkState.map((item, index) => {
                  index = index + 1;
                  return (
                    <CheckBoxCatSearch
                      key={index}
                      index={`id_${index}`}
                      item={item.value}
                      checked={item.checked}
                      onChange={handleChecked}
                    >
                      {item.value}
                    </CheckBoxCatSearch>
                  );
                })}
              </CheckBoxWrap>
            </Form>
          </Aside>
          <Section>
            <CatListHeading>
              <CatListHeadingNote>並び替え</CatListHeadingNote>
              <CatListHeadingItem>若い順</CatListHeadingItem>
              <CatListHeadingItem>新着順</CatListHeadingItem>
              <CatListHeadingItem>募集中のみ</CatListHeadingItem>
            </CatListHeading>
            {/* OnlySP */}
            <SpButtonWrap>
              <Button
                className={classes.button}
                onClick={toggleDrawer("right", true)}
              >
                絞り込む
              </Button>
              <Drawer
                anchor="right"
                open={spSearchState["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list()}
              </Drawer>
            </SpButtonWrap>
            {/* OnlySP */}
            <CatList>
              {catList.map((item, index) => {
                index = index + 1;
                return (
                  <CatItem key={index}>
                    <CatItemImageWrap>
                      <Image
                        src="/top/cat-sample.jpg"
                        height={350} // 高さ指定
                        width={350} // 幅指定
                        alt="cat-sample"
                      />
                    </CatItemImageWrap>
                    <CatItemTextWrap>
                      <CatItemH3>{item.title}</CatItemH3>
                      <CatItemText>{item.sex}</CatItemText>
                      <CatItemText>{item.address}</CatItemText>
                      <CatItemStatus>{item.status}</CatItemStatus>
                    </CatItemTextWrap>
                  </CatItem>
                );
              })}
            </CatList>
          </Section>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  color: ${color.black};
  max-width: 1200px;
  margin: 0 auto;
`;

const HeadingWrap = styled.div`
  padding: 0px 30px;
`;

const Main = styled.main`
  @media ${device.pc} {
    padding: 40px 30px;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-column-gap: 2%;
  }
  @media ${device.sp} {
    padding: 30px 20px;
  }
`;

// aside
const Aside = styled.aside`
  @media ${device.sp} {
    display: none;
  }
`;
const Form = styled.form``;
const SelectWrap = styled.div`
  display: grid;
  gap: 20px 0px;
`;
const CheckBoxWrap = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
`;

const CatSearchHeading = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const CatSearchHeadingItem = styled.li``;

// section
const Section = styled.section``;
const CatListHeading = styled.ul`
  margin-bottom: 20px;
  display: grid;
  justify-content: right;
  @media ${device.pc} {
    grid-template-columns: 100px 100px 100px 100px;
  }
  @media ${device.sp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
  }
`;
const SpButtonWrap = styled.div`
  @media ${device.pc} {
    display: none;
  }
  @media ${device.sp} {
    margin: 10px auto 20px;
  }
`;

const CatListHeadingItem = styled.li`
  @media ${device.pc} {
    font-size: 18px;
  }
  @media ${device.sp} {
    font-size: 16px;
  }
`;
const CatListHeadingNote = styled.li`
  @media ${device.pc} {
    font-size: 14px;
  }
  @media ${device.sp} {
    font-size: 12px;
  }
`;

const CatList = styled.ul`
  @media ${device.pc} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 50px 70px;
  }
`;

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

export default Home;
