module Api
  module V1
    class LabelController < ApplicationController
      def index
        render json: Label.all
      end
    end
  end
end
