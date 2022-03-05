class CatLabel < ActiveHash::Base
  self.data = [
    { id: 1, name: "単身者可" }, { id: 2, name: "高齢者可" }, { id: 3, name: "去勢済み" },
    { id: 4, name: "エイズ陰性" }, { id: 5, name: "先住猫可" }
  ]
end
