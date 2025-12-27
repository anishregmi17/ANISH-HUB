---
sidebar_position: 8
---

# PSR Standards

PSR (PHP Standards Recommendations) are coding standards defined by PHP-FIG (Framework Interop Group). Following these standards ensures code interoperability.

## PSR-1: Basic Coding Standard

### File Tags

```php
<?php
// Opening tag only, no closing tag
namespace App\Models;

class User {
    // ...
}
```

### Class Names

```php
<?php
// Use StudlyCaps
class UserController {
    // ...
}

class DatabaseConnection {
    // ...
}
```

### Method Names

```php
<?php
// Use camelCase
class User {
    public function getUserName() {
        // ...
    }
    
    public function setUserName($name) {
        // ...
    }
}
```

### Constants

```php
<?php
// Use all uppercase with underscores
class Config {
    const MAX_SIZE = 100;
    const DEFAULT_TIMEOUT = 30;
}
```

## PSR-2: Coding Style Guide

### Indentation

```php
<?php
// Use 4 spaces, not tabs
class Example {
    public function method() {
        if ($condition) {
            // 4 spaces
            $value = 1;
        }
    }
}
```

### Line Length

```php
<?php
// Soft limit at 120 characters
// Hard limit at 120 characters

// Good
$result = $this->someMethod($param1, $param2, $param3);

// Better - break into multiple lines
$result = $this->someMethod(
    $param1,
    $param2,
    $param3
);
```

### Keywords

```php
<?php
// Use lowercase for keywords
if ($condition) {
    // ...
} elseif ($otherCondition) {
    // ...
} else {
    // ...
}

// Use lowercase for true, false, null
$value = true;
$other = false;
$nothing = null;
```

### Method Declaration

```php
<?php
class Example {
    public function method($param1, $param2)
    {
        // Opening brace on new line
    }
    
    public function anotherMethod()
    {
        // ...
    }
}
```

## PSR-4: Autoloading Standard

### Directory Structure

```
project/
├── composer.json
└── src/
    └── App/
        ├── Models/
        │   └── User.php
        └── Controllers/
            └── UserController.php
```

### Composer Configuration

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/App/"
        }
    }
}
```

### Class Definition

```php
<?php
// src/App/Models/User.php
namespace App\Models;

class User {
    // ...
}
```

## PSR-12: Extended Coding Style

### Declare Statements

```php
<?php
declare(strict_types=1);

namespace App\Models;

class User {
    // ...
}
```

### Property Declaration

```php
<?php
class Example {
    public $publicProperty;
    protected $protectedProperty;
    private $privateProperty;
    
    public function __construct() {
        $this->publicProperty = 'value';
    }
}
```

### Method Arguments

```php
<?php
class Example {
    public function method(
        $param1,
        $param2,
        $param3 = 'default'
    ) {
        // ...
    }
}
```

## Benefits of PSR Standards

1. **Interoperability**: Code from different frameworks works together
2. **Consistency**: Uniform coding style across projects
3. **Maintainability**: Easier to read and maintain
4. **Collaboration**: Team members follow same standards
5. **Tooling**: Better IDE support and static analysis

## Tools for PSR Compliance

```bash
# PHP_CodeSniffer
composer require --dev squizlabs/php_codesniffer

# Check PSR-12 compliance
vendor/bin/phpcs --standard=PSR12 src/

# Auto-fix issues
vendor/bin/phpcbf --standard=PSR12 src/
```

## Next Steps

Congratulations! You've completed PHP Advanced. Now let's move to [Laravel Basics](../../Laravel/Basics/introduction) to start learning the Laravel framework!

