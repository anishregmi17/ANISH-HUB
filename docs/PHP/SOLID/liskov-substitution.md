---
sidebar_position: 3
---

# Liskov Substitution Principle (LSP)

## The Principle
> Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

If `Dog` is a subclass of `Animal`, you should be able to duplicate `Animal` with `Dog` and everything should still work perfectly.

## ❌ Bad Code (Violating LSP)

```php
class Bird {
    public function fly() { return "I am flying"; }
}

class Penguin extends Bird {
    public function fly() {
        // Penguins are birds, but can't fly!
        throw new Exception("I cannot fly!");
    }
}

// This function expects all Birds to fly
function letItFly(Bird $bird) {
    $bird->fly(); 
}

letItFly(new Penguin()); // CRASH! Code broke.
```

## ✅ Good Code
Rethink the hierarchy. Not all birds fly.

```php
class Bird { /* common bird stuff */ }

interface FlyingBird {
    public function fly();
}

class Eagle extends Bird implements FlyingBird {
    public function fly() { return "Soaring high"; }
}

class Penguin extends Bird {
    public function swim() { return "Swimming"; }
}

// Only accepts things that CAN fly
function letItFly(FlyingBird $bird) {
    $bird->fly();
}

// letItFly(new Penguin()); // Error caught at compile time, safer.
```
