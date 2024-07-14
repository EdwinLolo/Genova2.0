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
                'endDate' => '2024-12-25',
                'besarTeam' => 2,
                'jumlahTeam' => 12,
                'isInternal' => 'true',
            ], [
                'id_lomba' => 2,
                'namaLomba' => 'Badminton Ganda Putra',
                'desc' => 'Deskripsi Badminton Ganda Putra',
                'startDate' => '2024-06-15',
                'endDate' => '2024-12-25',
                'besarTeam' => 2,
                'jumlahTeam' => 12,
                'isInternal' => 'true',
            ],
            [
                'id_lomba' => 3,
                'namaLomba' => 'Voli Putra',
                'desc' => 'Deskripsi Voli Putra',
                'startDate' => '2024-07-01',
                'endDate' => '2024-12-25',
                'besarTeam' => 10,
                'jumlahTeam' => 8,
                'isInternal' => 'false',
            ], [
                'id_lomba' => 4,
                'namaLomba' => 'Voli Putri',
                'desc' => 'Deskripsi Voli Putri',
                'startDate' => '2024-07-01',
                'endDate' => '2024-12-25',
                'besarTeam' => 10,
                'jumlahTeam' => 6,
                'isInternal' => 'false',
            ], [
                'id_lomba' => 5,
                'namaLomba' => 'Basket Internal',
                'desc' => 'Deskripsi Basket Internal',
                'startDate' => '2024-07-01',
                'endDate' => '2024-12-25',
                'besarTeam' => 7,
                'jumlahTeam' => 8,
                'isInternal' => 'true',
            ], [
                'id_lomba' => 6,
                'namaLomba' => 'Basket External',
                'desc' => 'Deskripsi Basket External',
                'startDate' => '2024-07-01',
                'endDate' => '2024-12-25',
                'besarTeam' => 7,
                'jumlahTeam' => 12,
                'isInternal' => 'false',
            ], [
                'id_lomba' => 7,
                'namaLomba' => 'Futsal Internal',
                'desc' => 'Deskripsi Futsal Internal',
                'startDate' => '2024-07-01',
                'endDate' => '2024-12-25',
                'besarTeam' => 12,
                'jumlahTeam' => 8,
                'isInternal' => 'true',
            ], [
                'id_lomba' => 8,
                'namaLomba' => 'Futsal External',
                'desc' => 'Deskripsi Futsal External',
                'startDate' => '2024-07-01',
                'endDate' => '2024-12-25',
                'besarTeam' => 12,
                'jumlahTeam' => 8,
                'isInternal' => 'false',
            ],
        ];

        // Insert data into the 'lombas' table
        DB::table('lombas')->insert($lombas);
    }
}
