module Api
  module V1
    class CatAgeController < ApplicationController
      def index
        # activehash(ラベルマスタ)
        render json: CatAge.all
      end
    end
  end
end
