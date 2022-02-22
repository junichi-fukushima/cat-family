class CatLabel < ActiveHash::Base
  self.data = [
    { id: 1, label: '単身者可' }, { id: 2, label: '高齢者可' }, { id: 3, label: '去勢済み' },
    { id: 4, label: 'エイズ陰性' }, { id: 5, label: '先住猫可' }
  ]
end
