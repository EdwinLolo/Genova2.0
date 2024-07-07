<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnifyInternal extends Model
{
    use HasFactory;
    protected $fillable = [
        "nama",
        "jurusan",
        "angkatan",
        "noHp",
        "jumlahTiket",
        "email",
        "buktiTf"
    ];
}
