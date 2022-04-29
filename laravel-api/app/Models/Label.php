<?php

namespace App\Models;

enum Label: Int
{
  case ALONE = 1;
  case OLD = 2;
  case AIDS = 3;
  case KYOSEI = 4;
  case BEFORECAT = 5;
  public function name(): string
  {
      return match($this) {
          Label::ALONE => '単身者可',
          Label::OLD => '高齢者可',
          Label::AIDS => 'エイズ陰性',
          Label::KYOSEI => '去勢済み',
          Label::BEFORECAT => '先住猫可',
      };
  }
}