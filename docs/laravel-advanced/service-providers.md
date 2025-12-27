---
sidebar_position: 5
---

# Service Providers

Service providers are the central place of all Laravel application bootstrapping.

## Creating Service Providers

```bash
php artisan make:provider CustomServiceProvider
```

## Service Provider Structure

```php
<?php
// app/Providers/CustomServiceProvider.php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class CustomServiceProvider extends ServiceProvider
{
    public function register()
    {
        // Register services
        $this->app->singleton('custom', function ($app) {
            return new CustomService();
        });
    }
    
    public function boot()
    {
        // Boot services
        view()->composer('*', function ($view) {
            $view->with('currentUser', auth()->user());
        });
    }
}
?>
```

## Registering Service Providers

```php
<?php
// config/app.php
'providers' => [
    // ...
    App\Providers\CustomServiceProvider::class,
],
?>
```

## Binding Services

```php
<?php
// Simple binding
$this->app->bind('custom', function ($app) {
    return new CustomService();
});

// Singleton
$this->app->singleton('custom', function ($app) {
    return new CustomService();
});

// Instance
$this->app->instance('custom', new CustomService());
?>
```

## Next Steps

Now let's learn about [Facades](./facades)!

