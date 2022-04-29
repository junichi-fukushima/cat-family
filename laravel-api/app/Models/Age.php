<?php

namespace App\Models;


enum Age: Int
{
  case INITIALVALUE = 1;
  case ONE = 2;
  case FIVE = 3;
  case TEN = 4;
  case ELEVEN = 5;
  public function name(): string
  {
      return match($this) {
          Age::INITIALVALUE => '年齢を選択',
          Age::ONE => '〜1歳',
          Age::FIVE => '〜5歳',
          Age::TEN => '〜10歳',
          Age::ELEVEN => '〜11歳以上',
      };
  }
}