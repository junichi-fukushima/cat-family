class ApplicationController < ActionController::API
  # Cookie や CORS の設定ができるようになる(SetUserByTokenという拡張機能を使える様になる)
  include DeviseTokenAuth::Concerns::SetUserByToken
end
