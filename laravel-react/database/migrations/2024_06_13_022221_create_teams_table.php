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
        Schema::create('teams', function (Blueprint $table) {
            $table->id('id_team');
            $table->string('namaTeam');
            $table->foreignId('id_lomba')->unsigned(); // Ensure it matches the unsigned type in 'lombas'
            $table->timestamp('tglDaftar')->useCurrent();
            $table->string('buktiTF');
            $table->timestamps();

            // Define foreign key constraint
            $table->foreign('id_lomba')->references('id_lomba')->on('lombas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
