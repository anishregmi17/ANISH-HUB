---
sidebar_position: 8
---

# Mail

Laravel provides a clean, simple API for sending emails using various mail drivers.

## Creating Mailable

```bash
php artisan make:mail WelcomeMail
```

```php
<?php
// app/Mail/WelcomeMail.php
namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;
    
    public $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    
    public function build()
    {
        return $this->subject('Welcome to Our Site')
                    ->view('emails.welcome')
                    ->with(['user' => $this->user]);
    }
}
?>
```

## Sending Mail

```php
<?php
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;

// Send to single user
Mail::to($user->email)->send(new WelcomeMail($user));

// Send to multiple users
Mail::to($user->email)
    ->cc($admin->email)
    ->bcc($manager->email)
    ->send(new WelcomeMail($user));

// Queue mail
Mail::to($user->email)->queue(new WelcomeMail($user));
?>
```

## Mail Views

```blade
{{-- resources/views/emails/welcome.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome, {{ $user->name }}!</h1>
    <p>Thank you for joining us.</p>
</body>
</html>
```

## Mail Configuration

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your-username
MAIL_PASSWORD=your-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@example.com
MAIL_FROM_NAME="${APP_NAME}"
```

## Attachments

```php
<?php
public function build()
{
    return $this->view('emails.welcome')
                ->attach('/path/to/file.pdf')
                ->attach('/path/to/image.jpg', [
                    'as' => 'photo.jpg',
                    'mime' => 'image/jpeg',
                ]);
}
?>
```

## Next Steps

Now let's learn about [Notifications](./notifications)!

