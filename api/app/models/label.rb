class Label < ApplicationRecord
  has_many :cat_labels
  has_many :cats, through: :cat_labels
end
