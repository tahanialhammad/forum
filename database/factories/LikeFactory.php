<?php

namespace Database\Factories;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Like>
 */
class LikeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $likeable = $this->getRandomLikeable();

        return [
            //   'user_id' => User::factory(),
               'user_id' => User::factory(['email' => 'test+' . Str::uuid() . '@example.com']),
   
              // 'likeable_type' => $this->likeableType(...), //using cluser to accepet array 'likeable_type' => Post::class
               'likeable_id' => Post::factory(),
               'likeable_type' => (new $likeable)->getMorphClass(),

           ];
    }

    protected function getRandomLikeable()
    {
        return fake()->randomElement([Post::class, Comment::class]);
    }
}
