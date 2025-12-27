---
sidebar_position: 7
---

# Package Development

Learn how to create reusable Laravel packages.

## Package Structure

```
my-package/
├── src/
│   ├── MyPackageServiceProvider.php
│   ├── Facades/
│   └── Services/
├── routes/
├── resources/
├── tests/
├── composer.json
└── README.md
```

## Service Provider

```php
<?php
// src/MyPackageServiceProvider.php
namespace Vendor\MyPackage;

use Illuminate\Support\ServiceProvider;

class MyPackageServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'mypackage');
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        
        $this->publishes([
            __DIR__.'/../config/mypackage.php' => config_path('mypackage.php'),
        ], 'config');
    }
    
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/mypackage.php', 'mypackage'
        );
    }
}
?>
```

## Composer.json

```json
{
    "name": "vendor/my-package",
    "type": "library",
    "autoload": {
        "psr-4": {
            "Vendor\\MyPackage\\": "src/"
        }
    },
    "extra": {
        "laravel": {
            "providers": [
                "Vendor\\MyPackage\\MyPackageServiceProvider"
            ]
        }
    }
}
```

## Next Steps

Now let's learn about [Deployment](./deployment)!

