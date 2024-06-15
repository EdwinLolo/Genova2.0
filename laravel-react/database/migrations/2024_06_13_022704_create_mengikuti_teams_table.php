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
        Schema::create('mengikuti_teams', function (Blueprint $table) {
            // Define foreign keys referencing 'mahasiswas' and 'teams' tables
            $table->string('nim', 11); // Assuming 'nim' is a string type in 'mahasiswas'
            $table->foreign('nim')->references('nim')->on('mahasiswas')->onDelete('cascade');

            $table->foreignId('id_team')->references('id_team')->on('teams')->onDelete('cascade');

            // Other columns
            $table->timestamp('tglDaftar');
            $table->string('buktiTF')->nullable();
            $table->timestamps();

            // Define composite primary key
            $table->primary(['nim', 'id_team']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mengikuti_teams');
    }
};
