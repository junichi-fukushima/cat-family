// import React && Redux
import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatSearchArea } from "../src/components/organisms/Index/CatSearchArea";
import {
  fetchCatAge,
  fetchCatLabel,
  fetchCatSex,
  fetchCatType,
} from "../src/state/ducks/labels/operation";
import { fetchCats, searchCats } from "../src/state/ducks/cats/operation";
import { getCats, getSexName } from "../src/state/ducks/cats/selectors";
import { State } from "../src/state/store/type";

// import Next
import Head from "next/head";
import type { NextPage } from "next";

// import components
import { H2Text } from "../src/components/atoms/text/H2Text";
import { HeaderLayout } from "../src/components/template/layout/HeaderLayout";
import { device } from "../src/utility/responsive";
import { Container } from "../src/components/template/layout/Container";

// import styled-components &&  Material UI
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Link from "next/link";

// hooks
import { useWindowResize } from "../src/hooks/useWindowResize";
import { getLoadingStatus } from "../src/state/ducks/loading/selectors";
import { LoadingIcon } from "../src/components/atoms/Icon/Loading";
import { CatItems } from "../src/components/molecules/index/CatItems";
import { getCurrentUser } from "../src/hooks/api/auth";
import { getUser } from "../src/state/ducks/user/selectors";
import { useSignIn } from "../src/state/ducks/user/operation";
import { getCatSearchCondition } from "../src/state/ducks/cat_search/selectors";

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

const Home: NextPage = memo(() => {
  // materialUI
  const classes = useStyles();
  // ウィンドウサイズを取得
  const [isSp] = useWindowResize();

  // SP用の検索窓切り替え
  const [spSearchState, setSpSearchState] = useState({
    right: false,
  });
  const toggleDrawer = useCallback(
    (anchor: string, open: boolean) => (
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
    },
    [spSearchState]
  );
  // SP用の検索窓
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        <CatSearchArea />
        <Button className={classes.button}>検索する</Button>
      </List>
      <Divider />
    </div>
  );
  // redux

  // selectorの呼び出し
  const selector = useSelector((state: State) => state);
  const cats = getCats(selector);
  // user情報のチェック
  // const user = getUser(selector);
  const searchcondition = getCatSearchCondition(selector);
  const loading = getLoadingStatus(selector);

  const dispatch = useDispatch();

  // アクセス時にユーザー情報を取得
  const handleGetCurrentUser = async () => {

    try{
      const res = await getCurrentUser();
      if(res?.data.is_login === true){
        dispatch(useSignIn(res?.data.data))
      } else {
        console.log("ログインしているユーザーはいないです")
      }
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(fetchCats());
    dispatch(fetchCatLabel());
    dispatch(fetchCatAge());
    dispatch(fetchCatSex());
    dispatch(fetchCatType());
    handleGetCurrentUser();
  }, []);
  // searchcondition(検索項目の選択)が更新されたら表示する猫情報を更新する
  useEffect(() => {
    // dispatch(searchCats(searchcondition));
  }, [searchcondition]);
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
      <HeaderLayout />
      {loading ? (
        <LoadingIcon />
      ) : (
        <Container>
          <HeadingWrap>
            <H2Text>猫の里親募集</H2Text>
          </HeadingWrap>
          <Main>
            <Aside>
              <CatSearchHeading>
                <CatSearchHeadingItem>絞り込む</CatSearchHeadingItem>
                <CatSearchHeadingItem>クリア</CatSearchHeadingItem>
              </CatSearchHeading>
              <CatSearchArea />
            </Aside>
            <Section>
              <CatListHeading>
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
                  {!isSp && list()}
                </Drawer>
              </SpButtonWrap>
              {/* OnlySP */}
              <CatList>
                {cats.map((cat, index) => {
                  index = index + 1;
                  return (
                    <Link href="/" key={index}>
                      <a>
                        <CatItems
                          title={cat.title}
                          main_img={cat.main_img}
                          sex={getSexName(selector, cat.cat_sex_id)}
                          status={cat.status ? "募集中" : "募集締め切り"}
                        />
                      </a>
                    </Link>
                  );
                })}
              </CatList>
            </Section>
          </Main>
        </Container>
      )}
    </>
  );
});
export default Home;

// styled-components
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
const CatSearchHeadingItem = styled.li`
  cursor: pointer;
`;

const Section = styled.section``;
const CatListHeading = styled.ul`
  margin-bottom: 20px;
  display: grid;
  justify-content: right;
  cursor: pointer;
  @media ${device.pc} {
    grid-template-columns: 100px 100px 100px;
  }
  @media ${device.sp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 70px;
  }
`;

const CatListHeadingItem = styled.li`
  @media ${device.pc} {
    font-size: 18px;
  }
  @media ${device.sp} {
    font-size: 16px;
    text-align: center;
  }
`;
