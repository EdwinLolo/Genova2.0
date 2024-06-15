<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LombaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lombas = [
            [
                'id_lomba' => 1,
                'namaLomba' => 'Badminton Ganda Campuran',
                'desc' => 'Deskripsi Badminton Ganda Campuran',
                'startDate' => '2024-06-15',
                'endDate' => '2024-06-20',
                'besarTeam' => 2,
                'jumlahTeam' => 12,
            ], [
                'id_lomba' => 2,
                'namaLomba' => 'Badminton Ganda Putra',
                'desc' => 'Deskripsi Badminton Ganda Putra',
                'startDate' => '2024-06-15',
                'endDate' => '2024-06-20',
                'besarTeam' => 2,
                'jumlahTeam' => 12,
            ],
            [
                'id_lomba' => 3,
                'namaLomba' => 'Badminton Solo',
                'desc' => 'Deskripsi Badminton Solo',
                'startDate' => '2024-07-01',
                'endDate' => '2024-07-05',
                'besarTeam' => 1,
                'jumlahTeam' => 12,
            ], [
                'id_lomba' => 4,
                'namaLomba' => 'Voli',
                'desc' => 'Deskripsi Voli',
                'startDate' => '2024-07-01',
                'endDate' => '2024-07-05',
                'besarTeam' => 10,
                'jumlahTeam' => 12,
            ], [
                'id_lomba' => 5,
                'namaLomba' => 'Basket',
                'desc' => 'Deskripsi Basket',
                'startDate' => '2024-07-01',
                'endDate' => '2024-07-05',
                'besarTeam' => 7,
                'jumlahTeam' => 12,
            ], [
                'id_lomba' => 6,
                'namaLomba' => 'Futsal',
                'desc' => 'Deskripsi Futsal',
                'startDate' => '2024-07-01',
                'endDate' => '2024-07-05',
                'besarTeam' => 12,
                'jumlahTeam' => 12,
            ],

        ];

        // Insert data into the 'lombas' table
        DB::table('lombas')->insert($lombas);
    }
}
