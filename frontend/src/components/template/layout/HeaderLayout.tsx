// import React && Redux
import { memo, useCallback, useState, VFC } from "react";

// import Next
import Link from "next/link";

// import components
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { HeaderNavigation } from "../../molecules/HeaderNavigation";
import { Avatar } from "../../atoms/Icon/Avatar";

// import hooks
import { useWindowResize } from "../../../hooks/useWindowResize";

// import styled-components
import { device } from "../../../utility/responsive";
import styled from "styled-components";
import { color } from "../../../utility/colors";
import { useSelector } from "react-redux";
import { getUser } from "../../../state/ducks/user/selectors";
import { State } from "../../../state/store/type";
import { useRouter } from "next/router";
import { signOut } from "../../../hooks/api/auth";


export const HeaderLayout: VFC = memo(() => {
  // SP用のnav表示切り替え
  const [spNavState, setspNavState] = useState<boolean>(false);
  const onClickNav = useCallback(() => {
    setspNavState(!spNavState);
  }, [spNavState]);
  // レスポンシブ表示切り替え
  const [isSp] = useWindowResize();
  // selectorの呼び出し
  const selector = useSelector((state: State) => state);
  const user = getUser(selector);

  // ログアウトボタン処理
  const router = useRouter();
  const onClickLogOutButton = useCallback(async () => {
    try {
      await signOut();
      router.push("/");
    } catch (err) {
      null;
    }
  }, []);
  return (
    <>
      <Header>
        <HeaderNavigation />
        <Avatar onClick={onClickNav} />
        {isSp === false && spNavState === true ? (
          <SpNav>
            <SpNavList>
              <SpNavItem>
                <Link href="/signin">
                  <a>ログイン</a>
                </Link>
              </SpNavItem>
              <SpNavItem>
                <Link href="/signup">
                  <a>新規登録</a>
                </Link>
              </SpNavItem>
              {user?.isSignIn ? (
                <SpNavItem>
                  <Link href="/my/profile/">
                    <a>マイページ</a>
                  </Link>
                </SpNavItem>
              ) : null}
            </SpNavList>
          </SpNav>
        ) : (
          <HeaderButtonWrap>
            {user?.isSignIn ? (
              <>
                <Link href="/">
                  <a>
                    <PrimaryButton onClick={onClickLogOutButton}>
                      ログアウト
                    </PrimaryButton>
                  </a>
                </Link>
                <Link href="/my/profile">
                  <a>
                    <PrimaryButton>マイページ</PrimaryButton>
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <a>
                    <PrimaryButton>ログイン</PrimaryButton>
                  </a>
                </Link>
                <Link href="/signup">
                  <a>
                    <PrimaryButton>新規登録</PrimaryButton>
                  </a>
                </Link>
              </>
            )}
          </HeaderButtonWrap>
        )}
      </Header>
    </>
  );
});

const SpNav = styled.div`
  position: absolute;
  background-color: ${color.lightGrey};
  padding: 10px 20px;
  top: 65px;
  right: 20px;
  width: 220px;
  text-align: center;
  z-index: 2;
`;
const SpNavList = styled.ul``;
const SpNavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Header = styled.header`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  background-color: ${color.white};
  position: relative;
`;
const HeaderButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-gap: 20px;
  margin-left: auto;
  @media ${device.sp} {
    display: none;
  }
`;
