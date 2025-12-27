---
sidebar_position: 9
---

# Regular Expressions

Regular expressions (regex) are powerful tools for pattern matching and text manipulation. PHP provides built-in functions for working with regex.

## Basic Pattern Matching

```php
<?php
$pattern = "/hello/";
$text = "Hello, World!";

if (preg_match($pattern, $text)) {
    echo "Pattern found!";
}
?>
```

## Case-Insensitive Matching

```php
<?php
$pattern = "/hello/i";  // 'i' flag for case-insensitive
$text = "Hello, World!";

if (preg_match($pattern, $text)) {
    echo "Pattern found!";
}
?>
```

## Common Patterns

```php
<?php
// Email validation
$email = "anish@example.com";
$pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
if (preg_match($pattern, $email)) {
    echo "Valid email";
}

// Phone number (US format)
$phone = "123-456-7890";
$pattern = "/^\d{3}-\d{3}-\d{4}$/";
if (preg_match($pattern, $phone)) {
    echo "Valid phone number";
}

// URL validation
$url = "https://www.example.com";
$pattern = "/^https?:\/\/[^\s/$.?#].[^\s]*$/i";
if (preg_match($pattern, $url)) {
    echo "Valid URL";
}
?>
```

## Finding All Matches

```php
<?php
$text = "The quick brown fox jumps over the lazy dog";
$pattern = "/\b\w{4}\b/";  // 4-letter words

preg_match_all($pattern, $text, $matches);
print_r($matches[0]);
// Output: Array ( [0] => quick [1] => brown [2] => jumps [3] => over [4] => lazy )
?>
```

## Replacing Text

```php
<?php
$text = "Hello World";
$pattern = "/World/";
$replacement = "PHP";

$newText = preg_replace($pattern, $replacement, $text);
echo $newText;  // Hello PHP
?>
```

## Pattern Modifiers

```php
<?php
// i - case-insensitive
$pattern = "/hello/i";

// m - multiline mode
$pattern = "/^start/m";

// s - dot matches newline
$pattern = "/.*/s";

// u - unicode mode
$pattern = "/\p{L}+/u";

// g - global (for preg_replace)
$text = preg_replace("/hello/", "hi", $text);
?>
```

## Character Classes

```php
<?php
// \d - digit [0-9]
$pattern = "/\d+/";

// \w - word character [a-zA-Z0-9_]
$pattern = "/\w+/";

// \s - whitespace
$pattern = "/\s+/";

// Custom character class
$pattern = "/[a-z]+/";      // lowercase letters
$pattern = "/[A-Z]+/";      // uppercase letters
$pattern = "/[0-9]+/";      // digits
$pattern = "/[a-zA-Z]+/";   // letters
?>
```

## Quantifiers

```php
<?php
// * - zero or more
$pattern = "/a*/";

// + - one or more
$pattern = "/a+/";

// ? - zero or one
$pattern = "/a?/";

// {n} - exactly n times
$pattern = "/a{3}/";        // aaa

// {n,} - n or more times
$pattern = "/a{3,}/";       // aaa, aaaa, ...

// {n,m} - between n and m times
$pattern = "/a{2,4}/";      // aa, aaa, aaaa
?>
```

## Anchors

```php
<?php
// ^ - start of string
$pattern = "/^Hello/";

// $ - end of string
$pattern = "/World$/";

// \b - word boundary
$pattern = "/\bword\b/";
?>
```

## Capturing Groups

```php
<?php
$text = "Name: Anish, Age: 25";
$pattern = "/Name: (\w+), Age: (\d+)/";

if (preg_match($pattern, $text, $matches)) {
    echo "Name: " . $matches[1];  // Anish
    echo "Age: " . $matches[2];   // 25
}
?>
```

## Named Groups

```php
<?php
$text = "2024-01-15";
$pattern = "/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/";

if (preg_match($pattern, $text, $matches)) {
    echo "Year: " . $matches["year"];   // 2024
    echo "Month: " . $matches["month"]; // 01
    echo "Day: " . $matches["day"];      // 15
}
?>
```

## Practical Examples

```php
<?php
// Extract email addresses
$text = "Contact us at support@example.com or info@example.com";
$pattern = "/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/";
preg_match_all($pattern, $text, $matches);
print_r($matches[0]);

// Remove HTML tags
$html = "<p>Hello <b>World</b></p>";
$clean = preg_replace("/<[^>]*>/", "", $html);
echo $clean;  // Hello World

// Validate password (8+ chars, 1 uppercase, 1 lowercase, 1 number)
$password = "MyPass123";
$pattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/";
if (preg_match($pattern, $password)) {
    echo "Valid password";
}
?>
```

## Next Steps

Congratulations! You've completed PHP Intermediate. Now let's move to [PHP Advanced](../Advanced/introduction) to learn even more advanced concepts!

