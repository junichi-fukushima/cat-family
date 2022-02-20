class CatAge < ActiveHash::Base
  self.data = [
    { id: 1, age: '〜1歳' }, { id: 2, age: '〜5歳' }, { id: 3, age: '〜10歳' },
    { id: 4, age: '〜11歳以上' }
  ]
end
