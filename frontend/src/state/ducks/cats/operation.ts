import { catsIndexUrl } from "../../urls";
import { fetchAllCatsAction } from "./actions";
import axios from "axios";
import { LoadingAction } from "../loading/actions";


export const fetchCats = () => {
  return async (dispatch: any) => {
    dispatch(LoadingAction(true))
    axios
    .get(catsIndexUrl)
    .then((result) => {
      dispatch(LoadingAction(false))
      dispatch(fetchAllCatsAction(result.data.map((x: any) => x)));
    })

    .catch(() => null)
  };
};
