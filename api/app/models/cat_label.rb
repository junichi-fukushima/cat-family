class CatLabel < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  belongs_to :cat
  belongs_to_active_hash :label
end