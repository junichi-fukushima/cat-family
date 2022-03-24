// import React && Redux
import { memo, VFC } from "react";
import { getCatAge, getCatLabel, getCatSex, getCatType } from "../../../state/ducks/labels/selectors";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../state/store/type";
import { updateCatLabel } from "../../../state/ducks/labels/operation";

// import styled-components
import styled from "styled-components";

// import components
import { SelectCatSearch } from "../../atoms/input/SelectSearch";
import { CheckBoxCatSearch } from "../../atoms/input/CheckBoxSearch";

export const CatSearchArea: VFC = memo(() => {
  // selectorの呼び出し(ラベルAPIの呼び出し)
  const selector = useSelector((state: State) => state);
  const catLabels = getCatLabel(selector);
  const ages = getCatAge(selector);
  const types = getCatSex(selector);
  const sexs = getCatType(selector);
  // catLabelのstatusを変更する
  const dispatch = useDispatch();
  const handleChecked = (id: number) => {
    dispatch(updateCatLabel(id));
  };

  return (
    <>
      <Form>
        <SelectWrap>
          {/* <SelectCatSearch options={prefectures} /> */}
          <SelectCatSearch options={ages} />
          <SelectCatSearch options={types} />
          <SelectCatSearch options={sexs} />
        </SelectWrap>
        <CheckBoxWrap>
          {catLabels.map((label, index) => {
            index = index + 1;
            return (
              <CheckBoxCatSearch
                key={index}
                id={label.id}
                checked={label.checked}
                // Note : ここにチェックした時にbooleaを入れ替える関数入れる
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
  margin-top: 20px;
`;
