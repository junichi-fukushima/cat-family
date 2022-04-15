module Api
  module V1
    class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
      private

      # Unpermitted parameters: :config, :redirect_url
      def sign_up_params
        # サインアップ時に登録できるカラムを指定
        params.require(:registration).permit(:email, :password, :password_confirmation, :user_name, :nickname, :phone, :post_code, :prefecture_id, :city, :building,
                                             :cat_type_id)
      end
    end
  end
end
