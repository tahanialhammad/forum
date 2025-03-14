<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Marketing;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    // Display the homepage with the latest posts, topics, and marketings
    public function index()
    {
        // Fetch the latest 3 posts from the database
        $posts = Post::latest()
            ->take(3)
            ->get();

        // Fetch the top 6 topics from the database
        $topics = Topic::take(6)->get();
        // Fetch the top 6 marketing entries from the database
        $marketings = Marketing::take(6)->get();

        return inertia('Home/Welcome', [
            'posts' => PostResource::collection($posts),
            'topics' => $topics,
            'marketings' => $marketings
        ]);
    }
}
