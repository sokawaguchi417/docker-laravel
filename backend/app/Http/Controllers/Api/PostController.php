<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    // post一覧表示
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}
