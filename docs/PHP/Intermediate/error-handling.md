---
sidebar_position: 4
---

# Error Handling

Proper error handling is crucial for building robust applications. PHP provides several mechanisms for handling errors and exceptions.

## Try-Catch Blocks

Handle exceptions gracefully:

```php
<?php
try {
    $result = 10 / 0;
} catch (DivisionByZeroError $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

## Multiple Catch Blocks

```php
<?php
try {
    // Some code that might throw exceptions
    $file = fopen("nonexistent.txt", "r");
} catch (FileNotFoundException $e) {
    echo "File not found: " . $e->getMessage();
} catch (Exception $e) {
    echo "General error: " . $e->getMessage();
}
?>
```

## Finally Block

Code that always executes:

```php
<?php
try {
    $file = fopen("data.txt", "r");
    // Process file
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    if (isset($file)) {
        fclose($file);
    }
}
?>
```

## Custom Exceptions

Create your own exception classes:

```php
<?php
class ValidationException extends Exception {
    public function __construct($message, $code = 0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
    
    public function __toString() {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }
}

function validateEmail($email) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new ValidationException("Invalid email address");
    }
    return true;
}

try {
    validateEmail("invalid-email");
} catch (ValidationException $e) {
    echo $e->getMessage();
}
?>
```

## Error Reporting

Control error reporting:

```php
<?php
// Show all errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Hide errors in production
error_reporting(0);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');
?>
```

## Error Types

```php
<?php
// Fatal errors - cannot be caught
// Parse errors - syntax errors
// Warnings - non-fatal errors
// Notices - minor issues

// Trigger errors
trigger_error("This is a warning", E_USER_WARNING);
trigger_error("This is an error", E_USER_ERROR);
?>
```

## Custom Error Handler

```php
<?php
function customErrorHandler($errno, $errstr, $errfile, $errline) {
    echo "Error [$errno]: $errstr in $errfile on line $errline\n";
    return true;
}

set_error_handler("customErrorHandler");

// This will trigger the custom handler
echo $undefinedVariable;
?>
```

## Exception Handling Best Practices

1. **Be specific**: Catch specific exceptions first
2. **Log errors**: Always log errors for debugging
3. **Don't expose sensitive info**: Don't show detailed errors to users
4. **Use finally**: Clean up resources in finally blocks
5. **Create custom exceptions**: For better error handling

## Next Steps

Now let's learn about [File Operations](./file-operations)!

