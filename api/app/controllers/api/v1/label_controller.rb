module Api
  module V1
    class LabelController < ApplicationController
      def index
        # activehash(ラベルマスタ)
        render json: Label.all
      end
    end
  end
end
