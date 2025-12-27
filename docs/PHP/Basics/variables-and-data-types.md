---
sidebar_position: 2
---

# Variables and Data Types

Variables are containers for storing data. In PHP, variables are declared with a `$` sign followed by the variable name.

## Variable Declaration

```php
<?php
$name = "Anish";
$age = 25;
$price = 99.99;
$isActive = true;
?>
```

## PHP Data Types

PHP supports several data types:

### 1. String

Strings are sequences of characters enclosed in quotes.

```php
<?php
$name = "Anish";
$message = 'Hello, World!';
$multiline = "This is a
multi-line
string";
?>
```

### 2. Integer

Whole numbers without decimals.

```php
<?php
$age = 25;
$count = -100;
$largeNumber = 1000000;
?>
```

### 3. Float (Double)

Numbers with decimal points.

```php
<?php
$price = 99.99;
$pi = 3.14159;
$temperature = -5.5;
?>
```

### 4. Boolean

Represents true or false.

```php
<?php
$isActive = true;
$isComplete = false;
?>
```

### 5. Array

Stores multiple values in a single variable.

```php
<?php
$fruits = array("Apple", "Banana", "Orange");
// Or using short syntax:
$colors = ["Red", "Green", "Blue"];
?>
```

### 6. NULL

Represents a variable with no value.

```php
<?php
$data = null;
?>
```

## Variable Naming Rules

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive (`$name` and `$Name` are different)
- Cannot start with a number

## Type Checking

```php
<?php
$value = "Hello";
var_dump($value);        // string(5) "Hello"
echo gettype($value);    // string
?>
```

## Type Casting

Convert between types:

```php
<?php
$number = "123";
$int = (int)$number;      // 123
$float = (float)$number;  // 123.0
$string = (string)123;    // "123"
?>
```

## Next Steps

Now that you understand variables and data types, let's learn about [Operators](./operators).

