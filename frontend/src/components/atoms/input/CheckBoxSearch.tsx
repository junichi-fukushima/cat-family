import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";
import { color } from "../../../utility/colors";

type Props = {
  children: ReactNode;
  id: number;
  checked: boolean;
  onChange: (id: number) => void;
};

// チェックボックス
export const CheckBoxCatSearch: VFC<Props> = memo((props) => {
  const { children, id, checked, onChange } = props;
  return (
    <>
      <CheckLabel htmlFor={`${id}`}>
        <CheckBox
          id={`${id}`}
          value={id}
          checked={checked}
          onChange={() => onChange(id)}
          type="checkbox"
        />
        {checked ? (
          <GreenLabel>{children}</GreenLabel>
        ) : (
          <WhiteLabel>{children}</WhiteLabel>
        )}
      </CheckLabel>
    </>
  );
});

const Label = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 30px;
`;

const WhiteLabel = styled(Label)`
  border: 1px solid ${color.darkGrey};
  background-color: ${color.white};
  color: ${color.black};
`;
const GreenLabel = styled(Label)`
  border: 1px solid ${color.green};
  background-color: ${color.green};
  color: ${color.white};
`;

const CheckLabel = styled.label`
  position: relative;
  text-align: center;
  border-radius: 30px;
`;

const CheckBox = styled.input`
  position: absolute;
  width: 0;
  height: 0;
`;
