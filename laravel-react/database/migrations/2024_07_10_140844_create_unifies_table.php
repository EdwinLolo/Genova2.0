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
        Schema::create('unifies', function (Blueprint $table) {
            $table->id();
            $table->string("nama");
            $table->string("jurusan")->nullable();
            $table->string("angkatan")->nullable();
            $table->string("noHp", 12);
            $table->string("email");
            $table->string("buktiTf");
            $table->integer("jumlahTiket");
            $table->bigInteger("total_price");
            $table->enum("status", ["unchecked", "checked"]);
            $table->enum("udahDiambil", ["unchecked", "checked"]);
            $table->enum("isInternal", ["false", "true"]);
            $table->string("kodeRef")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('unifies');
    }
};
