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

  // PC用のnav表示切り替え
  const [pcNavState, setpcNavState] = useState<boolean>(false);
  const onClickPcNav = useCallback(() => {
    setpcNavState(!pcNavState);
  }, [pcNavState]);

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
        <AvatarSP>
          <Avatar onClick={onClickNav} />
        </AvatarSP>
        {isSp === false && spNavState === true ? (
          <Nav>
            <NavList>
              {user?.isSignIn ? (
                <>
                  <NavItem>
                    <Link href="/my/profile/">
                      <a>プロフィール</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/my/follow">
                      <a>フォローリスト</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/my/bookmark">
                      <a>ブックマーク</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/my/collect">
                      <a>募集一覧</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/my/apply">
                      <a>応募履歴</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/my/message">
                      <a>メッセージ</a>
                    </Link>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <Link href="/signin">
                      <a>ログイン</a>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signup">
                      <a>新規登録</a>
                    </Link>
                  </NavItem>
                </>
              )}
            </NavList>
          </Nav>
        ) : (
          <>
            {user?.isSignIn ? (
              <HeaderSignIn>
                <Link href="/cat/post/">
                  <a>
                    <PrimaryButton>
                      里親募集をする
                    </PrimaryButton>
                  </a>
                </Link>
                <Avatar onClick={onClickPcNav} />
                {pcNavState === true ? (
                  <Nav>
                    <NavList>
                      {user?.isSignIn ? (
                        <>
                          <NavItem>
                            <Link href="/my/profile/">
                              <a>プロフィール</a>
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link href="/my/follow">
                              <a>フォローリスト</a>
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link href="/my/bookmark">
                              <a>ブックマーク</a>
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link href="/my/collect">
                              <a>募集一覧</a>
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link href="/my/apply">
                              <a>応募履歴</a>
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link href="/my/message">
                              <a>メッセージ</a>
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link href="/my/message">
                              <a onClick={onClickLogOutButton}>ログアウト</a>
                            </Link>
                          </NavItem>
                        </>
                      ) : null}
                    </NavList>
                  </Nav>
                ) : null}
              </HeaderSignIn>
            ) : (
              <HeaderSignOut>
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
              </HeaderSignOut>
            )}
          </>
        )}
      </Header>
    </>
  );
});

const AvatarSP = styled.div`
  @media ${device.pc} {
    display: none;
  }
  margin-left: auto;
`;
const Nav = styled.div`
  position: absolute;
  background-color: ${color.lightGrey};
  padding: 10px 20px;
  top: 65px;
  right: 20px;
  width: 220px;
  text-align: center;
  z-index: 2;
  border: 1px solid ${color.black};
`;
const NavList = styled.ul``;
const NavItem = styled.li`
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
const HeaderCommon = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-left: auto;
  align-items: center;
  @media ${device.sp} {
    display: none;
  }
`;
const HeaderSignIn = styled(HeaderCommon)`
  grid-template-columns: 140px 33px;
`;
const HeaderSignOut = styled(HeaderCommon)`
  grid-template-columns: repeat(2, 100px);
`;
