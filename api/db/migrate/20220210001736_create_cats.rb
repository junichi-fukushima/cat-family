class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name, null: false, default: ""
      t.string :title, null: false, default: ""
      t.text :terms, null: false
      t.text :summary, null: false
      t.integer :price, null: false, default: 0
      t.boolean :status, null: false
      # activehash
      t.integer :cat_label_id, null: false
      t.integer :cat_sex_id, null: false
      t.integer :cat_type_id, null: false
      t.integer :cat_age_id, null: false
      t.timestamps
    end
  end
end
