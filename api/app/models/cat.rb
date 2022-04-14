class Cat < ApplicationRecord
  # ActiveHash
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :cat_age
  belongs_to_active_hash :cat_sex
  belongs_to_active_hash :cat_type
  # アソシエーション
  belongs_to :user
  has_many :cat_labels
  has_many :labels, through: :cat_label

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
    results = Cat.all
    # 複数のラベルに全て合致する、猫データを取得する
    # 複数のラベルを取得する
    results = search[:label_ids].map { |label_id|
      joins(:labels).merge(Label.where(id: label_id))
    }

    # results = results.where(cat_sex_id: search[:cat_sex_id]) if search[:cat_sex_id].present?
    # results = results.where(cat_type_id: search[:cat_type_id]) if search[:cat_type_id].present?
    # results = results.where(cat_age_id: search[:cat_age_id]) if search[:cat_age_id].present?
    # rubocopエラー対策 : if文の後に使用しているローカル変数を明示する
    return results
  end
end
