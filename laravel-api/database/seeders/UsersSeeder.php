<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      for ($i = 1; $i < 21; $i++) {
        $user = User::create([
            'user_name' => '福嶋淳一' .sprintf("%02d", $i),
            'nickname' => 'ふくちゃん' .sprintf("%02d", $i) ,
            'email' => 'fukushima146749' .sprintf("%02d", $i) . "@gmail.com",
            'phone' => '08021494335',
            'post_code' => '7612401',
            'prefecture_id' => $i + 1,
            'cat_type_id' => 2,
            'city' => '横浜市栄区',
            'building' => '桂町670-5',
            'password' => bcrypt('testMAN0901'),
        ]);
      }
    }
}