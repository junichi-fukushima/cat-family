import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { CatsReducer } from "../ducks/cats/reducers";
import { CatSearchReducer } from "../ducks/cat_search/reducers";
import {
  CatAgeReducer,
  CatLabelReducer,
  CatSexReducer,
  CatTypeReducer,
} from "../ducks/labels/reducers";
import { LoadingReducer } from "../ducks/loading/reducers";
import { UserReducer } from "../ducks/user/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      // 猫情報
      cats: CatsReducer,
      // ラベルAPI
      cat_label: CatLabelReducer,
      cat_age: CatAgeReducer,
      cat_sex: CatSexReducer,
      cat_type: CatTypeReducer,
      // ユーザー情報
      user: UserReducer,
      // ローディング
      loading: LoadingReducer,
      // 猫検索機能
      catSearch: CatSearchReducer
    }),
    applyMiddleware(
      // operation.jsに記載されるような関数をdispatchする時や、非同期での処理をする際はapplayMiddlewareの中でthunkを呼び出す必要がある
      thunk
    )
  );
}
