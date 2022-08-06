<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Cat;
use App\Models\User;

class CatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 21; $i++) {
            Cat::create([
                'name' => 'チャチャ' .sprintf("%02d", $i),
                'title' => '元気が有り余っているわんぱくboy' ,
                'terms' => 'ダミーダミーだみダミーダミーダミーダミーダミーだみダミーダミーダミーダミーダミーだみダミーダミーダミーダミーダミーだみダミーダミーダミー',
                'summary' => 'ダミーダミーだみダミーダミーダミーダミーダミーだみダミーダミーダミーダミーダミーだみダミーダミーダミー',
                'price' => 1000 * $i,
                'status' => $i % 2 === 0 ? true : false,
                'cat_sex_id' => rand(2,3),
                'cat_type_id' => rand(2,5),
                'cat_age_id' => rand(2,5),
                'user_id' => rand(User::min("id"),User::max("id")),
                // ローカル環境でstorage配下の画像にアクセスするには、php artisan storage:linkで設定
                "main_img" => "http://localhost:3000/storage/images/cat.jpg",
                "sub_img1" => "http://localhost:3000/storage/images/cat.jpg",
                "sub_img2" => "http://localhost:3000/storage/images/cat.jpg",
                "sub_img3" => "http://localhost:3000/storage/images/cat.jpg",
            ]);
        }
    }
}
