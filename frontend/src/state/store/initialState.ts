import { State } from "./type";

export const initialState: State = {
  cats: [],
  cat_label: [],
  cat_age: [],
  cat_sex: [],
  cat_type: [],
  user: {
    id: null,
    userName: "",
    nickname: "",
    phone: null,
    email: "",
    postCode: null,
    prefectureId: null,
    city: "",
    building: "",
    catTypeId: null,
    // ログインステータス
    isSignIn: false,
  },
  loading: true,
  isSignedIn: false,
  catSearch: {
    ageId: null,
    typeId: null,
    sexId: null,
    prefectureId: null,
    label:[],
  },
};
