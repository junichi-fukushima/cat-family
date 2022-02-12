class CatType < ActiveHash::Base
  self.data = [
    { id: 1, name: '雑種(キジ白)' }, { id: 2, name: '雑種(黒猫)' }, { id: 3, name: '雑種(茶猫)' },
    { id: 4, name: 'その他' }
  ]
end
