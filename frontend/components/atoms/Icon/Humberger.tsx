import { memo, VFC, ReactNode } from "react";

export const Humberger: VFC = memo((props) => {
  const { children } = props;
  return (
    <>
      <div>{children}</div>
    </>
  );
});