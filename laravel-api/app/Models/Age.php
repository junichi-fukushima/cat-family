<?php

namespace App\Models;


enum Age: Int
{
  case 年齢を選択 = 1;
  case 〜1歳 = 2;
  case 〜5歳 = 3;
  case 〜10歳 = 4;
  case 〜11歳以上 = 5;
}