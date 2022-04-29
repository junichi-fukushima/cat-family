<?php

namespace App\Http\Controllers\Api;

// controller
use App\Http\Controllers\Controller;

// models
use App\Models\Cat;

// others


// 猫情報に関するCRUD機能
class CatController extends Controller
{
    /**
     * 猫情報を一括で返却する
     * @return array
     */
    public function index (): array
    {
        $items = Cat::get();
        return $items;
    }
}
