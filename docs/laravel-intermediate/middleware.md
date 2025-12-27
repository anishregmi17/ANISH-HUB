---
sidebar_position: 4
---

# Middleware

Middleware provides a mechanism for filtering HTTP requests entering your application.

## Creating Middleware

```bash
php artisan make:middleware CheckAge
```

## Middleware Structure

```php
<?php
// app/Http/Middleware/CheckAge.php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAge
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->age <= 18) {
            return redirect('home');
        }
        
        return $next($request);
    }
}
?>
```

## Registering Middleware

```php
<?php
// app/Http/Kernel.php
protected $middlewareGroups = [
    'web' => [
        // ...
        \App\Http\Middleware\CheckAge::class,
    ],
    
    'api' => [
        // ...
    ],
];

// Route middleware
protected $routeMiddleware = [
    'age' => \App\Http\Middleware\CheckAge::class,
];
?>
```

## Using Middleware

```php
<?php
// In routes
Route::get('admin', function () {
    //
})->middleware('auth');

// Multiple middleware
Route::get('admin', function () {
    //
})->middleware(['auth', 'age']);

// In controller
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

## Middleware Parameters

```php
<?php
class CheckRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        if (! $request->user()->hasRole($role)) {
            return redirect('home');
        }
        
        return $next($request);
    }
}

// Usage
Route::get('admin', function () {
    //
})->middleware('role:admin');
?>
```

## Terminating Middleware

```php
<?php
class TerminatingMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
    }
    
    public function terminate($request, $response)
    {
        // Perform actions after response is sent
        Log::info('Request completed');
    }
}
?>
```

## Next Steps

Now let's learn about [Validation](./validation)!

