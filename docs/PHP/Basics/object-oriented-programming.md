---
sidebar_position: 7
---

# Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to organize code. PHP has full support for OOP.

## Classes and Objects

A class is a blueprint for creating objects:

```php
<?php
class Car {
    // Properties
    public $brand;
    public $model;
    public $color;
    
    // Methods
    public function start() {
        return "The car is starting...";
    }
    
    public function drive() {
        return "The car is driving...";
    }
}

// Create an object (instance)
$myCar = new Car();
$myCar->brand = "Toyota";
$myCar->model = "Camry";
$myCar->color = "Blue";

echo $myCar->start();
?>
```

## Constructor

A constructor is called when an object is created:

```php
<?php
class Car {
    public $brand;
    public $model;
    
    public function __construct($brand, $model) {
        $this->brand = $brand;
        $this->model = $model;
    }
    
    public function getInfo() {
        return "Brand: {$this->brand}, Model: {$this->model}";
    }
}

$myCar = new Car("Toyota", "Camry");
echo $myCar->getInfo();
?>
```

## Visibility Modifiers

- `public`: Accessible from anywhere
- `private`: Only accessible within the class
- `protected`: Accessible within the class and its subclasses

```php
<?php
class BankAccount {
    private $balance = 0;
    
    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }
    
    public function withdraw($amount) {
        if ($amount > 0 && $amount <= $this->balance) {
            $this->balance -= $amount;
        }
    }
    
    public function getBalance() {
        return $this->balance;
    }
}

$account = new BankAccount();
$account->deposit(1000);
echo $account->getBalance();  // 1000
?>
```

## Inheritance

A class can inherit properties and methods from another class:

```php
<?php
class Animal {
    public $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function makeSound() {
        return "Some sound";
    }
}

class Dog extends Animal {
    public function makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    public function makeSound() {
        return "Meow!";
    }
}

$dog = new Dog("Buddy");
echo $dog->makeSound();  // Woof!
?>
```

## Method Overriding

```php
<?php
class ParentClass {
    public function greet() {
        return "Hello from parent";
    }
}

class ChildClass extends ParentClass {
    public function greet() {
        return "Hello from child";
    }
}

$child = new ChildClass();
echo $child->greet();  // Hello from child
?>
```

## Static Properties and Methods

Static members belong to the class, not instances:

```php
<?php
class Counter {
    public static $count = 0;
    
    public static function increment() {
        self::$count++;
    }
    
    public static function getCount() {
        return self::$count;
    }
}

Counter::increment();
Counter::increment();
echo Counter::getCount();  // 2
?>
```

## Abstract Classes

Cannot be instantiated directly, must be extended:

```php
<?php
abstract class Shape {
    abstract public function area();
    
    public function getName() {
        return "Shape";
    }
}

class Circle extends Shape {
    private $radius;
    
    public function __construct($radius) {
        $this->radius = $radius;
    }
    
    public function area() {
        return pi() * $this->radius * $this->radius;
    }
}

$circle = new Circle(5);
echo $circle->area();  // 78.54...
?>
```

## Interfaces

Define a contract that classes must implement:

```php
<?php
interface Flyable {
    public function fly();
}

interface Swimmable {
    public function swim();
}

class Duck implements Flyable, Swimmable {
    public function fly() {
        return "Duck is flying";
    }
    
    public function swim() {
        return "Duck is swimming";
    }
}

$duck = new Duck();
echo $duck->fly();
?>
```

## Next Steps

Congratulations! You've completed PHP Basics. Now let's move to [PHP Intermediate](../Intermediate/introduction) to learn more advanced concepts.

