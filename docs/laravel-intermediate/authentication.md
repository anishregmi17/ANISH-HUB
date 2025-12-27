---
sidebar_position: 3
---

# Authentication

Laravel provides a complete authentication system out of the box.

## Installation

```bash
# Install Laravel Breeze (simple)
composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run dev

# Or Laravel Jetstream (full-featured)
composer require laravel/jetstream
php artisan jetstream:install livewire
```

## Manual Authentication

```php
<?php
use Illuminate\Support\Facades\Auth;

// Login
if (Auth::attempt(['email' => $email, 'password' => $password])) {
    // Authentication successful
    return redirect()->intended('dashboard');
}

// Login with remember me
Auth::attempt(['email' => $email, 'password' => $password], $remember = true);

// Check if authenticated
if (Auth::check()) {
    $user = Auth::user();
}

// Get authenticated user
$user = Auth::user();

// Logout
Auth::logout();
?>
```

## Protecting Routes

```php
<?php
// routes/web.php
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    });
});

// Or use auth middleware directly
Route::get('/profile', function () {
    // User must be authenticated
})->middleware('auth');
?>
```

## Authentication Guard

```php
<?php
// Default guard
Auth::guard('web')->attempt($credentials);

// API guard
Auth::guard('api')->attempt($credentials);

// Custom guard
'guards' => [
    'admin' => [
        'driver' => 'session',
        'provider' => 'admins',
    ],
],
?>
```

## Authorization

### Policies

```bash
php artisan make:policy PostPolicy --model=Post
```

```php
<?php
// app/Policies/PostPolicy.php
class PostPolicy
{
    public function update(User $user, Post $post)
    {
        return $user->id === $post->user_id;
    }
    
    public function delete(User $user, Post $post)
    {
        return $user->id === $post->user_id || $user->isAdmin();
    }
}

// Usage in controller
public function update(Request $request, Post $post)
{
    $this->authorize('update', $post);
    // Update post
}

// Usage in Blade
@can('update', $post)
    <a href="/posts/{{ $post->id }}/edit">Edit</a>
@endcan
?>
```

### Gates

```php
<?php
// In AuthServiceProvider
Gate::define('update-post', function (User $user, Post $post) {
    return $user->id === $post->user_id;
});

// Usage
if (Gate::allows('update-post', $post)) {
    // Update post
}

// In Blade
@can('update-post', $post)
    <a href="/posts/{{ $post->id }}/edit">Edit</a>
@endcan
?>
```

## Password Reset

```php
<?php
use Illuminate\Support\Facades\Password;

// Send password reset link
$status = Password::sendResetLink(
    $request->only('email')
);

// Reset password
$status = Password::reset(
    $request->only('email', 'password', 'password_confirmation', 'token'),
    function ($user, $password) {
        $user->forceFill([
            'password' => Hash::make($password)
        ])->save();
    }
);
?>
```

## Next Steps

Now let's learn about [Middleware](./middleware)!

