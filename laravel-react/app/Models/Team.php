<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
    protected $fillable = [
        "id_team",
        "namaTeam",
        "id_lomba",
        "tglDaftar",
        "buktiTF"
    ];
    protected $primaryKey = 'id_team';
    public $incrementing = true;
}
