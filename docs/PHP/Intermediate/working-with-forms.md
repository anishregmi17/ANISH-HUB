---
sidebar_position: 6
---

# Working with Forms

Forms are essential for collecting user input. Learn how to create and process HTML forms with PHP.

## Basic Form

```html
<form method="POST" action="process.php">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Submit</button>
</form>
```

## Processing Form Data

```php
<?php
// process.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    
    // Validate and process
    if (!empty($name) && !empty($email)) {
        echo "Name: " . htmlspecialchars($name) . "<br>";
        echo "Email: " . htmlspecialchars($email) . "<br>";
    }
}
?>
```

## Form Validation

```php
<?php
function validateForm($data) {
    $errors = [];
    
    // Validate name
    if (empty($data["name"])) {
        $errors["name"] = "Name is required";
    } elseif (strlen($data["name"]) < 3) {
        $errors["name"] = "Name must be at least 3 characters";
    }
    
    // Validate email
    if (empty($data["email"])) {
        $errors["email"] = "Email is required";
    } elseif (!filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Invalid email format";
    }
    
    return $errors;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = validateForm($_POST);
    
    if (empty($errors)) {
        // Process form
        echo "Form is valid!";
    } else {
        // Display errors
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>
```

## Sanitizing Input

```php
<?php
// Sanitize string
$name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
$name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");

// Sanitize email
$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
$email = filter_var($email, FILTER_VALIDATE_EMAIL);

// Sanitize integer
$age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);
$age = filter_var($age, FILTER_VALIDATE_INT);

// Sanitize URL
$url = filter_input(INPUT_POST, "url", FILTER_SANITIZE_URL);
$url = filter_var($url, FILTER_VALIDATE_URL);
?>
```

## GET vs POST

```php
<?php
// GET method - data in URL
// form.html
// <form method="GET" action="search.php">
//     <input type="text" name="query">
//     <button type="submit">Search</button>
// </form>

// search.php
$query = $_GET["query"] ?? "";
echo "Searching for: " . htmlspecialchars($query);

// POST method - data in request body
// More secure for sensitive data
?>
```

## File Upload Form

```html
<form method="POST" action="upload.php" enctype="multipart/form-data">
    <input type="file" name="file" accept="image/*">
    <button type="submit">Upload</button>
</form>
```

```php
<?php
// upload.php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $file = $_FILES["file"];
    
    if ($file["error"] == UPLOAD_ERR_OK) {
        $tmpName = $file["tmp_name"];
        $fileName = $file["name"];
        $uploadPath = "uploads/" . $fileName;
        
        if (move_uploaded_file($tmpName, $uploadPath)) {
            echo "File uploaded successfully!";
        }
    }
}
?>
```

## CSRF Protection

```php
<?php
session_start();

// Generate CSRF token
function generateCSRFToken() {
    if (empty($_SESSION["csrf_token"])) {
        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    }
    return $_SESSION["csrf_token"];
}

// Verify CSRF token
function verifyCSRFToken($token) {
    return isset($_SESSION["csrf_token"]) && hash_equals($_SESSION["csrf_token"], $token);
}

// In form
$token = generateCSRFToken();
?>
<form method="POST" action="process.php">
    <input type="hidden" name="csrf_token" value="<?php echo $token; ?>">
    <!-- form fields -->
</form>

<?php
// In process.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!verifyCSRFToken($_POST["csrf_token"] ?? "")) {
        die("Invalid CSRF token");
    }
    // Process form
}
?>
```

## Next Steps

Now let's learn about [Sessions and Cookies](./sessions-and-cookies)!

