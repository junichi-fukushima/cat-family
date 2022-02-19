// ラベルデータを取得する
import axios from 'axios';
import { catSexUrl } from '../../urls/index'

export const fetchCatSex =() => {
  return axios.get(catSexUrl)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}