---
sidebar_position: 3
---

# Routing

Routes define the entry points to your application. Laravel provides a simple and elegant routing system.

## Basic Routes

Define routes in `routes/web.php`:

```php
<?php
use Illuminate\Support\Facades\Route;

// Simple route
Route::get('/', function () {
    return 'Hello, World!';
});

// Route with parameter
Route::get('/user/{id}', function ($id) {
    return "User ID: $id";
});

// Multiple parameters
Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
    return "Post: $postId, Comment: $commentId";
});
?>
```

## Route Methods

```php
<?php
Route::get('/users', function () {
    // Handle GET request
});

Route::post('/users', function () {
    // Handle POST request
});

Route::put('/users/{id}', function ($id) {
    // Handle PUT request
});

Route::patch('/users/{id}', function ($id) {
    // Handle PATCH request
});

Route::delete('/users/{id}', function ($id) {
    // Handle DELETE request
});

// Match multiple methods
Route::match(['get', 'post'], '/users', function () {
    // Handle GET or POST
});

// Any method
Route::any('/users', function () {
    // Handle any HTTP method
});
?>
```

## Route Parameters

```php
<?php
// Required parameter
Route::get('/user/{id}', function ($id) {
    return $id;
});

// Optional parameter
Route::get('/user/{name?}', function ($name = 'Guest') {
    return "Hello, $name";
});

// Parameter constraints
Route::get('/user/{id}', function ($id) {
    return $id;
})->where('id', '[0-9]+');

// Multiple constraints
Route::get('/user/{id}/{name}', function ($id, $name) {
    return "ID: $id, Name: $name";
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
?>
```

## Named Routes

```php
<?php
Route::get('/user/profile', function () {
    return 'Profile';
})->name('profile');

// Generate URL
$url = route('profile');

// Redirect to named route
return redirect()->route('profile');
?>
```

## Route Groups

```php
<?php
// Prefix
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        return 'Admin Users';
    });
    Route::get('/posts', function () {
        return 'Admin Posts';
    });
});

// Middleware
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return 'Dashboard';
    });
});

// Namespace
Route::namespace('Admin')->group(function () {
    Route::get('/users', 'UserController@index');
});
?>
```

## Route Model Binding

```php
<?php
// Implicit binding
Route::get('/user/{user}', function (User $user) {
    return $user;
});

// Explicit binding (in RouteServiceProvider)
Route::bind('user', function ($value) {
    return User::where('username', $value)->firstOrFail();
});
?>
```

## Route Caching

```bash
# Cache routes for better performance
php artisan route:cache

# Clear route cache
php artisan route:clear

# List all routes
php artisan route:list
```

## API Routes

Define API routes in `routes/api.php`:

```php
<?php
Route::get('/users', function () {
    return User::all();
});

Route::post('/users', function (Request $request) {
    // Create user
});
?>
```

## Next Steps

Now let's learn about [Controllers](./controllers)!

