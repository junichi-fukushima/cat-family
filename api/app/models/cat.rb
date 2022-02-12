class Cat < ApplicationRecord
  # ActiveHash
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :cat_age
  belongs_to_active_hash :cat_label
  belongs_to_active_hash :cat_sex
  belongs_to_active_hash :cat_type

  # ActiveStorage
  has_one_attached :main_img
  has_many_attached :sub_img

  # Association

  # Validation

end
