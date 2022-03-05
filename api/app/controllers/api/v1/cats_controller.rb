module Api
  module V1
    class CatsController < ApplicationController
      def index
        render json: Cat.all, methods: %i[main_image_url sub_image_url]
      end
    end
  end
end
