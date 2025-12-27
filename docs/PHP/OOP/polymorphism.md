---
sidebar_position: 7
---

# Polymorphism

Polymorphism means "many forms". It enables you to treat objects of different classes in a unified way.

## Abstract Classes
An abstract class is a template. It cannot be instantiated directly and forces child classes to implement specific methods.

```php
abstract class Shape {
    protected $color;
    
    // Abstract method: Must be implemented by child
    abstract public function calculateArea();
    
    public function getColor() {
        return $this->color;
    }
}

class Circle extends Shape {
    private $radius;
    
    public function __construct($r) { $this->radius = $r; }
    
    public function calculateArea() {
        return 3.14 * $this->radius * $this->radius;
    }
}

class Rectangle extends Shape {
    private $w, $h;
    
    public function __construct($w, $h) { $this->w = $w; $this->h = $h; }
    
    public function calculateArea() {
        return $this->w * $this->h;
    }
}
```

## Interfaces
Interfaces are contracts. They tell a class *what* it must do, but not *how* to do it. A class can implement multiple interfaces.

```php
interface Loggable {
    public function log(string $message);
}

class DatabaseLogger implements Loggable {
    public function log(string $message) {
        echo "Saving '$message' to database...";
    }
}

class FileLogger implements Loggable {
    public function log(string $message) {
        echo "Writing '$message' to file.txt...";
    }
}

// Polymorphism in action
function saveUser(Loggable $logger) {
    $logger->log("User saved");
}

saveUser(new DatabaseLogger());
saveUser(new FileLogger());
```
