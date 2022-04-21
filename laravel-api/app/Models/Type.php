<?php

namespace App\Models;


enum Type: Int
{
  case INITIALVALUE = 1;
  case WHITE = 2;
  case BLACK = 3;
  case BROWN = 4;
  case OTHERS = 5;
  public function name(): string
    {
        return match($this) {
            Type::INITIALVALUE => '雑種(キジ白)',
            Type::WHITE => '雑種(キジ白)',
            Type::BLACK => '雑種(キジ白)',
            Type::BROWN => '雑種(キジ白)',
            Type::OTHERS => '雑種(キジ白)',
        };
    }
}
