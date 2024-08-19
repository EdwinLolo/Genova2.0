<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;

    protected $table = 'mahasiswas';

    // The primary key is now 'id'
    protected $primaryKey = 'id';

    // Ensure the primary key is auto-incrementing
    public $incrementing = true;

    // Define the fillable fields
    protected $fillable = [
        'nim',
        'namaLengkap',
        'idUser',
        'idLine',
        'ktm',
        'asalKampus',
    ];
}
