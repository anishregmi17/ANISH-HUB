---
sidebar_position: 7
---

# Queues and Jobs

Queues allow you to defer time-consuming tasks, such as sending emails, until a later time.

## Creating Jobs

```bash
php artisan make:job SendEmail
```

```php
<?php
// app/Jobs/SendEmail.php
namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $user;
    
    public function __construct($user)
    {
        $this->user = $user;
    }
    
    public function handle()
    {
        // Send email
        Mail::to($this->user->email)->send(new WelcomeMail($this->user));
    }
}
?>
```

## Dispatching Jobs

```php
<?php
use App\Jobs\SendEmail;

// Dispatch immediately
SendEmail::dispatch($user);

// Dispatch with delay
SendEmail::dispatch($user)->delay(now()->addMinutes(10));

// Dispatch to specific queue
SendEmail::dispatch($user)->onQueue('emails');

// Dispatch synchronously (for testing)
SendEmail::dispatchSync($user);
?>
```

## Queue Configuration

```env
QUEUE_CONNECTION=database
```

## Database Queue Table

```bash
php artisan queue:table
php artisan migrate
```

## Running Queue Worker

```bash
# Process jobs
php artisan queue:work

# Process specific queue
php artisan queue:work --queue=emails

# Process with timeout
php artisan queue:work --timeout=60
```

## Failed Jobs

```bash
# Create failed jobs table
php artisan queue:failed-table
php artisan migrate

# Retry failed job
php artisan queue:retry {id}

# Retry all failed jobs
php artisan queue:retry all

# Clear failed jobs
php artisan queue:flush
?>
```

## Job Middleware

```php
<?php
class SendEmail implements ShouldQueue
{
    public function middleware()
    {
        return [new RateLimited];
    }
}
?>
```

## Next Steps

Now let's learn about [Mail](./mail)!

