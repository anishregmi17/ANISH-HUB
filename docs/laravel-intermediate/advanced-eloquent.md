---
sidebar_position: 2
---

# Advanced Eloquent

Learn advanced Eloquent features for complex queries and relationships.

## Eager Loading

Prevent N+1 query problems:

```php
<?php
// ❌ BAD - N+1 queries
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->user->name;  // Query for each post
}

// ✅ GOOD - Eager loading
$posts = Post::with('user')->get();
foreach ($posts as $post) {
    echo $post->user->name;  // No additional queries
}

// Multiple relationships
$posts = Post::with(['user', 'comments', 'tags'])->get();

// Nested eager loading
$posts = Post::with('comments.user')->get();
?>
```

## Lazy Eager Loading

```php
<?php
$posts = Post::all();
$posts->load('user', 'comments');
?>
```

## Constraining Eager Loads

```php
<?php
$posts = Post::with(['comments' => function ($query) {
    $query->where('approved', 1);
}])->get();
?>
```

## Advanced Relationships

### Polymorphic Relationships

```php
<?php
// Image model
class Image extends Model
{
    public function imageable()
    {
        return $this->morphTo();
    }
}

// Post model
class Post extends Model
{
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}

// User model
class User extends Model
{
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}

// Usage
$post = Post::find(1);
$image = $post->image;

$user = User::find(1);
$image = $user->image;
?>
```

### Many-to-Many Polymorphic

```php
<?php
// Tag model
class Tag extends Model
{
    public function posts()
    {
        return $this->morphedByMany(Post::class, 'taggable');
    }
    
    public function videos()
    {
        return $this->morphedByMany(Video::class, 'taggable');
    }
}

// Post model
class Post extends Model
{
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
?>
```

## Query Scopes

### Global Scopes

```php
<?php
class ActiveScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        $builder->where('active', 1);
    }
}

class User extends Model
{
    protected static function booted()
    {
        static::addGlobalScope(new ActiveScope);
    }
}

// Remove global scope
User::withoutGlobalScope(ActiveScope::class)->get();
?>
```

## Collections

```php
<?php
$users = User::all();

// Filter
$activeUsers = $users->filter(function ($user) {
    return $user->active;
});

// Map
$names = $users->map(function ($user) {
    return $user->name;
});

// Reduce
$total = $users->reduce(function ($carry, $user) {
    return $carry + $user->balance;
}, 0);

// Chunk
$users->chunk(100)->each(function ($chunk) {
    // Process chunk
});
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
    public function setEmailAttribute($value)
    {
        $this->attributes['email'] = strtolower($value);
    }
    
    // Date mutator
    protected $dates = ['birthday'];
    
    // Cast
    protected $casts = [
        'is_admin' => 'boolean',
        'metadata' => 'array',
        'price' => 'decimal:2',
    ];
}
?>
```

## Model Events

```php
<?php
class User extends Model
{
    protected static function booted()
    {
        static::creating(function ($user) {
            $user->api_token = Str::random(60);
        });
        
        static::created(function ($user) {
            // Send welcome email
        });
        
        static::updating(function ($user) {
            // Log changes
        });
    }
}
?>
```

## Next Steps

Now let's learn about [Authentication](./authentication)!

