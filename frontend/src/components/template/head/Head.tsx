// import React
import { memo, VFC } from "react";

export const HeadTemplate: VFC = memo(() => {
  return (
    <>
      <title>Cat Family 猫好きのための里親コミュニティ</title>
      <meta
        name="description"
        content="Cat Family 猫好きのための里親コミュニティ"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
});
