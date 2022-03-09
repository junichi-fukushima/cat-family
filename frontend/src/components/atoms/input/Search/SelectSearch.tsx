import { memo, VFC } from "react";
import styled from "styled-components";
import { color } from "../../../../utility/colors";

type CatSearchTypes = {
  id: number;
  name: string;
}[];

type Props = {
  options: CatSearchTypes;
};

// selectで選ぶ検索
export const SelectCatSearch: VFC<Props> = memo((props) => {
  const { options } = props;
  return (
    <>
      <FormGroup>
        <SearchSelect>
          {options &&
            options.map((option, index) => (
              <SearchOption id={`${index + 1}`} key={index} value={option.name}>
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
  border-radius: 10px;
  cursor: pointer;
`;

const SearchOption = styled.option``;
