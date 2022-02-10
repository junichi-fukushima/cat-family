class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name, null: false, default: ''
      t.string :male, null: false, default: ''
      t.string :type, null: false, default: ''
      t.string :title, null: false, default: ''
      t.text :terms, null: false
      t.timestamps
    end
  end
end
