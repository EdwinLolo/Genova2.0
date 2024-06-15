<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mahasiswas', function (Blueprint $table) {
            $table->string("nim", 11)->unique()->nullable(false);
            $table->string("namaLengkap");
            $table->string("idUser")->nullable(true);
            $table->string("idLine");
            $table->string("ktm");
            $table->timestamps();

            $table->primary(['nim']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswas');
    }
};
