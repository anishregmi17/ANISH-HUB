---
sidebar_position: 9
---

# Notifications

Laravel's notification system provides a simple way to send notifications across multiple channels.

## Creating Notifications

```bash
php artisan make:notification InvoicePaid
```

```php
<?php
// app/Notifications/InvoicePaid.php
namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class InvoicePaid extends Notification
{
    use Queueable;
    
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }
    
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Invoice Paid')
                    ->line('Your invoice has been paid.')
                    ->action('View Invoice', url('/invoices/' . $this->invoice->id))
                    ->line('Thank you for using our application!');
    }
    
    public function toArray($notifiable)
    {
        return [
            'invoice_id' => $this->invoice->id,
            'amount' => $this->invoice->amount,
        ];
    }
}
?>
```

## Sending Notifications

```php
<?php
use App\Notifications\InvoicePaid;

// Send to user
$user->notify(new InvoicePaid($invoice));

// Send to multiple users
Notification::send($users, new InvoicePaid($invoice));
?>
```

## Notification Channels

```php
<?php
public function via($notifiable)
{
    return ['mail', 'database', 'broadcast', 'slack'];
}
?>
```

## Database Notifications

```bash
php artisan notifications:table
php artisan migrate
```

```php
<?php
// In User model
use Illuminate\Notifications\Notifiable;

class User extends Model
{
    use Notifiable;
}

// Retrieve notifications
$notifications = $user->notifications;
$unreadNotifications = $user->unreadNotifications;

// Mark as read
$notification->markAsRead();
$user->unreadNotifications->markAsRead();
?>
```

## Next Steps

Congratulations! You've completed Laravel Intermediate. Now let's move to [Laravel Advanced](./../laravel-advanced/introduction)!

