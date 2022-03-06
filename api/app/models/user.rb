# frozen_string_literal: true

class User < ActiveRecord::Base
  # :confirmable⇨アカウント確認を押すまでは本登録が完了しない仕様
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User
end
