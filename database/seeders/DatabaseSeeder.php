<?php

namespace Database\Seeders;

use App\Models\Like;
use App\Models\Post;
use App\Models\Topic;
use App\Models\User;
use App\Models\Comment;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //Creat topic first
        $this->call(TopicSeeder::class);
        $topics = Topic::all();

        $users = User::factory(10)->create();

        $posts = Post::factory(20)
        ->has(Comment::factory(15)->recycle($users))
        ->recycle([$users, $topics])
        ->create();



        User::factory()
       ->has(Post::factory(5)->recycle($topics))
        ->has(Comment::factory(20)->recycle($posts))
        ->has(Like::factory()->forEachSequence(
            ...$posts->random(15)->map(fn (Post $post) => ['likeable_id' => $post]),
        ))
        ->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'is_admin' =>true,

        ]);
    }
}
