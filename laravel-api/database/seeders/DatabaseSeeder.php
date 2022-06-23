<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // 下記の順番でseedを実行する
        $this->call([
            UsersSeeder::class,
            CatsSeeder::class,
            CatsLabelSeeder::class,
        ]);
    }
}
