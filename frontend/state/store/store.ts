import { createStore as reduxCreateStore, combineReducers } from "redux";
import { CatsReducer } from "../ducks/cats/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      cats:CatsReducer
    })
  );
}
