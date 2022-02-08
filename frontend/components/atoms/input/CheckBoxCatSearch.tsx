import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";
import { color } from "../../utility/colors";

type Props = {
  children: ReactNode;
  index: string;
  item: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBoxCatSearch: VFC<Props> = memo((props) => {
  const { children, item, index, checked, onChange } = props;
  return (
    <>
      <CheckLabel htmlFor={`${index}`}>
        <CheckBox
          id={`${index}`}
          value={item}
          checked={checked}
          type="checkbox"
          onChange={onChange}
        />
        <span>{children}</span>
      </CheckLabel>
    </>
  );
});

const CheckBox = styled.input`
  display: none;
  &:checked {
    background-color: ${color.green};
  }
`;
const CheckLabel = styled.label`
  border: 1px solid ${color.darkGrey};
  text-align: center;
  padding: 10px;
  border-radius: 30px;
`;
