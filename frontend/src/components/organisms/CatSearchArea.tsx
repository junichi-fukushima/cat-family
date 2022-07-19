// import React && Redux
import { memo, useEffect, VFC } from "react";
import {
  getCatAge,
  getCatLabel,
  getCatSex,
  getCatType,
} from "../../state/ducks/labels/selectors";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/store/type";
import { updateCatLabel } from "../../state/ducks/labels/operation";

// import styled-components
import styled from "styled-components";

// import components
import { SelectCatSearch } from "../atoms/input/SelectSearch";
import { CheckBoxCatSearch } from "../atoms/input/CheckBoxSearch";
import {
  setSearchAgeCondition,
  setSearchSexCondition,
  setSearchTypeCondition,
  setSearchPrefectureCondition,
  setSearchLabelCondition,
} from "../../state/ducks/cat_search/operation";
import { prefecture } from "../../data/prefecture";
import { searchCats } from "../../state/ducks/cats/operation";
import { getCatSearchCondition } from "../../state/ducks/cat_search/selectors";

export const CatSearchArea: VFC = memo(() => {
  // selectorの呼び出し(ラベルAPIの呼び出し)
  const selector = useSelector((state: State) => state);
  const catLabels = getCatLabel(selector);
  const ages = getCatAge(selector);
  const types = getCatType(selector);
  const sexs = getCatSex(selector);
  // 検索項目が更新されたら、選択した項目を保存する項目
  // 猫情報の更新はpages/index.tsxで行っている
  const dispatch = useDispatch();
  const handleChecked = (id: number) => {
    dispatch(updateCatLabel(id));
    dispatch(setSearchLabelCondition(catLabels));
  };
  const handleSelectAge = (value: number) => {
    dispatch(setSearchAgeCondition(value));
  };
  const handleSelectType = (value: number) => {
    dispatch(setSearchTypeCondition(value));
  };
  const handleSelectSex = (value: number) => {
    dispatch(setSearchSexCondition(value));
  };
  const handleSelectPrefecture = (value: number) => {
    dispatch(setSearchPrefectureCondition(value));
  };
  // searchcondition(検索項目の選択)が更新されたら表示する猫情報を更新する
  const searchcondition = getCatSearchCondition(selector);

  // useEffect(() => {
  //   console.log("aaa")
  //   // dispatch(searchCats(searchcondition));
  // }, [searchcondition]);
  return (
    <>
      <Form>
        <SelectWrap>
          <SelectCatSearch
            options={prefecture}
            onChange={handleSelectPrefecture}
          />
          <SelectCatSearch options={ages} onChange={handleSelectAge} />
          <SelectCatSearch options={types} onChange={handleSelectType} />
          <SelectCatSearch options={sexs} onChange={handleSelectSex} />
        </SelectWrap>
        <CheckBoxWrap>
          {catLabels.map((label, index) => {
            index = index + 1;
            return (
              <CheckBoxCatSearch
                key={index}
                id={label.id}
                checked={label.checked}
                // Note : ここにチェックした時にbooleanを入れ替える関数入れる
                onChange={handleChecked}
              >
                {label.name}
              </CheckBoxCatSearch>
            );
          })}
        </CheckBoxWrap>
      </Form>
    </>
  );
});

// styled-components
const Form = styled.form``;
const SelectWrap = styled.div`
  display: grid;
  gap: 20px 0px;
`;
const CheckBoxWrap = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0;
`;
