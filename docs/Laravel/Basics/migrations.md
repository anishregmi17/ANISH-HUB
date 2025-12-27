---
sidebar_position: 7
---

# Migrations

Migrations are like version control for your database. They allow you to modify your database structure in a versioned, controlled manner.

## Creating Migrations

```bash
# Create migration
php artisan make:migration create_users_table

# Create migration for specific table
php artisan make:migration add_email_to_users_table --table=users
```

## Migration Structure

```php
<?php
// database/migrations/xxxx_xx_xx_xxxxxx_create_users_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
?>
```

## Running Migrations

```bash
# Run all pending migrations
php artisan migrate

# Rollback last migration
php artisan migrate:rollback

# Rollback all migrations
php artisan migrate:reset

# Rollback and re-run
php artisan migrate:refresh

# Rollback, re-run, and seed
php artisan migrate:fresh --seed
```

## Column Types

```php
<?php
Schema::create('posts', function (Blueprint $table) {
    // String types
    $table->string('title');
    $table->text('content');
    $table->longText('description');
    
    // Integer types
    $table->integer('views');
    $table->bigInteger('likes');
    $table->tinyInteger('status');
    $table->unsignedInteger('user_id');
    
    // Float types
    $table->decimal('price', 8, 2);
    $table->float('rating');
    
    // Boolean
    $table->boolean('is_published');
    
    // Date and time
    $table->date('published_at');
    $table->dateTime('created_at');
    $table->timestamp('updated_at');
    $table->time('start_time');
    
    // JSON
    $table->json('metadata');
    
    // UUID
    $table->uuid('id')->primary();
    
    // Foreign keys
    $table->foreignId('user_id')->constrained();
});
?>
```

## Column Modifiers

```php
<?php
Schema::create('users', function (Blueprint $table) {
    $table->string('email')->unique();
    $table->string('name')->nullable();
    $table->string('password')->default('password');
    $table->string('status')->index();
    $table->text('bio')->nullable();
    $table->timestamp('email_verified_at')->nullable();
});
?>
```

## Modifying Tables

```php
<?php
// Add column
Schema::table('users', function (Blueprint $table) {
    $table->string('phone')->after('email');
});

// Drop column
Schema::table('users', function (Blueprint $table) {
    $table->dropColumn('phone');
});

// Rename column
Schema::table('users', function (Blueprint $table) {
    $table->renameColumn('name', 'full_name');
});

// Change column
Schema::table('users', function (Blueprint $table) {
    $table->string('name', 100)->change();
});
?>
```

## Indexes

```php
<?php
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('slug')->unique();
    $table->foreignId('user_id')->index();
    
    // Composite index
    $table->index(['user_id', 'created_at']);
    
    // Full text index
    $table->fullText('content');
});
?>
```

## Foreign Keys

```php
<?php
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    
    // Foreign key with cascade
    $table->foreignId('user_id')
          ->constrained()
          ->onDelete('cascade');
    
    // Or specify table
    $table->foreignId('category_id')
          ->constrained('categories')
          ->onDelete('cascade');
    
    // Custom foreign key
    $table->unsignedBigInteger('author_id');
    $table->foreign('author_id')
          ->references('id')
          ->on('users')
          ->onDelete('cascade');
});
?>
```

## Next Steps

Congratulations! You've completed Laravel Basics. Now let's move to [Laravel Intermediate](../Intermediate/introduction) to learn more advanced concepts!

