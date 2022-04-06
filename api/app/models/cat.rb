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
  def main_image_url
    main_img.attached? ? url_for(main_img) : nil
  end

  def sub_image_url
    sub_img.attached? ? sub_img.map { |sub_img| url_for(sub_img) } : nil
  end

  # Association

  # Validation

  # 検索機能
  def self.search(search)
    # 検索ワードがない時
    return Cat.all unless search

    # 検索ワードがある時
    Cat.where(cat_label_id: search[:cat_label_id], cat_sex_id: search[:cat_sex_id], cat_type_id: search[:cat_type_id],
      cat_age_id: search[:cat_age_id])
  end
end
# whereが1個ならいけるけど、他がnullになるといけない
#
