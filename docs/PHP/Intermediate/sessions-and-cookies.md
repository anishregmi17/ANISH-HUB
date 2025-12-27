---
sidebar_position: 7
---

# Sessions and Cookies

Sessions and cookies are used to store data across multiple page requests. Learn how to use them effectively in PHP.

## Sessions

Sessions store data on the server and associate it with a session ID stored in a cookie.

### Starting a Session

```php
<?php
session_start();

// Store data in session
$_SESSION["username"] = "Anish";
$_SESSION["user_id"] = 123;

// Access session data
echo $_SESSION["username"];  // Anish
?>
```

### Session Example

```php
<?php
session_start();

// Login
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Validate credentials (simplified)
    if ($username === "admin" && $password === "password") {
        $_SESSION["logged_in"] = true;
        $_SESSION["username"] = $username;
        header("Location: dashboard.php");
        exit;
    }
}

// Check if logged in
if (isset($_SESSION["logged_in"]) && $_SESSION["logged_in"] === true) {
    echo "Welcome, " . $_SESSION["username"];
} else {
    echo "Please log in";
}
?>
```

### Destroying a Session

```php
<?php
session_start();

// Remove all session variables
session_unset();

// Destroy the session
session_destroy();

// Or remove specific session variable
unset($_SESSION["username"]);
?>
```

### Session Configuration

```php
<?php
// Configure session settings
ini_set("session.cookie_lifetime", 3600);  // 1 hour
ini_set("session.gc_maxlifetime", 3600);    // 1 hour

// Start session with custom settings
session_start([
    "cookie_lifetime" => 3600,
    "cookie_secure" => true,    // HTTPS only
    "cookie_httponly" => true,  // Prevent JavaScript access
    "use_strict_mode" => true
]);
?>
```

## Cookies

Cookies store data on the client's browser.

### Setting Cookies

```php
<?php
// Set a cookie
setcookie("username", "Anish", time() + 3600);  // Expires in 1 hour

// Set cookie with options
setcookie(
    "theme",
    "dark",
    [
        "expires" => time() + 86400,  // 1 day
        "path" => "/",
        "domain" => "example.com",
        "secure" => true,    // HTTPS only
        "httponly" => true,  // Prevent JavaScript access
        "samesite" => "Strict"
    ]
);
?>
```

### Reading Cookies

```php
<?php
// Read cookie
if (isset($_COOKIE["username"])) {
    echo "Username: " . $_COOKIE["username"];
}

// Read with default value
$theme = $_COOKIE["theme"] ?? "light";
?>
```

### Deleting Cookies

```php
<?php
// Delete cookie by setting expiration in the past
setcookie("username", "", time() - 3600);
?>
```

## Session vs Cookies

| Feature | Sessions | Cookies |
|---------|----------|---------|
| Storage | Server-side | Client-side |
| Security | More secure | Less secure |
| Size limit | No limit | 4KB |
| Data type | Any PHP type | Strings only |
| Persistence | Until browser closes | Configurable |

## Best Practices

1. **Always use `session_start()`** before accessing `$_SESSION`
2. **Sanitize session data** before storing
3. **Regenerate session ID** after login for security
4. **Use HTTPS** for sensitive data
5. **Set appropriate expiration** times
6. **Validate session data** before using

## Security Considerations

```php
<?php
session_start();

// Regenerate session ID to prevent session fixation
session_regenerate_id(true);

// Set secure session cookie
ini_set("session.cookie_secure", 1);
ini_set("session.cookie_httponly", 1);
ini_set("session.use_strict_mode", 1);

// Validate session data
if (!isset($_SESSION["user_id"]) || !is_numeric($_SESSION["user_id"])) {
    // Invalid session, redirect to login
    header("Location: login.php");
    exit;
}
?>
```

## Next Steps

Now let's learn about [Database Operations](./database-operations)!

