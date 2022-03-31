import applyCaseMiddleware from "axios-case-converter"
import axios from "axios"
import { DEFAULT_API_LOCALHOST } from "../../state/urls"

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true
}

export const client = applyCaseMiddleware(axios.create({
  baseURL: DEFAULT_API_LOCALHOST
}), options)
