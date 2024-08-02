<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unify extends Model
{
    use HasFactory;
    protected $fillable = [
        "nama",
        "jurusan",
        "angkatan",
        "noHp",
        "jumlahTiket",
        "email",
        "total_price",
        "buktiTf",
        "status",
        "udahDiambil",
        "isInternal",
    ];
}
