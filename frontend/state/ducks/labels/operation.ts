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

// CatLabel
export const fetchCatLabel = () => {
  return async (dispatch: any) => {
    fetch(catLabelUrl)
      .then((res) => res.json())
      .then((result) => {
        let catLabelArray = result.map((x: any) => x.attributes);
        catLabelArray.forEach((element: any) => {
          element.checked = false;
        });
        dispatch(fetchCatLabelAction(result.map((x: any) => x.attributes)));
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
    fetch(catAgeUrl)
      .then((res) => res.json())
      .then((result) => {
        dispatch(fetchCatAgeAction(result.map((x: any) => x.attributes)));
      })
      .catch(() => null);
  };
};

// CatSex
export const fetchCatSex = () => {
  return async (dispatch: any) => {
    fetch(catSexUrl)
      .then((res) => res.json())
      .then((result) => {
        dispatch(fetchCatSexAction(result.map((x: any) => x.attributes)));
      })
      .catch(() => null);
  };
};

// CatType
export const fetchCatType = () => {
  return async (dispatch: any) => {
    fetch(catTypeUrl)
      .then((res) => res.json())
      .then((result) => {
        dispatch(fetchCatTypeAction(result.map((x: any) => x.attributes)));
      })
      .catch(() => null);
  };
};
