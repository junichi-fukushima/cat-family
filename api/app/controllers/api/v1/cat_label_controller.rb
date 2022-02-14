module Api
  module V1
    class CatLabelController < ApplicationController
      def index
        # activehash(ラベルマスタ)
        render json: CatLabel.all
      end
    end
  end
end
