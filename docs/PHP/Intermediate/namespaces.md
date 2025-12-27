---
sidebar_position: 2
---

# Namespaces

Namespaces help organize code and prevent naming conflicts. They're especially useful in large applications and when using third-party libraries.

## What are Namespaces?

Namespaces provide a way to group related classes, interfaces, functions, and constants under a single name.

## Basic Namespace Declaration

```php
<?php
namespace MyApp;

class User {
    // ...
}

function greet() {
    return "Hello!";
}
?>
```

## Using Namespaces

```php
<?php
namespace MyApp\Models;

class User {
    public $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
}

// Create an instance
$user = new \MyApp\Models\User("Anish");
?>
```

## The `use` Statement

Import namespaces to avoid typing the full path:

```php
<?php
namespace MyApp\Controllers;

use MyApp\Models\User;

class UserController {
    public function create() {
        $user = new User("Anish");
        return $user;
    }
}
?>
```

## Aliasing

Create shorter names for classes:

```php
<?php
use MyApp\Models\User as UserModel;
use MyApp\Services\EmailService as Email;

$user = new UserModel("Anish");
$email = new Email();
?>
```

## Multiple Namespaces in One File

```php
<?php
namespace MyApp\Models {
    class User {
        // ...
    }
}

namespace MyApp\Controllers {
    use MyApp\Models\User;
    
    class UserController {
        // ...
    }
}
?>
```

## Global Namespace

Access global functions/classes from within a namespace:

```php
<?php
namespace MyApp;

// Use global strlen function
$length = \strlen("Hello");

// Or use global namespace
$length = strlen("Hello");  // PHP will look in current namespace first
?>
```

## Sub-namespaces

Create nested namespaces:

```php
<?php
namespace MyApp\Controllers\Admin;

class DashboardController {
    // ...
}
?>
```

## Next Steps

Now let's learn about [Traits](./traits) for code reuse!

