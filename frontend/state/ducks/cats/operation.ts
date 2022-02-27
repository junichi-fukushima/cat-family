import { catsIndexUrl } from "../../urls";
import { fetchAllCatsAction } from "./actions";

export const fetchCats = () => {
  return async (dispatch: any) => {
    fetch(catsIndexUrl)
      .then((res) => res.json())
      .then((result) => {
        dispatch(fetchAllCatsAction(result.map((x: any) => x.attributes)));
      })
      .catch(() => null);
  };
};
