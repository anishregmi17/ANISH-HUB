---
sidebar_position: 3
---

# Testing

Laravel provides excellent testing support out of the box with PHPUnit.

## Feature Tests

```php
<?php
// tests/Feature/UserTest.php
namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_user_can_be_created()
    {
        $user = User::factory()->create([
            'name' => 'Anish',
            'email' => 'anish@example.com',
        ]);
        
        $this->assertDatabaseHas('users', [
            'email' => 'anish@example.com',
        ]);
    }
    
    public function test_user_can_login()
    {
        $user = User::factory()->create([
            'password' => bcrypt('password'),
        ]);
        
        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);
        
        $response->assertRedirect('/dashboard');
        $this->assertAuthenticatedAs($user);
    }
}
?>
```

## Unit Tests

```php
<?php
// tests/Unit/UserTest.php
namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    public function test_user_full_name()
    {
        $user = new User([
            'first_name' => 'Anish',
            'last_name' => 'Regmi',
        ]);
        
        $this->assertEquals('Anish Regmi', $user->full_name);
    }
}
?>
```

## HTTP Tests

```php
<?php
public function test_user_can_view_posts()
{
    $response = $this->get('/posts');
    
    $response->assertStatus(200);
    $response->assertViewIs('posts.index');
}

public function test_user_can_create_post()
{
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)
                     ->post('/posts', [
                         'title' => 'Test Post',
                         'content' => 'Test Content',
                     ]);
    
    $response->assertRedirect('/posts');
    $this->assertDatabaseHas('posts', [
        'title' => 'Test Post',
    ]);
}
?>
```

## Database Tests

```php
<?php
use Illuminate\Foundation\Testing\RefreshDatabase;

class PostTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_post_can_be_created()
    {
        $post = Post::factory()->create();
        
        $this->assertModelExists($post);
    }
}
?>
```

## Factories

```php
<?php
// database/factories/UserFactory.php
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;
    
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('password'),
        ];
    }
}

// Usage
$user = User::factory()->create();
$users = User::factory()->count(10)->create();
?>
```

## Next Steps

Now let's learn about [Performance Optimization](./performance-optimization)!

