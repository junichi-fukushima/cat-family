Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cats
      # active-hash(ラベルマスタ)
      get "cat_age", to: "cat_age#index"
      get "cat_label", to: "cat_label#index"
      get "cat_sex", to: "cat_sex#index"
      get "cat_type", to: "cat_type#index"
      # 認証
      namespace :auth do
        resources :sessions, only: %i[index]
      end
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        # registrationsコントローラーの所在地
        registrations: "api/v1/auth/registrations"
      }
    end
  end
end
