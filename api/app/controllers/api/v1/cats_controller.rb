module Api
  module V1
    class CatsController < ApplicationController
      def index
        render json: Cat.all, methods: [:image_url]
      end
    end
  end
end
