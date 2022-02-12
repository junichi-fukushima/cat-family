class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name, null: false, default: ''
      t.string :sex, null: false, default: ''
      t.string :type, null: false, default: ''
      t.string :title, null: false, default: ''
      t.text :terms, null: false
      t.text :summary, null: false
      t.integer :cat_label_id, null: false
      t.integer :price, null: false, default: 0
      t.timestamps
    end
  end
end
