---
sidebar_position: 6
---

# Arrays

Arrays are used to store multiple values in a single variable. PHP supports indexed arrays, associative arrays, and multidimensional arrays.

## Indexed Arrays

Arrays with numeric keys:

```php
<?php
$fruits = array("Apple", "Banana", "Orange");
// Or using short syntax:
$colors = ["Red", "Green", "Blue"];

echo $fruits[0];  // Apple
echo $colors[1];  // Green
?>
```

## Associative Arrays

Arrays with named keys:

```php
<?php
$person = [
    "name" => "Anish",
    "age" => 25,
    "city" => "Kathmandu"
];

echo $person["name"];  // Anish
echo $person["age"];   // 25
?>
```

## Multidimensional Arrays

Arrays containing other arrays:

```php
<?php
$students = [
    ["name" => "Anish", "age" => 25],
    ["name" => "John", "age" => 22],
    ["name" => "Jane", "age" => 23]
];

echo $students[0]["name"];  // Anish
?>
```

## Adding Elements

```php
<?php
$fruits = ["Apple", "Banana"];
$fruits[] = "Orange";  // Add to end
array_push($fruits, "Grape");  // Add to end
array_unshift($fruits, "Mango");  // Add to beginning

print_r($fruits);
?>
```

## Removing Elements

```php
<?php
$fruits = ["Apple", "Banana", "Orange"];
array_pop($fruits);        // Remove last element
array_shift($fruits);      // Remove first element
unset($fruits[1]);         // Remove specific index
?>
```

## Array Functions

```php
<?php
$numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// Count elements
echo count($numbers);  // 8

// Check if key exists
var_dump(array_key_exists(0, $numbers));  // true

// Check if value exists
var_dump(in_array(5, $numbers));  // true

// Get array keys
$keys = array_keys($numbers);

// Get array values
$values = array_values($numbers);

// Sort arrays
sort($numbers);        // Sort ascending
rsort($numbers);       // Sort descending
asort($numbers);       // Sort associative by value
ksort($numbers);       // Sort associative by key
?>
```

## Array Iteration

```php
<?php
$fruits = ["Apple", "Banana", "Orange"];

// Using foreach
foreach ($fruits as $fruit) {
    echo $fruit . " ";
}

// Using foreach with index
foreach ($fruits as $index => $fruit) {
    echo "$index: $fruit\n";
}

// Using array functions
array_map(function($fruit) {
    echo $fruit . " ";
}, $fruits);
?>
```

## Array Filtering

```php
<?php
$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
$even = array_filter($numbers, function($n) {
    return $n % 2 == 0;
});

// Using arrow function (PHP 7.4+)
$even = array_filter($numbers, fn($n) => $n % 2 == 0);
?>
```

## Array Mapping

```php
<?php
$numbers = [1, 2, 3, 4, 5];

// Square each number
$squared = array_map(function($n) {
    return $n * $n;
}, $numbers);

// Using arrow function
$squared = array_map(fn($n) => $n * $n, $numbers);
// Result: [1, 4, 9, 16, 25]
?>
```

## Next Steps

Now that you understand arrays, let's learn about [Object-Oriented Programming](./object-oriented-programming).

