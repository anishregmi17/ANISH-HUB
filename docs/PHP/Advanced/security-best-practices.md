---
sidebar_position: 4
---

# Security Best Practices

Security is crucial for web applications. Learn how to protect your PHP applications from common vulnerabilities.

## SQL Injection Prevention

**Always use prepared statements:**

```php
<?php
// ❌ BAD - Vulnerable to SQL injection
$id = $_GET['id'];
$sql = "SELECT * FROM users WHERE id = $id";
$result = $conn->query($sql);

// ✅ GOOD - Using prepared statements
$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
?>
```

## XSS (Cross-Site Scripting) Prevention

**Always escape output:**

```php
<?php
// ❌ BAD - Vulnerable to XSS
echo $_GET['name'];

// ✅ GOOD - Escape output
echo htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');

// In templates
<?php echo htmlspecialchars($user->name, ENT_QUOTES, 'UTF-8'); ?>
```

## CSRF Protection

```php
<?php
session_start();

// Generate token
function generateCSRFToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify token
function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && 
           hash_equals($_SESSION['csrf_token'], $token);
}

// In form
$token = generateCSRFToken();
?>
<form method="POST">
    <input type="hidden" name="csrf_token" value="<?php echo $token; ?>">
    <!-- form fields -->
</form>

<?php
// Verify on submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCSRFToken($_POST['csrf_token'] ?? '')) {
        die('Invalid CSRF token');
    }
    // Process form
}
?>
```

## Password Hashing

**Never store plain text passwords:**

```php
<?php
// ❌ BAD
$password = $_POST['password'];
// Store directly in database

// ✅ GOOD - Use password_hash
$password = $_POST['password'];
$hash = password_hash($password, PASSWORD_DEFAULT);

// Store $hash in database

// Verify password
if (password_verify($password, $hash)) {
    // Password is correct
}
?>
```

## Input Validation

```php
<?php
function validateInput($data, $type) {
    switch ($type) {
        case 'email':
            return filter_var($data, FILTER_VALIDATE_EMAIL);
        case 'int':
            return filter_var($data, FILTER_VALIDATE_INT);
        case 'url':
            return filter_var($data, FILTER_VALIDATE_URL);
        case 'string':
            return filter_var($data, FILTER_SANITIZE_STRING);
        default:
            return false;
    }
}

$email = validateInput($_POST['email'], 'email');
if (!$email) {
    die('Invalid email');
}
?>
```

## File Upload Security

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // Check for errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        die('Upload error');
    }
    
    // Check file size (5MB max)
    if ($file['size'] > 5000000) {
        die('File too large');
    }
    
    // Check file type
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, $allowedTypes)) {
        die('Invalid file type');
    }
    
    // Generate safe filename
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid() . '.' . $extension;
    $uploadPath = 'uploads/' . $filename;
    
    // Move uploaded file
    if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
        echo 'File uploaded successfully';
    }
}
?>
```

## Session Security

```php
<?php
// Secure session configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);  // HTTPS only
ini_set('session.use_strict_mode', 1);
ini_set('session.cookie_samesite', 'Strict');

session_start();

// Regenerate session ID after login
session_regenerate_id(true);

// Set session timeout
$_SESSION['last_activity'] = time();
if (isset($_SESSION['last_activity']) && 
    (time() - $_SESSION['last_activity'] > 1800)) {
    session_unset();
    session_destroy();
}
?>
```

## HTTPS Enforcement

```php
<?php
// Force HTTPS
if (!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] !== 'on') {
    $redirectURL = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header("Location: $redirectURL");
    exit();
}
?>
```

## Headers Security

```php
<?php
// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
header('Content-Security-Policy: default-src \'self\'');
?>
```

## Error Handling

**Don't expose sensitive information:**

```php
<?php
// Development
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Production
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');
error_reporting(0);
?>
```

## Rate Limiting

```php
<?php
function checkRateLimit($identifier, $maxAttempts = 5, $window = 300) {
    $file = sys_get_temp_dir() . '/ratelimit_' . md5($identifier) . '.txt';
    
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
        if (time() - $data['time'] < $window) {
            if ($data['attempts'] >= $maxAttempts) {
                return false;
            }
            $data['attempts']++;
        } else {
            $data = ['attempts' => 1, 'time' => time()];
        }
    } else {
        $data = ['attempts' => 1, 'time' => time()];
    }
    
    file_put_contents($file, json_encode($data));
    return true;
}

if (!checkRateLimit($_SERVER['REMOTE_ADDR'])) {
    die('Too many requests. Please try again later.');
}
?>
```

## Next Steps

Now let's learn about [Performance Optimization](./performance-optimization)!

