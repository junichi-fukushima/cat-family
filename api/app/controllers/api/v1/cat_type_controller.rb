module Api
  module V1
    class CatTypeController < ApplicationController
      def index
        # activehash(ラベルマスタ)
        render json: CatType.all
      end
    end
  end
end
