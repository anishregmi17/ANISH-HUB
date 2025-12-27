---
sidebar_position: 3
---

# Constructor & Destructor

## The Constructor (`__construct`)

A constructor is a special "magic" method that runs automatically when you create a new object. It's perfect for initializing properties.

```php
<?php
class Product {
    public $name;
    public $price;

    // Constructor runs when 'new Product()' is called
    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
        echo "New product created: {$this->name}\n";
    }
}

// Pass arguments directly when creating the object
$laptop = new Product("MacBook Pro", 1200);
$phone = new Product("iPhone 15", 999);
?>
```

### Constructor Promotion (PHP 8.0+)
You can save time by defining properties directly in the constructor arguments.

```php
class User {
    public function __construct(
        public string $name,
        public string $email,
    ) {}
}

$user = new User("Anish", "test@example.com");
echo $user->name; // Anish
```

## The Destructor (`__destruct`)

Runs automatically when an object is destroyed or the script ends. Often used to close database connections or file handles.

```php
class DatabaseConnection {
    public function __construct() {
        echo "Connecting to DB...\n";
    }

    public function __destruct() {
        echo "Closing connection...\n";
    }
}
```
