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
            Type::INITIALVALUE => '猫種を選択',
            Type::WHITE => '雑種(キジ白)',
            Type::BLACK => '雑種(黒猫)',
            Type::BROWN => '雑種(茶猫)',
            Type::OTHERS => 'その他',
        };
    }
}
