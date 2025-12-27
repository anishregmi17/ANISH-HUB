---
sidebar_position: 2
---

# API Development

Learn how to build robust RESTful APIs with Laravel.

## API Resources

```bash
php artisan make:resource UserResource
```

```php
<?php
// app/Http/Resources/UserResource.php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}

// Usage
return new UserResource($user);
return UserResource::collection($users);
?>
```

## API Controllers

```php
<?php
// app/Http/Controllers/API/UserController.php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate(15);
        return UserResource::collection($users);
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);
        
        $user = User::create($validated);
        return new UserResource($user);
    }
    
    public function show(User $user)
    {
        return new UserResource($user);
    }
    
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $user->id,
        ]);
        
        $user->update($validated);
        return new UserResource($user);
    }
    
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
?>
```

## API Authentication (Sanctum)

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

```php
<?php
// In User model
use Laravel\Sanctum\HasApiTokens;

class User extends Model
{
    use HasApiTokens;
}

// Create token
$token = $user->createToken('api-token')->plainTextToken;

// Authenticate request
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
?>
```

## API Rate Limiting

```php
<?php
// In RouteServiceProvider
RateLimiter::for('api', function (Request $request) {
    return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
});

// In routes/api.php
Route::middleware(['throttle:api'])->group(function () {
    Route::get('/users', [UserController::class, 'index']);
});
?>
```

## API Versioning

```php
<?php
// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('users', UserController::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('users', V2\UserController::class);
});
?>
```

## CORS Configuration

```php
<?php
// config/cors.php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:3000'],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
?>
```

## API Documentation (Laravel API Documentation)

```bash
composer require darkaonline/l5-swagger
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

## Next Steps

Now let's learn about [Testing](./testing)!

