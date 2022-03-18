import { catsIndexUrl } from "../../urls";
import { fetchAllCatsAction } from "./actions";
import axios from "axios";

export const fetchCats = () => {
  return async (dispatch: any) => {
    axios
    .get(catsIndexUrl)
    .then((result) => {
      dispatch(fetchAllCatsAction(result.data.map((x: any) => x)));
    })
    .catch(() => null);
  };
};
