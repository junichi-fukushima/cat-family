<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cat extends Model
{
    use HasFactory;

    // リレーション
    public function cat_labels()
    {
        return $this->hasMany(CatLabel::class);
    }
    public function cat_label()
    {
        $this->cat_label_ids;
    }
    public function cat_age()
    {
        return Age::from($this->cat_age_id);
    }
    public function cat_sex()
    {
        return Sex::from($this->cat_sex_id);
    }
    public function cat_type()
    {
        return Type::from($this->cat_type_id);
    }
}
