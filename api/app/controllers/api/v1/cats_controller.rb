module Api
  module V1
    class CatsController < ApplicationController
      def index
        render json: Cat.all, methods: %i[main_image_url sub_image_url]
      end

      def search
        # モデルでの検索結果を取得する
        data = Cat.search(search_params)
        if data.exists?
          render json: { data: data }, status: 200
        else
          render json: { status: '404' }, status: 404
        end
      end

      private

      def search_params

        # params.permit(:cat_sex_id, :cat_type_id, :cat_age_id ,:label_ids)
        params.permit(:cat_sex_id, :cat_type_id, :cat_age_id ,label_ids: [])
      end
    end
  end
end
