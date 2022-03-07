module Api
  module V1
    class Auth::SessionsController < ApplicationController
      # ユーザー情報を取得する
      def index
        if current_user
          render json: { is_login: true, data: current_user }
        else
          render json: { is_login: false, message: 'ユーザーが存在しません' }
        end
      end
    end
  end
end
