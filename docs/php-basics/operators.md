---
sidebar_position: 3
---

# Operators

Operators are symbols that perform operations on variables and values. PHP has various types of operators.

## Arithmetic Operators

Perform mathematical operations:

```php
<?php
$a = 10;
$b = 3;

echo $a + $b;  // 13 (Addition)
echo $a - $b;  // 7 (Subtraction)
echo $a * $b;  // 30 (Multiplication)
echo $a / $b;  // 3.333... (Division)
echo $a % $b;  // 1 (Modulus - remainder)
echo $a ** $b; // 1000 (Exponentiation)
?>
```

## Assignment Operators

Assign values to variables:

```php
<?php
$x = 10;      // Basic assignment
$x += 5;      // $x = $x + 5 (15)
$x -= 3;      // $x = $x - 3 (12)
$x *= 2;      // $x = $x * 2 (24)
$x /= 4;      // $x = $x / 4 (6)
$x %= 4;      // $x = $x % 4 (2)
?>
```

## Comparison Operators

Compare two values:

```php
<?php
$a = 10;
$b = 5;

var_dump($a == $b);   // false (Equal)
var_dump($a === $b);  // false (Identical - same type and value)
var_dump($a != $b);   // true (Not equal)
var_dump($a !== $b);  // true (Not identical)
var_dump($a > $b);    // true (Greater than)
var_dump($a < $b);    // false (Less than)
var_dump($a >= $b);   // true (Greater than or equal)
var_dump($a <= $b);   // false (Less than or equal)
?>
```

## Logical Operators

Combine conditional statements:

```php
<?php
$x = true;
$y = false;

var_dump($x && $y);  // false (AND)
var_dump($x || $y);  // true (OR)
var_dump(!$x);       // false (NOT)
?>
```

## Increment/Decrement Operators

```php
<?php
$x = 5;

echo ++$x;  // 6 (Pre-increment)
echo $x++;  // 6 (Post-increment, then $x becomes 7)
echo --$x;  // 6 (Pre-decrement)
echo $x--;  // 6 (Post-decrement, then $x becomes 5)
?>
```

## String Operators

Concatenate strings:

```php
<?php
$firstName = "Anish";
$lastName = "Regmi";

$fullName = $firstName . " " . $lastName;  // "Anish Regmi"
$greeting = "Hello";
$greeting .= " World";  // "Hello World"
?>
```

## Array Operators

```php
<?php
$a = [1, 2, 3];
$b = [4, 5, 6];

$c = $a + $b;        // Union
var_dump($a == $b);  // false (Equal)
var_dump($a === $b); // false (Identical)
?>
```

## Next Steps

Now that you understand operators, let's learn about [Control Structures](./control-structures).

