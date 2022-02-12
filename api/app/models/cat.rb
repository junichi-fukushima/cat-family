class Cat < ApplicationRecord
  # ActiveHash
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :cat_age
  belongs_to_active_hash :cat_label
  belongs_to_active_hash :cat_sex
  belongs_to_active_hash :cat_type

  # ActiveStorage
  include Rails.application.routes.url_helpers
  has_one_attached :main_img
  has_many_attached :sub_img
  def image_url
    main_img.attached? ? url_for(main_img) : nil
    sub_img.attached? ? sub_img.map{|sub_img| url_for(sub_img)}: nil
  end
  # Association

  # Validation

end
