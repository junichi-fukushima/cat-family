<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_name');
            $table->string('nickname');
            $table->string('email')->unique();
            $table->integer('email_verified')->nullable(); // null=未認証 / 1=認証済み
            $table->string('phone');
            $table->string('post_code');
            $table->integer('prefecture_id');
            $table->integer('cat_type_id');
            $table->string('city');
            $table->string('building');
            $table->string('password');
            $table->string('profile_img')->nullable();
            $table->string('token');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
