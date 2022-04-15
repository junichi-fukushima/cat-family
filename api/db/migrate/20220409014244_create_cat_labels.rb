class CreateCatLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :cat_labels do |t|
      t.references :cat
      t.integer :label_id
    end
  end
end
