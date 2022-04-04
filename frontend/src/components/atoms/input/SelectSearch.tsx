import { memo, VFC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCatSearchCondition } from "../../../state/ducks/cat_search/selectors";
import { State } from "../../../state/store/type";
import { color } from "../../../utility/colors";

type CatSearchTypes = {
  id: number;
  name: string;
}[];

type Props = {
  options: CatSearchTypes;
  onChange: (value: number) => void;
};

// valueを共有したい
// valueとoption.idが一致した時にselectedを付与する
// 問題点
// デフォルト値がnull / undefinedになっている
// 条件分岐使えない？
// https://chaika.hatenablog.com/entry/2019/05/16/083000

// ドロップダウンの検索エリア
export const SelectCatSearch: VFC<Props> = memo((props) => {
  const { options, onChange} = props;

  return (
    <>
      <FormGroup>
        <SearchSelect onChange={(e) => onChange(Number(e.target.value))}>
          {options &&
            options.map((option, index) => (
              <SearchOption key={index} value={option.id}>
                {option.name}
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
  background-color: ${color.white};
  border-radius: 10px;
  cursor: pointer;
`;

const SearchOption = styled.option``;
