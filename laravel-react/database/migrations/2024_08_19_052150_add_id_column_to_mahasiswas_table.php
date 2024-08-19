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
        Schema::table('mahasiswas', function (Blueprint $table) {
            // Drop the current primary key on `nim`
            $table->dropPrimary(['nim']);
        });

        Schema::table('mahasiswas', function (Blueprint $table) {
            // Add the new `id` column as the primary key
            $table->id()->first();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('mahasiswas', function (Blueprint $table) {
            // Drop the `id` column
            $table->dropColumn('id');
        });

        Schema::table('mahasiswas', function (Blueprint $table) {
            // Re-add the primary key to `nim`
            $table->primary('nim');
        });
    }
};
