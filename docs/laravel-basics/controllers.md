---
sidebar_position: 4
---

# Controllers

Controllers organize your application logic. They handle HTTP requests and return responses.

## Creating Controllers

```bash
# Create controller
php artisan make:controller UserController
```

## Basic Controller

```php
<?php
// app/Http/Controllers/UserController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return view('users.index');
    }
    
    public function show($id)
    {
        $user = User::find($id);
        return view('users.show', compact('user'));
    }
    
    public function create()
    {
        return view('users.create');
    }
    
    public function store(Request $request)
    {
        // Validate and store
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
        ]);
        
        $user = User::create($validated);
        return redirect()->route('users.show', $user);
    }
}
?>
```

## Resource Controllers

```bash
# Create resource controller
php artisan make:controller PostController --resource
```

```php
<?php
// app/Http/Controllers/PostController.php
namespace App\Http\Controllers;

class PostController extends Controller
{
    public function index()      // GET /posts
    {
        $posts = Post::all();
        return view('posts.index', compact('posts'));
    }
    
    public function create()    // GET /posts/create
    {
        return view('posts.create');
    }
    
    public function store(Request $request)  // POST /posts
    {
        // Store new post
    }
    
    public function show($id)   // GET /posts/{id}
    {
        $post = Post::findOrFail($id);
        return view('posts.show', compact('post'));
    }
    
    public function edit($id)   // GET /posts/{id}/edit
    {
        $post = Post::findOrFail($id);
        return view('posts.edit', compact('post'));
    }
    
    public function update(Request $request, $id)  // PUT/PATCH /posts/{id}
    {
        // Update post
    }
    
    public function destroy($id)  // DELETE /posts/{id}
    {
        // Delete post
    }
}
?>
```

## Route to Controller

```php
<?php
// routes/web.php
use App\Http\Controllers\UserController;

// Single action
Route::get('/user', [UserController::class, 'index']);

// Resource routes
Route::resource('posts', PostController::class);

// Partial resource routes
Route::resource('posts', PostController::class)->only([
    'index', 'show'
]);

Route::resource('posts', PostController::class)->except([
    'create', 'store', 'update', 'destroy'
]);
?>
```

## Dependency Injection

```php
<?php
namespace App\Http\Controllers;

use App\Services\UserService;

class UserController extends Controller
{
    protected $userService;
    
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    
    public function index()
    {
        $users = $this->userService->getAllUsers();
        return view('users.index', compact('users'));
    }
}
?>
```

## Request Validation

```php
<?php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed',
    ]);
    
    // $validated contains only validated data
    $user = User::create($validated);
    
    return redirect()->route('users.index');
}
?>
```

## Response Types

```php
<?php
public function index()
{
    // Return view
    return view('users.index');
    
    // Return JSON
    return response()->json(['users' => $users]);
    
    // Return with status code
    return response()->json(['message' => 'Created'], 201);
    
    // Redirect
    return redirect()->route('users.index');
    
    // Redirect back
    return back();
    
    // Redirect with data
    return redirect()->route('users.index')
                     ->with('success', 'User created!');
}
?>
```

## Middleware in Controllers

```php
<?php
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('log')->only('index');
        $this->middleware('subscribed')->except('store');
    }
}
?>
```

## Next Steps

Now let's learn about [Views and Blade](./views-and-blade)!

