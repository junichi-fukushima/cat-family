// 投稿された猫情報を追加する
// 下記記事の通り、ユーザー固有のデータではないため、SSG(静的サイトジェネレータ)を使用する
// https://nextjs-ja-translation-docs.vercel.app/docs/basic-features/data-fetching#getstaticprops-static-generation

import { GetStaticProps } from 'next';

// ここでSSGしたデータを受け取る的なことをする　⇨　トップページに流し込む

// SSG
export const getStaticProps: GetStaticProps = async context => {
  // ...
};

// 解決策
