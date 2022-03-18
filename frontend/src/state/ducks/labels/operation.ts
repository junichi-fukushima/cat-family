import {
  fetchCatAgeAction,
  fetchCatLabelAction,
  fetchCatSexAction,
  fetchCatTypeAction,
  updateCatLabelAction,
} from "./actions";
import {
  catLabelUrl,
  catAgeUrl,
  catTypeUrl,
  catSexUrl,
} from "../../urls/index";
import axios from "axios";


// CatLabel
export const fetchCatLabel = () => {
  return async (dispatch: any) => {
    axios
    .get(catLabelUrl)
    .then((result) => {
      let catLabelArray = result.data.map((x: any) => x.attributes);
      catLabelArray.forEach((element: any) => {
        element.checked = false;
      });
      dispatch(fetchCatLabelAction(result.data.map((x: any) => x.attributes)));
    })
    .catch(() => null);
  };
};
export const updateCatLabel = (id: number) => {
  return async (dispatch: any) => {
    dispatch(updateCatLabelAction(id));
  };
};

// CatAge
export const fetchCatAge = () => {
  return async (dispatch: any) => {
    axios
    .get(catAgeUrl)
    .then((result) => {
      dispatch(fetchCatAgeAction(result.data.map((x: any) => x.attributes)));
    })
    .catch(() => null);
  };
};

// CatSex
export const fetchCatSex = () => {
  return async (dispatch: any) => {
    axios
    .get(catSexUrl)
    .then((result) => {
      dispatch(fetchCatSexAction(result.data.map((x: any) => x.attributes)));
    })
    .catch(() => null);
  };
};

// CatType
export const fetchCatType = () => {
  return async (dispatch: any) => {
    axios
    .get(catTypeUrl)
    .then((result) => {
      dispatch(fetchCatTypeAction(result.data.map((x: any) => x.attributes)));
    })
    .catch(() => null);
  };
};
