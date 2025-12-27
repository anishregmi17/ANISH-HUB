---
sidebar_position: 4
---

# Performance Optimization

Optimize your Laravel applications for better performance and scalability.

## Caching

### Configuration Cache

```bash
php artisan config:cache
php artisan config:clear
```

### Route Cache

```bash
php artisan route:cache
php artisan route:clear
```

### View Cache

```bash
php artisan view:cache
php artisan view:clear
```

### Application Cache

```php
<?php
// Cache data
Cache::put('key', 'value', 3600);
Cache::remember('users', 3600, function () {
    return User::all();
});

// Retrieve
$value = Cache::get('key');
$value = Cache::get('key', 'default');

// Forget
Cache::forget('key');
Cache::flush();
?>
```

## Query Optimization

```php
<?php
// Eager loading
$posts = Post::with('user', 'comments')->get();

// Lazy eager loading
$posts = Post::all();
$posts->load('user');

// Select specific columns
$users = User::select('id', 'name', 'email')->get();

// Chunking
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // Process user
    }
});

// Cursor (memory efficient)
foreach (User::cursor() as $user) {
    // Process user
}
?>
```

## Database Indexing

```php
<?php
// In migration
Schema::table('users', function (Blueprint $table) {
    $table->index('email');
    $table->index(['status', 'created_at']);
});
?>
```

## Queue Optimization

```php
<?php
// Use queues for heavy operations
dispatch(new SendEmailJob($user));

// Process queues efficiently
php artisan queue:work --tries=3 --timeout=60
?>
```

## OPcache

Enable OPcache in `php.ini`:

```ini
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=10000
```

## Next Steps

Now let's learn about [Service Providers](./service-providers)!

