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
      <CheckLabel htmlFor={`${index}`} checked={checked}>
        <CheckBox
          id={`${index}`}
          value={item}
          checked={checked}
          onChange={onChange}
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
  border:${props => props.checked == true ? '1px solid #3EB370' : '1px solid #808080'} ;
  background-color: ${props => props.checked == true ? '#3EB370' : '#ffffff'} ;
  color: ${props => props.checked == true ? '#ffffff' : '#555555'} ;

`;
