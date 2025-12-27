---
sidebar_position: 1
---

# Introduction to OOP

## What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of "objects", which can contain data (properties) and code: procedures (methods).

Imagine a **Car Factory**:
-   **Class (Blueprint)**: The engineering drawing of a car. It defines that a car has wheels, color, and an engine.
-   **Object (Instance)**: The actual physical cars produced from that drawing. One is Red, one is Blue.

## Procedural vs OOP

### Procedural
Code is a list of instructions. Data and functions are separate.

```php
$car_color = "red";
function startCar() { echo "Vroom!"; }
```

### OOP
Data and functions are bundled together.

```php
class Car {
    public $color = "red";
    public function start() { echo "Vroom!"; }
}
```

## Why use OOP?
1.  **Modularity**: Code is organized into distinct objects.
2.  **Reusability**: You can reuse classes across your application.
3.  **Maintainability**: Easier to debug and update.
4.  **Scalability**: Essential for large applications (like Laravel).
