<?php

namespace App\Http\Controllers\Api;

// controller
use App\Http\Controllers\Controller;

// models
use App\Models\Cat;
use Illuminate\Support\Collection;

// others
use Illuminate\Http\Request;
use Nette\Utils\Json;
use \Symfony\Component\HttpFoundation\Response;
use Illuminate\Database\Eloquent\Builder;

// 猫情報に関して
class CatController extends Controller
{
    /**
     * 猫情報を一括で返却する
     * @return array
     */
    public function index (): Collection
    {
        $cats = Cat::get();
        return $cats;
    }

    /**
     * 検索機能
     * @param Request
     * @return array
     */
    public function search (Request $request)
    {
        // パラメーターを受け取る
        $serch_params = $request->validate([
            // 'cat_sex_id' => 'int',
            // 'cat_type_id' => 'int',
            // 'cat_age_id' => 'int',
            'label_ids' => 'array',
            'label_ids.*' => 'int',
            // 'prefecture_id' => "int"
        ]);
        // 指定したパラメーターの値で絞り込みを１つずつしていく

        // 絞り込み
        // $cats = Cat::all();
        // cat_sex_id / cat_type_id / cat_age_idは「idが1の場合」は絞り込まない
        //  - 理由 : idが1の選択肢は「〇〇を選んでください」となっているため。
        // $cats = request("cat_sex_id") && request("cat_sex_id") > 1 ? $cats->where("cat_sex_id", "=" , $serch_params["cat_sex_id"]) : $cats;
        // $cats = request("cat_type_id") && request("cat_type_id") > 1 ? $cats->where("cat_type_id", "=" , $serch_params["cat_type_id"]) : $cats;
        // $cats = request("cat_age_id") && request("cat_age_id") > 1 ? $cats->where("cat_age_id", "=" , $serch_params["cat_age_id"]) : $cats;
        // 全てのラベルに一致するデータを取得する(and検索)
        // - パラメーターで渡ってきたラベル情報と中間テーブル内のラベル情報に一致する猫データを取得
        $label_ids = request("label_ids");
        $cats = Cat::whereHas('cat_labels', function (Builder $query) use($label_ids){
            $query->whereIn('cat_labels.label_id', $label_ids);
            // $query->where('cat_labels.label_id', $label_id);
            // foreach ($label_ids as $label_id) {
            //     $query->where('cat_labels.label_id', $label_id);
            // }
        })->get();

        // $cats = request("label_ids") && request("cat_age_id") > 1 ? $cats->where("cat_age_id", "=" , $serch_params["cat_age_id"]) : $cats;
        // $cats = request("prefecture_id") && request("prefecture_id") > 1 ? $cats->where("prefecture_id", "=" , $serch_params["prefecture_id"]) : $cats;
        return response()->json(['cats' => $cats],200);
    }
}
