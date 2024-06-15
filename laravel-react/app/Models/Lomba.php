<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lomba extends Model
{
    use HasFactory;

    protected $fillable = [
        "id_lomba",
        "namaLomba",
        "desc",
        "startDate",
        "endDate",
        "besarTeam",
        "jumlahTeam",
    ];
}
