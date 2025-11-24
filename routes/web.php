<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request ;
use App\Http\Controllers\PostController ;



Route::get('/', function () {
    sleep(3); // Simulate a delay for demonstration purposes
    return Inertia::render('Home' ,[
        'message' => 'Hello from Inertia with React!',
    ]);
});

Route::get('/about', function () {
    sleep(2); // Simulate a delay for demonstration purposes
    return Inertia::render('About/index', [
        'info' => 'This is the about page served with Inertia and React.',
    ]);
});

Route::post('/about', function (Request $request) {
    // Here you would normally handle validation / save data
    $info = $request->input('info');
 //   dd($request->all());
    return back()->with([
        'success', 'Form submitted successfully!',
        'infoSubmitted' => $info]);
});

//create post routes
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::resource('posts', PostController::class)->except("index");
Route::get('/post/{id}', [PostController::class, 'getPost'])->name('posts.get');


///jobs
Route::prefix('jobs')->group(function () {
    Route::get('/', [App\Http\Controllers\JobsController::class, 'index'])->name('jobs.index');
    Route::get("/{id}", [App\Http\Controllers\JobsController::class, "show"])->name("jobs.show");
    Route::get("/edit/{id}", [App\Http\Controllers\JobsController::class, "edit"])->name("jobs.update");
    Route::post("/update/{id}", [App\Http\Controllers\JobsController::class, "update"])->name("jobs.edit");
});

Route::prefix('rickandmorty')->group(function () {
    Route::get('/', [App\Http\Controllers\RickAndMortyController::class, 'index'])->name('rickandmorty.index');
});