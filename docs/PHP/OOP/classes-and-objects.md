---
sidebar_position: 2
---

# Classes & Objects

## Defining a Class

A class is defined using the `class` keyword. By convention, class names are `PascalCase`.

```php
<?php
class User {
    // Properties (Data)
    public $name;
    public $email;

    // Methods (Functions)
    public function sayHello() {
        return "Hello, my name is " . $this->name;
    }
}
?>
```

### The `$this` Keyword
Inside a method, `$this` refers to the **current object**.

## Creating Objects

To create an object from a class, use the `new` keyword.

```php
$user1 = new User();
$user1->name = "Anish";
$user1->email = "anish@example.com";

echo $user1->sayHello(); // Outputs: Hello, my name is Anish

$user2 = new User();
$user2->name = "John";
echo $user2->sayHello(); // Outputs: Hello, my name is John
```

Each object has its own separate data. modifying `$user1` does not affect `$user2`.
