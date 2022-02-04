import { memo, VFC, ReactNode } from "react";


type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
    <div className="btn-green rounded-button{">
      {children}
    </div>

    </>
  );
});
