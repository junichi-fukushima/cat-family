import Link from "next/link";
import { memo, VFC } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";


export const Header: VFC = memo(() => {
  return (
    <>
      <header>
        <div>
          <h1>
            <a>ロゴ</a>
          </h1>
          <nav>
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
          </nav>
        </div>
        <div>
          <PrimaryButton>ログイン</PrimaryButton>
          <PrimaryButton>新規登録</PrimaryButton>
        </div>
      </header>
    </>
  );
});
