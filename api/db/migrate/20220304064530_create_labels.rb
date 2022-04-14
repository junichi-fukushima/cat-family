class CreateLabels < ActiveRecord::Migration[6.0]
  def change
    create_table :labels do |t|
      # ラベル名は被ってはいけないので一意性制約かける
      t.string :name, null: false, default: "", unique: true
      t.timestamps
    end
  end
end
