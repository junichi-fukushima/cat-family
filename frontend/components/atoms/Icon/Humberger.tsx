import { memo, VFC, ReactNode } from "react";

export const Humberger: VFC = memo((props) => {
  const { children } = props;
  return (
    <>
      <div className="rounded-button button-green mr-2">{children}</div>
    </>
  );
});