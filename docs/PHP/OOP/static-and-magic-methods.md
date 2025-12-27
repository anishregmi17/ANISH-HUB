---
sidebar_position: 8
---

# Static & Magic Methods

## Static Properties & Methods
Static members belong to the **class** itself, not to any specific object instance. You access them using `::` (Scope Resolution Operator).

```php
class MathHelper {
    public static $pi = 3.14;

    public static function square($num) {
        return $num * $num;
    }
}

echo MathHelper::$pi; // 3.14
echo MathHelper::square(4); // 16
```

### `self` vs `$this`
-   Use `$this->` for object properties.
-   Use `self::` for static properties inside the class.

## Magic Methods
Special methods starting with `__`. We already saw `__construct` and `__destruct`.

### `__get` and `__set`
Triggered when accessing inaccessible properties.

```php
class User {
    private $data = [];

    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    public function __get($name) {
        return $this->data[$name] ?? null;
    }
}

$u = new User();
$u->city = "Kathmandu"; // Triggers __set
echo $u->city;          // Triggers __get
```

### `__toString`
Triggered when you treat an object like a string.

```php
class User {
    public $name = "Anish";
    public function __toString() {
        return "User: {$this->name}";
    }
}

echo new User(); // "User: Anish"
```
