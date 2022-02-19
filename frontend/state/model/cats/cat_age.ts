// ラベルデータを取得する
import axios from 'axios';
import { catAgeUrl } from '../../urls/index'

export const fetchCatLabel =() => {
  return axios.get(catAgeUrl)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}