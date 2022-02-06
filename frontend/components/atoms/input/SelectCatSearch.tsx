import { memo, VFC } from "react";
import styled from "styled-components";
import { CatSearchTypes } from "../../types/SearchFormTypes";

type Props = {
  options: CatSearchTypes;
};

export const SelectCatSearch: VFC<Props> = memo((props) => {
  const { options } = props;
  return (
    <>
      <FormGroup>
        <SearchSelect>
          {options.map((option) => (
            <SearchOption value={option.value}>{option.label}</SearchOption>
          ))}
        </SearchSelect>
      </FormGroup>
    </>
  );
});

const FormGroup = styled.div``;

const SearchSelect = styled.select``;

const SearchOption = styled.option``;

// それ以外
// select要素

// ラベル部分
// checkbox

// childrenでそれぞれのフォームを共通化して作りたい
// 都道府県
// text /
