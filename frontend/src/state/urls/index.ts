// APIを取得するURL一式
const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'
const DEFAULT_API_PRODUCTION = 'http://localhost:3000/api/v1'

export const catsIndexUrl = `${DEFAULT_API_LOCALHOST}/cats`

// ラベルマスタ
export const catLabelUrl = `${DEFAULT_API_LOCALHOST}/cat_label`
export const catAgeUrl = `${DEFAULT_API_LOCALHOST}/cat_age`
export const catTypeUrl = `${DEFAULT_API_LOCALHOST}/cat_type`
export const catSexUrl = `${DEFAULT_API_LOCALHOST}/cat_sex`

// ユーザー管理機能
export const postUserUrl = `${DEFAULT_API_LOCALHOST}/api/v1/auth`
