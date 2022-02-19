// ラベルデータを取得する
import axios from 'axios';
import { catLabelUrl } from '../../urls/index'

export const fetchCatLabel =() => {
  return axios.get(catLabelUrl)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}