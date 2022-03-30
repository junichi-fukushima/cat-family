class CatAge < ActiveHash::Base
  self.data = [
    { id: 1, name: '年齢を選択してください' }, { id: 2, name: '〜1歳' }, { id: 3, name: '〜5歳' }, { id: 4, name: '〜10歳' },
    { id: 5, name: '〜11歳以上' }
  ]
end
