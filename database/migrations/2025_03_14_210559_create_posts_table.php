<?php

use App\Models\User;
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
        if (!Schema::hasTable('posts')) {

            Schema::create('posts', function (Blueprint $table) {
                $table->id();
                $table->foreignIdFor(User::class)->constrained()->restrictOnDelete();
                $table->string('title');
                $table->longText('body');
                $table->longText('html');
                $table->string('image')->nullable();
                $table->unsignedBigInteger('likes_count')->default(0);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
