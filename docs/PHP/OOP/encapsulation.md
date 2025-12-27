---
sidebar_position: 6
---

# Encapsulation

Encapsulation is the practice of bundling data (properties) and methods inside a class and restricting direct access to the data.

## Why Encapsulate?
Ideally, you should not access properties directly like `$user->age = -5;`. This allows invalid data. Instead, use methods to control access.

## Getters and Setters

```php
class Employee {
    private $salary;

    // Setter: Validates data before assigning
    public function setSalary($amount) {
        if ($amount < 0) {
            echo "Error: Salary cannot be negative!";
        } else {
            $this->salary = $amount;
        }
    }

    // Getter: Controls how data is retrieved
    public function getSalary() {
        return "$" . number_format($this->salary);
    }
}

$emp = new Employee();
// $emp->salary = 1000; // Error: Cannot access private property
$emp->setSalary(5000);
echo $emp->getSalary(); // $5,000
```

## Read-Only Properties (PHP 8.1+)

```php
class Blog {
    public readonly string $title;

    public function __construct($title) {
        $this->title = $title;
    }
}

$post = new Blog("My Post");
// $post->title = "New Title"; // ERROR: Cannot modify readonly property
```
