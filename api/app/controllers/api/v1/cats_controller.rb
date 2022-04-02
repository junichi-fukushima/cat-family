module Api
  module V1
    class CatsController < ApplicationController

      def index
        render json: Cat.all, methods: %i[main_image_url sub_image_url]
      end

      def search
        # モデルでの検索結果を取得する
        data = Cat.search(params[:search])

        if data.exists?
          render json: { data: data }, status: 200
        else
          render json: { status: '404' }, status: 404
        end
      end
    end
  end
end
