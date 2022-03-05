Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cats
      # activehash(ラベルマスタ)
      get "cat_age", to: "cat_age#index"
      get "cat_label", to: "cat_label#index"
      get "cat_sex", to: "cat_sex#index"
      get "cat_type", to: "cat_type#index"
      # ユーザー認証
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end
end
