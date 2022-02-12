module Api
  module V1
    class CatsController < ApplicationController
      # before_action :authenticate_user!, only: %i[new create edit update destroy]
      def index
        render json: Cat.all, methods: [:image_url]
      end
    end
  end
end
