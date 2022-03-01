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
    cat_sex_id:2,
    cat_type_id:2,
    cat_label_id:2,
    cat_age_id:2,
    title:"元気なわんぱくチャ猫！人懐き抜群！",
    terms:"猫可物件にお住まいの方",
    summary:"これは応募概要のテキストです",
    price:600,
    status: true,
  )
  # active storage
  cat.main_img.attach(io: File.open(Rails.root.join('app/assets/img/cat.jpg')), filename: 'cat.jpg')
  cat.sub_img.attach(io: File.open(Rails.root.join('app/assets/img/cat.jpg')), filename: 'cat.jpg')
  cat.sub_img.attach(io: File.open(Rails.root.join('app/assets/img/cat.jpg')), filename: 'cat.jpg')

  cat.save!
end