import { Loading, loading } from "./type";

export const LoadingAction = (state: loading) => {
  return {
    type: Loading,
    payload: state,
  };
};
