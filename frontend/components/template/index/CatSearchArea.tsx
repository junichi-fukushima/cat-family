import styled from "styled-components";
import { memo, VFC } from "react";
import { SelectCatSearch } from "../../atoms/input/SelectCatSearch";
import { CheckBoxCatSearch } from "../../atoms/input/CheckBoxCatSearch";

// import data
import { ages, prefectures, sexs, types } from "../../../api/cat-data";

type checkListsTypes = {
  value: string,
  checked: boolean,
}[];

type Props = {
  checkState: checkListsTypes;
  handleChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CatSearchArea: VFC<Props> = memo((props) => {
  const { checkState, handleChecked } = props;
  return (
    <>
      <Form>
        <SelectWrap>
          <SelectCatSearch options={prefectures} />
          <SelectCatSearch options={ages} />
          <SelectCatSearch options={types} />
          <SelectCatSearch options={sexs} />
        </SelectWrap>
        <CheckBoxWrap>
          {checkState.map((item, index) => {
            index = index + 1;
            return (
              <CheckBoxCatSearch
                key={index}
                index={`id_${index}`}
                item={item.value}
                checked={item.checked}
                onChange={handleChecked}
              >
                {item.value}
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
