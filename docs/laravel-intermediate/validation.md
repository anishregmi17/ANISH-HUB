---
sidebar_position: 5
---

# Validation

Laravel provides several approaches to validate incoming data. Learn how to use them effectively.

## Basic Validation

```php
<?php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed',
    ]);
    
    // $validated contains only validated data
    User::create($validated);
}
?>
```

## Validation Rules

```php
<?php
$request->validate([
    // Required
    'name' => 'required',
    
    // String
    'name' => 'string|max:255',
    
    // Email
    'email' => 'required|email',
    
    // Numeric
    'age' => 'required|integer|min:18|max:100',
    'price' => 'required|numeric|between:10,100',
    
    // Array
    'tags' => 'required|array',
    'tags.*' => 'string',
    
    // Date
    'birthday' => 'required|date|before:today',
    
    // File
    'avatar' => 'required|image|max:2048',
    
    // Unique
    'email' => 'unique:users,email',
    'email' => 'unique:users,email,' . $userId,
    
    // Exists
    'category_id' => 'exists:categories,id',
    
    // Custom
    'code' => 'required|regex:/^[A-Z]{3}$/',
]);
?>
```

## Custom Error Messages

```php
<?php
$request->validate([
    'email' => 'required|email',
], [
    'email.required' => 'Email is required',
    'email.email' => 'Please enter a valid email',
]);
?>
```

## Form Requests

```bash
php artisan make:request StoreUserRequest
```

```php
<?php
// app/Http/Requests/StoreUserRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ];
    }
    
    public function messages()
    {
        return [
            'email.unique' => 'This email is already taken',
        ];
    }
}

// Usage in controller
public function store(StoreUserRequest $request)
{
    // Validation passed automatically
    $validated = $request->validated();
    User::create($validated);
}
?>
```

## Custom Validation Rules

```bash
php artisan make:rule Uppercase
```

```php
<?php
// app/Rules/Uppercase.php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Uppercase implements Rule
{
    public function passes($attribute, $value)
    {
        return strtoupper($value) === $value;
    }
    
    public function message()
    {
        return 'The :attribute must be uppercase.';
    }
}

// Usage
$request->validate([
    'code' => ['required', new Uppercase],
]);
?>
```

## Next Steps

Now let's learn about [Events and Listeners](./events-and-listeners)!

