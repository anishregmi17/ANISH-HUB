---
sidebar_position: 4
---

# Interface Segregation Principle (ISP)

## The Principle
> A client should not be forced to implement an interface that it doesn't use.

It's better to have many small, specific interfaces than one giant specific interface ("Fat Interface").

## ❌ Bad Code

```php
interface Worker {
    public function work();
    public function sleep();
}

class Human implements Worker {
    public function work() { /* ... */ }
    public function sleep() { /* ... */ }
}

class Android implements Worker {
    public function work() { /* ... */ }
    
    public function sleep() {
        // Androids don't sleep! But we are forced to implement this.
        return null;
    }
}
```

## ✅ Good Code
Split the interface.

```php
interface Workable {
    public function work();
}

interface Sleepable {
    public function sleep();
}

class Human implements Workable, Sleepable {
    public function work() { /* ... */ }
    public function sleep() { /* ... */ }
}

class Android implements Workable {
    public function work() { /* ... */ }
    // No sleep method needed!
}
```
