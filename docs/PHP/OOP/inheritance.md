---
sidebar_position: 5
---

# Inheritance

Inheritance allows a class (Child) to acquire properties and methods from another class (Parent). This promotes code reuse.

## The `extends` Keyword

```php
class Animal {
    public $name;

    public function eat() {
        echo "{$this->name} is eating.\n";
    }
}

// Dog inherits from Animal
class Dog extends Animal {
    public function bark() {
        echo "Woof! Woof!\n";
    }
}

$dog = new Dog();
$dog->name = "Buddy";
$dog->eat(); // Inherited from Animal
$dog->bark(); // Defined in Dog
```

## Overriding Methods
A child class can define a method with the same name as the parent to replace its behavior.

```php
class Cat extends Animal {
    public function eat() {
        echo "{$this->name} is eating fish subtly.\n";
    }
}
```

## The `parent::` Keyword
You can access the parent's method even after overriding it using `parent::`.

```php
class Robot {
    public function boot() {
        echo "System checking...\n";
    }
}

class Android extends Robot {
    public function boot() {
        parent::boot(); // Run the parent logic first
        echo "AI loading...\n";
    }
}
```

## `final` Keyword
If you want to prevent a class from being inherited or a method from being overridden, use `final`.

```php
final class GodMode {
    // Cannot be extended
}
```
