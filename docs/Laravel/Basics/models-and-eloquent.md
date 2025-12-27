---
sidebar_position: 6
---

# Models and Eloquent

Eloquent is Laravel's ORM (Object-Relational Mapping). It provides an elegant ActiveRecord implementation for working with databases.

## Creating Models

```bash
# Create model
php artisan make:model User

# Create model with migration
php artisan make:model Post -m

# Create model with migration and controller
php artisan make:model Post -mcr
```

## Basic Model

```php
<?php
// app/Models/User.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Table name (optional, defaults to plural of model name)
    protected $table = 'users';
    
    // Primary key (optional, defaults to 'id')
    protected $primaryKey = 'id';
    
    // Timestamps (optional, defaults to true)
    public $timestamps = true;
    
    // Mass assignment protection
    protected $fillable = ['name', 'email', 'password'];
    
    // Or use guarded
    protected $guarded = ['id', 'created_at', 'updated_at'];
}
?>
```

## Retrieving Records

```php
<?php
use App\Models\User;

// Get all users
$users = User::all();

// Get user by ID
$user = User::find(1);

// Get user or fail (404 if not found)
$user = User::findOrFail(1);

// Get first user
$user = User::first();

// Get user by attribute
$user = User::where('email', 'anish@example.com')->first();

// Get multiple users
$users = User::where('active', 1)->get();
?>
```

## Creating Records

```php
<?php
// Method 1: Create
$user = User::create([
    'name' => 'Anish',
    'email' => 'anish@example.com',
    'password' => bcrypt('password'),
]);

// Method 2: New instance
$user = new User();
$user->name = 'Anish';
$user->email = 'anish@example.com';
$user->save();

// Method 3: Mass assignment
$user = User::make([
    'name' => 'Anish',
    'email' => 'anish@example.com',
]);
$user->save();
?>
```

## Updating Records

```php
<?php
// Method 1: Update
$user = User::find(1);
$user->name = 'Anish Regmi';
$user->save();

// Method 2: Mass update
User::where('id', 1)->update(['name' => 'Anish Regmi']);

// Method 3: Update or create
User::updateOrCreate(
    ['email' => 'anish@example.com'],
    ['name' => 'Anish']
);
?>
```

## Deleting Records

```php
<?php
// Method 1: Delete
$user = User::find(1);
$user->delete();

// Method 2: Destroy
User::destroy(1);
User::destroy([1, 2, 3]);

// Method 3: Delete by query
User::where('active', 0)->delete();
?>
```

## Query Builder

```php
<?php
// Where clauses
$users = User::where('age', '>', 18)->get();
$users = User::where('name', 'like', '%Anish%')->get();
$users = User::whereIn('id', [1, 2, 3])->get();

// Multiple where
$users = User::where('active', 1)
             ->where('age', '>', 18)
             ->get();

// Or where
$users = User::where('active', 1)
             ->orWhere('verified', 1)
             ->get();

// Order by
$users = User::orderBy('name', 'asc')->get();
$users = User::latest()->get();  // Order by created_at desc

// Limit
$users = User::take(10)->get();
$users = User::limit(10)->get();

// Pagination
$users = User::paginate(15);
?>
```

## Relationships

### One to Many

```php
<?php
// User model
class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}

// Post model
class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

// Usage
$user = User::find(1);
$posts = $user->posts;

$post = Post::find(1);
$user = $post->user;
?>
```

### Many to Many

```php
<?php
// User model
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}

// Role model
class Role extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}

// Usage
$user = User::find(1);
$user->roles()->attach(1);
$user->roles()->detach(1);
$user->roles()->sync([1, 2, 3]);
?>
```

## Accessors and Mutators

```php
<?php
class User extends Model
{
    // Accessor
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }
    
    // Mutator
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
}

// Usage
$user = User::find(1);
echo $user->full_name;  // Uses accessor

$user->password = 'newpassword';  // Uses mutator
?>
```

## Scopes

```php
<?php
class User extends Model
{
    // Local scope
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
    
    public function scopeOlderThan($query, $age)
    {
        return $query->where('age', '>', $age);
    }
}

// Usage
$activeUsers = User::active()->get();
$seniors = User::olderThan(65)->get();
?>
```

## Next Steps

Now let's learn about [Migrations](./migrations)!

