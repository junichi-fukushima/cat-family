class Cat < ApplicationRecord
  # ActiveHash
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :cat_label
end
