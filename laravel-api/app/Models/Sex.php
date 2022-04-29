<?php

namespace App\Models;


enum Sex: Int
{
  case INITIALVALUE = 1;
  case BOY = 2;
  case GIRL = 3;
  public function name(): string
    {
        return match($this) {
            Sex::INITIALVALUE => '性別を選択',
            Sex::BOY => '男の子',
            Sex::GIRL => '女の子',
        };
    }
}