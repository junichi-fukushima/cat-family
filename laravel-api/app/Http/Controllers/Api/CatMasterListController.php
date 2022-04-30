<?php

namespace App\Http\Controllers\Api;

// controller
use App\Http\Controllers\Controller;

// models
use App\Models\Age;
use App\Models\Label;
use App\Models\Sex;
use App\Models\Type;

// others
use Illuminate\Http\Request;

// enumで保管している情報を返却するコントローラー
class CatMasterListController extends Controller
{
    /**
     * 猫の年齢ラベルを全て取得する
     * @return array {id: number, name:string}
     */
    public function cat_age ()
    {
        // メモ : PHPは配列にメソッドがないのでコレクション型にする
        return collect(Age::cases())->map(function($val) {
            return ['id' => $val->value, 'name' => $val->name()];
        });
    }
    /**
     * 猫の募集条件ステータスラベルを全て取得する
     * @return array {id: number, name:string}
     */
    public function cat_label ()
    {
        return collect(Label::cases())->map(function($val) {
            return ['id' => $val->value, 'name' => $val->name()];
        });
    }
    /**
     * 猫の性別ラベルを全て取得する
     * @return array {id: number, name:string}
     */
    public function cat_sex ()
    {
        return collect(Sex::cases())->map(function($val) {
            return ['id' => $val->value, 'name' => $val->name()];
        });
    }
    /**
     * 猫の猫種ラベルを全て取得する
     * @return array {id: number, name:string}
     */
    public function cat_type ()
    {
        return collect(Type::cases())->map(function($val) {
            return ['id' => $val->value, 'name' => $val->name()];
        });
    }
}
