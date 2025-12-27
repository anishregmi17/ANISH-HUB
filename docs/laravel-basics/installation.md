---
sidebar_position: 2
---

# Laravel Installation

Learn how to install Laravel and set up your development environment.

## Prerequisites

- PHP >= 8.1
- Composer
- MySQL, PostgreSQL, or SQLite

## Install Laravel

### Using Composer

```bash
composer create-project laravel/laravel my-app
cd my-app
```

### Using Laravel Installer

```bash
# Install Laravel installer globally
composer global require laravel/installer

# Create new project
laravel new my-app
cd my-app
```

## Start Development Server

```bash
php artisan serve
```

Your application will be available at `http://localhost:8000`

## Project Structure

```
my-app/
├── app/              # Application core
│   ├── Http/
│   │   ├── Controllers/
│   │   └── Middleware/
│   ├── Models/
│   └── Providers/
├── bootstrap/        # Bootstrap files
├── config/           # Configuration files
├── database/         # Migrations and seeds
├── public/           # Public assets
├── resources/        # Views and assets
├── routes/           # Route definitions
├── storage/          # Logs and cache
├── tests/            # Test files
└── vendor/           # Composer dependencies
```

## Environment Configuration

Edit `.env` file:

```env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

## Generate Application Key

```bash
php artisan key:generate
```

## Database Setup

```bash
# Create database
mysql -u root -p
CREATE DATABASE laravel;

# Run migrations
php artisan migrate
```

## Verify Installation

Visit `http://localhost:8000` - you should see the Laravel welcome page.

## Next Steps

Now let's learn about [Routing](./routing)!

