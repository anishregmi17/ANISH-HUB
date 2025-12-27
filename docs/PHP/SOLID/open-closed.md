---
sidebar_position: 2
---

# Open/Closed Principle (OCP)

## The Principle
> Software entities (classes, modules, functions) should be **Open for extension**, but **Closed for modification**.

You should be able to add new functionality without touching existing code.

## ❌ Bad Code
We have a class that calculates shipping.

```php
class Shipping {
    public function getCost($type) {
        if ($type == 'ground') {
            return 10;
        } elseif ($type == 'air') {
            return 20;
        }
        // If we want to add 'sea' shipping, we must modify this existing class!
    }
}
```

## ✅ Good Code
Use Polymorphism/Interfaces.

```php
// 1. Create an interface
interface ShippingMethod {
    public function getCost();
}

// 2. Concrete implementations
class GroundShipping implements ShippingMethod {
    public function getCost() { return 10; }
}

class AirShipping implements ShippingMethod {
    public function getCost() { return 20; }
}

// 3. To add 'Sea' shipping, we create a new class. No old code is touched.
class SeaShipping implements ShippingMethod {
    public function getCost() { return 5; }
}

// 4. The order calculator just uses the interface
class Order {
    public function calculateTotal(ShippingMethod $shipping) {
        return 50 + $shipping->getCost();
    }
}
```
