<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatLabel extends Model
{
    use HasFactory;

    // Cat
    public function cat()
    {
        return $this->belongsTo(Cat::class);
    }
    // Label
    public function label()
    {
        return Label::from($this->cat_label_id);
    }
}
