# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# run : rails db:seed
10.times do |n|
  cat = Cat.new(
    name:"チャチャ_#{n}号",
    sex:"male",
    cat_type:"キジ白",
    title:"male",
    terms:"male",
    summary:"male",
    cat_label_id:1,
    price:600,
    status: true,

  )
  # active storage
  cat.main_img.attach(io: File.open(Rails.root.join('app/assets/img/cat.jpg')), filename: 'cat.jpg')
  cat.sub_img.attach(io: File.open(Rails.root.join('app/assets/img/cat.jpg')), filename: 'cat.jpg')
  cat.sub_img.attach(io: File.open(Rails.root.join('app/assets/img/cat.jpg')), filename: 'cat.jpg')

  cat.save!
end