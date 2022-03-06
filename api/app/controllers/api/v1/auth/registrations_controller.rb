module Api
  module V1
    class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
      # サインアップ、サインイン、サインアウト

      private

      def sign_up_params
        # サインアップ時に登録できるカラムを指定
        params.permit(:email, :password, :password_confirmation)
      end
    end
  end
end
