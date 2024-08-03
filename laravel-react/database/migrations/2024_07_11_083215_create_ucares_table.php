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
        Schema::create('ucares', function (Blueprint $table) {
            $table->id();
            $table->string("namaLengkap");
            $table->string("umur");
            $table->string("tempatTinggal");
            $table->string("idLine");
            $table->string("instagram");
            $table->string("noTelp", 12);
            $table->string("nim", 11)->nullable();
            $table->string("jurusan")->nullable();
            $table->string("angkatan")->nullable();
            $table->string("email")->nullable();
            $table->enum("isInternal", ["false", "true"]);
            $table->string("docs")->nullable();
            $table->string("asalKampus")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ucares');
    }
};
