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
        Schema::table('unifies', function (Blueprint $table) {
            $table->string('noHp', 13)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('unifies', function (Blueprint $table) {
            $table->string('noHp', 12)->change();
        });
    }
};
