<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ucare extends Model
{
    use HasFactory;
    protected $fillable = [
        "namaLengkap",
        "umur",
        "tempatTinggal",
        "idLine",
        "instagram",
        "noTelp",
        "nim",
        "jurusan",
        "angkatan",
        "email",
        "isInternal",
    ];
}
