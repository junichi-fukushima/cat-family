// ラベルデータを取得する
import axios from 'axios';
import { catTypeUrl } from '../../urls/index'

export const fetchCatLabel =() => {
  return axios.get(catTypeUrl)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}