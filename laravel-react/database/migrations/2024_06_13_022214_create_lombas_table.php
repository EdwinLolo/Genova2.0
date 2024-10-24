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
        Schema::create('lombas', function (Blueprint $table) {
            $table->id('id_lomba');
            $table->string("namaLomba");
            $table->string("desc")->nullable(true);
            $table->date("startDate");
            $table->date("endDate");
            $table->integer("besarTeam")->default(5);
            $table->integer("jumlahTeam")->default(10);
            $table->enum("isInternal", ["false", "true"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lombas');
    }
};
