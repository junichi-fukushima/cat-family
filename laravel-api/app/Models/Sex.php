<?php

namespace App\Models;


enum Sex: Int
{
  case 性別を選択 = 1;
  case 男の子 = 2;
  case 女の子 = 3;
}