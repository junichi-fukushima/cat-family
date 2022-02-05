import styled from "styled-components";
import Link from "next/link";
import { memo, VFC } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";


export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header>
        <HeaderFixed>
          <h1>
            <a>ロゴ</a>
          </h1>
          <HeaderNav>
            <ul>
              <li>
                <Link href="#">
                  <a>里親募集</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>猫ブログ</a>
                </Link>
              </li>
            </ul>
            <p>猫好きのための里親募集コミュニティ</p>
          </HeaderNav>
        </HeaderFixed>
        <div>
          <PrimaryButton>ログイン</PrimaryButton>
          <PrimaryButton>新規登録</PrimaryButton>
        </div>
      </Header>
    </>
  );
});

// styled-components
const Header = styled.header`
  display: flex;
`;
const HeaderFixed = styled.div`
  display: flex;
`;
const HeaderNav = styled.nav`
  display: flex;
`;