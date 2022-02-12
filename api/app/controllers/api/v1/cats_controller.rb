module Api
  module V1
    class CatsController < ApplicationController
      # ログインしていない場合はログインページへ飛ばす
      # before_action :authenticate_user!, only: %i[new create edit update destroy]
      def index
        cats = Cat.all

        render json: {
          cats: cats
        }, status: :ok
      end
    end
  end
end
