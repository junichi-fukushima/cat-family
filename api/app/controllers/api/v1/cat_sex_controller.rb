module Api
  module V1
    class CatSexController < ApplicationController
      def index
        # activehash(ラベルマスタ)
        render json: CatSex.all
      end
    end
  end
end
