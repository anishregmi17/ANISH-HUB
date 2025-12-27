---
sidebar_position: 6
---

# Facades

Facades provide a static interface to classes in the service container.

## Using Facades

```php
<?php
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

// Cache facade
Cache::put('key', 'value', 3600);
$value = Cache::get('key');

// DB facade
$users = DB::table('users')->get();

// Mail facade
Mail::to($user->email)->send(new WelcomeMail);
?>
```

## Creating Custom Facades

```php
<?php
// app/Services/CustomService.php
namespace App\Services;

class CustomService
{
    public function doSomething()
    {
        return 'Something done';
    }
}

// app/Facades/CustomFacade.php
namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class CustomFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'custom';
    }
}

// Register in service provider
$this->app->singleton('custom', function () {
    return new \App\Services\CustomService();
});

// Use facade
use App\Facades\CustomFacade;

CustomFacade::doSomething();
?>
```

## Next Steps

Now let's learn about [Package Development](./package-development)!

