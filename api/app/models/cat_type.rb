class CatType < ActiveHash::Base
  self.data = [
    { id: 1, type: '雑種(キジ白)' }, { id: 2, type: '雑種(黒猫)' }, { id: 3, type: '雑種(茶猫)' },
    { id: 4, type: 'その他' }
  ]
end
