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
        Schema::create('unify_externals', function (Blueprint $table) {
            $table->id();
            $table->string("nama");
            $table->string("noHp", 12);
            $table->string("buktiTf");
            $table->string("email");
            $table->integer("jumlahTiket");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('unify_externals');
    }
};
