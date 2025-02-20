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
        Schema::create('seminars', function (Blueprint $table) {
            $table->id();
            $table->string('topic');
            $table->date('date');
            $table->string('speaker');
            $table->string('issuer');
            $table->text('about_the_speaker');
            $table->text('description');
            $table->text('about_this_seminar');
            $table->string('speaker_image');
            $table->string('certificate_logo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seminars');
    }
};
