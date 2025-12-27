---
sidebar_position: 5
---

# Functions

Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.

## Basic Function

```php
<?php
function greet() {
    echo "Hello, World!";
}

greet();  // Call the function
?>
```

## Function with Parameters

```php
<?php
function greet($name) {
    echo "Hello, $name!";
}

greet("Anish");  // Output: Hello, Anish!
?>
```

## Function with Return Value

```php
<?php
function add($a, $b) {
    return $a + $b;
}

$result = add(5, 3);
echo $result;  // Output: 8
?>
```

## Default Parameter Values

```php
<?php
function greet($name = "Guest") {
    echo "Hello, $name!";
}

greet();        // Output: Hello, Guest!
greet("Anish"); // Output: Hello, Anish!
?>
```

## Type Declarations

PHP 7+ supports type declarations:

```php
<?php
function add(int $a, int $b): int {
    return $a + $b;
}

echo add(5, 3);  // 8
?>
```

## Variable Scope

```php
<?php
$globalVar = "I'm global";

function test() {
    $localVar = "I'm local";
    global $globalVar;  // Access global variable
    echo $globalVar;
    echo $localVar;
}

test();
?>
```

## Static Variables

Variables that retain their value between function calls:

```php
<?php
function counter() {
    static $count = 0;
    $count++;
    echo $count . " ";
}

counter();  // 1
counter();  // 2
counter();  // 3
?>
```

## Anonymous Functions (Closures)

```php
<?php
$greet = function($name) {
    echo "Hello, $name!";
};

$greet("Anish");
?>
```

## Arrow Functions (PHP 7.4+)

```php
<?php
$add = fn($a, $b) => $a + $b;
echo $add(5, 3);  // 8
?>
```

## Built-in Functions

PHP has many built-in functions:

```php
<?php
$text = "Hello World";
echo strlen($text);        // 11
echo strtoupper($text);    // HELLO WORLD
echo str_replace("World", "PHP", $text);  // Hello PHP

$numbers = [3, 1, 4, 1, 5];
echo count($numbers);      // 5
echo max($numbers);        // 5
echo min($numbers);        // 1
?>
```

## Next Steps

Now that you understand functions, let's learn about [Arrays](./arrays).

