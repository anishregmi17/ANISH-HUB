---
sidebar_position: 1
---

# Single Responsibility Principle (SRP)

## The Principle
> A class should have one, and only one, reason to change.

In other words, a class should handle only **one logic** or **one job**.

## ❌ Bad Code (God Class)
This class does too much: it saves users, formats JSON, and sends emails.

```php
class User {
    public function saveToDb() { /* ... */ }
    public function formatJson() { /* ... */ }
    public function sendWelcomeEmail() { /* ... */ }
}
```

If we change email providers, we edit `User`. If we change DB, we edit `User`. It's fragile.

## ✅ Good Code
Split into smaller classes.

```php
// 1. Logic for Data
class User {
    private $name;
    // Getters and setters...
}

// 2. Logic for Storage
class UserRepository {
    public function save(User $user) { 
        // SQL code...
    }
}

// 3. Logic for Formatting
class UserFormatter {
    public function toJson(User $user) {
        return json_encode(['name' => $user->getName()]);
    }
}

// 4. Logic for Email
class EmailService {
    public function sendWelcome(User $user) {
        // Mail logic...
    }
}
```
