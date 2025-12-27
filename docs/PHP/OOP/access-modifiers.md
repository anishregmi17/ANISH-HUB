---
sidebar_position: 4
---

# Access Modifiers

Access modifiers control where properties and methods can be accessed from. There are three levels of visibility:

## 1. Public
The default. Accessible from anywhere (inside the class, outside the class, and in child classes).

```php
class Car {
    public $color = "Red";
}

$car = new Car();
echo $car->color; // Works fine
```

## 2. Protected
Accessible only within the class itself and by **inheriting** (child) classes. Cannot be accessed from outside.

```php
class BankAccount {
    protected $balance = 1000;
}

$account = new BankAccount();
// echo $account->balance; // ERROR: Cannot access protected property
```

## 3. Private
Accessible **ONLY** within the class that defines it. Not even child classes can access it.

```php
class User {
    private $password = "secret123";

    public function verifyPassword($input) {
        // We can access private properties inside the class
        return $input === $this->password;
    }
}
```

## Summary Table

| Modifier | Inside Class | Child Class | Outside Class |
| :--- | :---: | :---: | :---: |
| **public** | ✅ | ✅ | ✅ |
| **protected** | ✅ | ✅ | ❌ |
| **private** | ✅ | ❌ | ❌ |
