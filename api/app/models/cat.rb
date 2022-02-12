class Cat < ApplicationRecord
  # ActiveHash
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :cat_label

  # ActiveStorage(picture)
  has_one_attached :main_img
  has_many_attached :sub_img


end
