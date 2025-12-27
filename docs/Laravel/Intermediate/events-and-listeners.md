---
sidebar_position: 6
---

# Events and Listeners

Events and listeners provide a simple observer pattern implementation for your application.

## Creating Events

```bash
php artisan make:event UserRegistered
```

```php
<?php
// app/Events/UserRegistered.php
namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserRegistered
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    
    public $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
    }
}
?>
```

## Creating Listeners

```bash
php artisan make:listener SendWelcomeEmail --event=UserRegistered
```

```php
<?php
// app/Listeners/SendWelcomeEmail.php
namespace App\Listeners;

use App\Events\UserRegistered;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendWelcomeEmail implements ShouldQueue
{
    public function handle(UserRegistered $event)
    {
        // Send welcome email to $event->user
        Mail::to($event->user->email)->send(new WelcomeMail($event->user));
    }
}
?>
```

## Registering Events

```php
<?php
// app/Providers/EventServiceProvider.php
protected $listen = [
    UserRegistered::class => [
        SendWelcomeEmail::class,
        LogUserRegistration::class,
    ],
];
?>
```

## Dispatching Events

```php
<?php
use App\Events\UserRegistered;

// Dispatch event
event(new UserRegistered($user));

// Or use helper
UserRegistered::dispatch($user);
?>
```

## Model Events

```php
<?php
// In User model
protected static function booted()
{
    static::created(function ($user) {
        event(new UserRegistered($user));
    });
}
?>
```

## Queued Listeners

```php
<?php
class SendWelcomeEmail implements ShouldQueue
{
    use SerializesModels;
    
    public function handle(UserRegistered $event)
    {
        // This will be queued
    }
}
?>
```

## Next Steps

Now let's learn about [Queues and Jobs](./queues-and-jobs)!

