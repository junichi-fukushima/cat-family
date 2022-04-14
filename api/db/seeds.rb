# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# run : rails db:seed
# ラベルデータの格納
labels = ['単身者可','高齢者可','去勢済み','エイズ陰性','先住猫可']

labels.each do |label|
  Label.create(name: "#{label}")
end

2.times do |n|
  cat = Cat.new(
    name: "チャチャ_#{n}号",
    cat_sex_id: 2,
    cat_type_id: 2,
    cat_age_id: 2,
    title: "元気なわんぱくチャ猫！人懐き抜群！",
    terms: "猫可物件にお住まいの方",
    summary: "これは応募概要のテキストです",
    price: 600,
    status: true,
    user_id:1
  )
  # active storage
  cat.main_img.attach(io: File.open(Rails.root.join("app/assets/img/cat.jpg")), filename: "cat.jpg")
  cat.sub_img.attach(io: File.open(Rails.root.join("app/assets/img/cat.jpg")), filename: "cat.jpg")
  cat.sub_img.attach(io: File.open(Rails.root.join("app/assets/img/cat.jpg")), filename: "cat.jpg")

  cat.save!
end

2.times do |n|
  CatLabel.create!(
    cat_id: 1,
    label_id: "#{n + 2}"
  )
end
2.times do |n|
  CatLabel.create!(
    cat_id: 2,
    label_id: "#{n + 1}"
  )
end
