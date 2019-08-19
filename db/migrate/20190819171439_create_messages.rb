class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :email
      t.string :text
      t.string :name

      t.timestamps
    end
  end
end
