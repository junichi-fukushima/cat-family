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
        Schema::create('cats', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->text('terms');
            $table->text('summary');
            $table->integer('price');
            $table->boolean('status')->default(false);
            $table->integer('cat_sex_id');
            $table->integer('cat_type_id');
            $table->integer('cat_age_id');
            $table->unsignedBigInteger('user_id');
            $table->string('main_img');
            $table->string('sub_img1')->nullable();
            $table->string('sub_img2')->nullable();
            $table->string('sub_img3')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('cats');
    }
};
