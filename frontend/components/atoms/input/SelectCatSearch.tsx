import { memo, VFC } from "react";
import styled from "styled-components";
import { CatSearchTypes } from "../../types/SearchFormTypes";
import { color } from "../../utility/colors";

type Props = {
  options: CatSearchTypes;
};

export const SelectCatSearch: VFC<Props> = memo((props) => {
  const { options } = props;
  return (
    <>
      <FormGroup>
        <SearchSelect>
          {options.map((option, index) => (
            <SearchOption key={index} value={option.value}>
              {option.label}
            </SearchOption>
          ))}
        </SearchSelect>
      </FormGroup>
    </>
  );
});

const FormGroup = styled.div``;

const SearchSelect = styled.select`
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  border: 1px solid ${color.darkGrey};
  border-radius: 10px;
  cursor: pointer;
`;

const SearchOption = styled.option``;

// それ以外
// select要素

// ラベル部分
// checkbox

// childrenでそれぞれのフォームを共通化して作りたい
// 都道府県
// text /
