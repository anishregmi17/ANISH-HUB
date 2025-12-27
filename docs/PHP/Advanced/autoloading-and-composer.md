---
sidebar_position: 3
---

# Autoloading and Composer

Composer is PHP's dependency manager and autoloader. It simplifies package management and class autoloading.

## What is Composer?

Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and manages them for you.

## Installation

```bash
# Download and install Composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

# Or use installer script
curl -sS https://getcomposer.org/installer | php
```

## Composer.json

Create a `composer.json` file to define your project dependencies:

```json
{
    "name": "anish/my-project",
    "description": "My PHP project",
    "type": "project",
    "require": {
        "php": "^8.0",
        "monolog/monolog": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
```

## Installing Dependencies

```bash
# Install dependencies
composer install

# Add a new package
composer require monolog/monolog

# Remove a package
composer remove monolog/monolog

# Update all packages
composer update
```

## PSR-4 Autoloading

PSR-4 is the standard for autoloading classes:

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/",
            "App\\Models\\": "src/Models/",
            "App\\Controllers\\": "src/Controllers/"
        }
    }
}
```

## Directory Structure

```
project/
├── composer.json
├── composer.lock
├── vendor/
│   └── autoload.php
└── src/
    ├── Models/
    │   └── User.php
    └── Controllers/
        └── UserController.php
```

## Using Autoloader

```php
<?php
// Include Composer's autoloader
require_once 'vendor/autoload.php';

// Now you can use classes without require
use App\Models\User;
use App\Controllers\UserController;

$user = new User();
$controller = new UserController();
?>
```

## Class Definition Example

```php
<?php
// src/Models/User.php
namespace App\Models;

class User {
    private $name;
    private $email;
    
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
    
    public function getName() {
        return $this->name;
    }
}
```

## Autoloading Functions

You can also autoload functions:

```json
{
    "autoload": {
        "files": [
            "src/helpers.php"
        ]
    }
}
```

## Composer Scripts

Define custom scripts in `composer.json`:

```json
{
    "scripts": {
        "test": "phpunit",
        "serve": "php -S localhost:8000"
    }
}
```

Run scripts with:
```bash
composer test
composer serve
```

## Popular Packages

```bash
# HTTP Client
composer require guzzlehttp/guzzle

# Database ORM
composer require illuminate/database

# Validation
composer require respect/validation

# Logger
composer require monolog/monolog

# Testing
composer require phpunit/phpunit --dev
```

## Composer.lock

The `composer.lock` file locks your dependencies to specific versions. Always commit this file to version control.

## Updating Dependencies

```bash
# Update all packages to latest versions
composer update

# Update specific package
composer update monolog/monolog

# Check for outdated packages
composer outdated
```

## Autoload Optimization

```bash
# Generate optimized autoloader
composer dump-autoload --optimize

# For production
composer install --no-dev --optimize-autoload
```

## Next Steps

Now let's learn about [Security Best Practices](./security-best-practices)!

