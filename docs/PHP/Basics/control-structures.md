---
sidebar_position: 4
---

# Control Structures

Control structures allow you to control the flow of your PHP program. They include conditionals and loops.

## If Statement

Execute code if a condition is true:

```php
<?php
$age = 18;

if ($age >= 18) {
    echo "You are an adult";
}
?>
```

## If-Else Statement

```php
<?php
$age = 15;

if ($age >= 18) {
    echo "You are an adult";
} else {
    echo "You are a minor";
}
?>
```

## If-Elseif-Else Statement

```php
<?php
$score = 85;

if ($score >= 90) {
    echo "Grade: A";
} elseif ($score >= 80) {
    echo "Grade: B";
} elseif ($score >= 70) {
    echo "Grade: C";
} else {
    echo "Grade: F";
}
?>
```

## Switch Statement

Alternative to multiple if-else statements:

```php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of work week";
        break;
    case "Friday":
        echo "TGIF!";
        break;
    case "Saturday":
    case "Sunday":
        echo "Weekend!";
        break;
    default:
        echo "Regular day";
}
?>
```

## While Loop

Execute code while a condition is true:

```php
<?php
$i = 1;
while ($i <= 5) {
    echo $i . " ";
    $i++;
}
// Output: 1 2 3 4 5
?>
```

## Do-While Loop

Execute code at least once, then repeat while condition is true:

```php
<?php
$i = 1;
do {
    echo $i . " ";
    $i++;
} while ($i <= 5);
// Output: 1 2 3 4 5
?>
```

## For Loop

Execute code a specific number of times:

```php
<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i . " ";
}
// Output: 1 2 3 4 5
?>
```

## Foreach Loop

Iterate over arrays:

```php
<?php
$fruits = ["Apple", "Banana", "Orange"];

foreach ($fruits as $fruit) {
    echo $fruit . " ";
}
// Output: Apple Banana Orange

// With keys:
$person = [
    "name" => "Anish",
    "age" => 25,
    "city" => "Kathmandu"
];

foreach ($person as $key => $value) {
    echo "$key: $value\n";
}
?>
```

## Break and Continue

```php
<?php
// Break - exit the loop
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        break;  // Exit loop when $i is 5
    }
    echo $i . " ";
}
// Output: 1 2 3 4

// Continue - skip current iteration
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        continue;  // Skip 5
    }
    echo $i . " ";
}
// Output: 1 2 3 4 6 7 8 9 10
?>
```

## Next Steps

Now that you understand control structures, let's learn about [Functions](./functions).

