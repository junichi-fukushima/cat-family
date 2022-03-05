class CatType < ActiveHash::Base
  self.data = [
    { id: 1, name: "種類" }, { id: 2, name: "雑種(キジ白)" }, { id: 3, name: "雑種(黒猫)" }, { id: 4, name: "雑種(茶猫)" },
    { id: 5, name: "その他" }
  ]
end
