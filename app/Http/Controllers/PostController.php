<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //post home
        $myPosts = Post::all();
        $posts = Post::latest()->paginate(5);
        return inertia("Posts/Index" , compact('myPosts' , "posts"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return inertia("Posts/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //insert new post
        sleep(2);
        $fields = $request->validate([
            'body' => ['required']
        ]);
        Post::create($fields);
           return redirect("/posts"); ; 
        //return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }


    //getting post for id
    public function getPost($id){
        $post = Post::findOrFail($id);
        return inertia("Posts/Show" , compact('post'));
    }
}
