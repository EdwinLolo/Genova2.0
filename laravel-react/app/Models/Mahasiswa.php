<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;

    protected $fillable = [
        "nim",
        "namaLengkap",
        "idUser",
        "idLine",
        "ktm",
        "asalKampus"
    ];
    protected $primaryKey = 'nim';
    public $incrementing = false;
    protected $keyType = 'string';
}
