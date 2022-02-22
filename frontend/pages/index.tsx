import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { H2Text } from "../components/atoms/text/H2Text";
import { HeaderLayout } from "../components/template/layout/HeaderLayout";
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
  checkLists,
  catList,
} from "../api/cat-data";
import { CatItems } from "../components/organisms/index/CatItems";
import { CatSearchArea } from "../components/template/index/CatSearchArea";
import { getCatLabel } from "../state/ducks/labels/operation";
import { useDispatch, useSelector } from "react-redux";

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

  // ラベルマスタAPIの取得
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatLabel());

  }, [])
  const selector = useSelector(state => state);
  // const catLabel = getCatLabel(selector);

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        <CatSearchArea checkState={checkState} handleChecked={handleChecked} />
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
      {/* {console.log(catLabel)} */}
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
            <CatSearchArea
              checkState={checkState}
              handleChecked={handleChecked}
            />
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
                  <CatItems
                    key={index}
                    title={item.title}
                    sex={item.sex}
                    address={item.address}
                    status={item.status}
                  />
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

const CatList = styled.ul`
  @media ${device.pc} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 50px 70px;
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

export default Home;
