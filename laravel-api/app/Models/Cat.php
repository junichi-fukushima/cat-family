<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cat extends Model
{
    use HasFactory;

    // リレーション

    // リレーション
    // cat_labels
    public function cat_labels()
    {
        return $this->hasMany(CatLabel::class);
    }
    public function cat_label()
    {
        $this->cat_label_ids;
    }
    // cat_age
    public function cat_age()
    {
        return Age::from($this->cat_age_id);
    }
    // cat_sex
    public function cat_sex()
    {
        return Sex::from($this->cat_sex_id);
    }
    // cat_type
    public function cat_type()
    {
        return Type::from($this->cat_type_id);
    }
}
