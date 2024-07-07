<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnifyExternal extends Model
{
    use HasFactory;
    protected $fillable = [
        "nama",
        "noHp",
        "jumlahTiket",
        "email",
        "buktiTf"
    ];
}
