import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  id: number;
  checked: boolean;
  onChange: (id: number) => void;
};

export const CheckBoxCatSearch: VFC<Props> = memo((props) => {
  const { children, id, checked, onChange } = props;
  return (
    <>
      <CheckLabel htmlFor={`${id}`} checkedLabel={checked}>
        <CheckBox
          id={`${id}`}
          value={id}
          checked={checked}
          onChange={() => onChange(id)}
          type="checkbox"
        />
        <span>{children}</span>
      </CheckLabel>
    </>
  );
});

const CheckBox = styled.input`
  display: none;
`;

const CheckLabel = styled.label`
  text-align: center;
  padding: 10px;
  border-radius: 30px;
  border: ${(props) =>
    props.checkedLabel ? "1px solid #3EB370" : "1px solid #808080"};
  background-color: ${(props) => (props.checkedLabel ? "#3EB370" : "#ffffff")};
  color: ${(props) => (props.checkedLabel ? "#ffffff" : "#555555")};
`;
