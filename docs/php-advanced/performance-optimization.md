---
sidebar_position: 5
---

# Performance Optimization

Optimize your PHP applications for better speed and efficiency. Learn techniques to improve performance.

## Opcode Caching

Use OPcache to cache compiled PHP code:

```php
<?php
// php.ini configuration
// opcache.enable=1
// opcache.memory_consumption=128
// opcache.max_accelerated_files=10000

// Check if OPcache is enabled
if (function_exists('opcache_get_status')) {
    $status = opcache_get_status();
    if ($status['opcache_enabled']) {
        echo "OPcache is enabled";
    }
}
?>
```

## Database Optimization

```php
<?php
// Use indexes on frequently queried columns
// SELECT * FROM users WHERE email = ?  // email should be indexed

// Limit results
$stmt = $pdo->prepare("SELECT * FROM users LIMIT 10");

// Use SELECT only needed columns
$stmt = $pdo->prepare("SELECT id, name FROM users");

// Use prepared statements (they're cached)
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([1]);
$stmt->execute([2]);  // Reuses prepared statement
?>
```

## Caching

```php
<?php
// Simple file-based cache
class Cache {
    private $cacheDir = 'cache/';
    
    public function get($key) {
        $file = $this->cacheDir . md5($key) . '.cache';
        if (file_exists($file)) {
            $data = unserialize(file_get_contents($file));
            if ($data['expires'] > time()) {
                return $data['value'];
            }
            unlink($file);
        }
        return null;
    }
    
    public function set($key, $value, $ttl = 3600) {
        $file = $this->cacheDir . md5($key) . '.cache';
        $data = [
            'value' => $value,
            'expires' => time() + $ttl
        ];
        file_put_contents($file, serialize($data));
    }
}

// Usage
$cache = new Cache();
$data = $cache->get('users_list');
if ($data === null) {
    $data = fetchUsersFromDatabase();
    $cache->set('users_list', $data, 3600);
}
?>
```

## Lazy Loading

```php
<?php
class User {
    private $profile = null;
    
    public function getProfile() {
        if ($this->profile === null) {
            $this->profile = $this->loadProfile();
        }
        return $this->profile;
    }
    
    private function loadProfile() {
        // Load from database only when needed
        return fetchProfileFromDatabase($this->id);
    }
}
?>
```

## Avoid N+1 Query Problem

```php
<?php
// ❌ BAD - N+1 queries
$users = fetchAllUsers();
foreach ($users as $user) {
    $posts = fetchUserPosts($user->id);  // Query for each user
}

// ✅ GOOD - Single query with JOIN
$users = $pdo->query("
    SELECT u.*, p.* 
    FROM users u 
    LEFT JOIN posts p ON u.id = p.user_id
")->fetchAll(PDO::FETCH_GROUP);
?>
```

## Use Generators for Large Datasets

```php
<?php
// Generator - memory efficient
function fetchLargeDataset() {
    $stmt = $pdo->query("SELECT * FROM large_table");
    while ($row = $stmt->fetch()) {
        yield $row;
    }
}

foreach (fetchLargeDataset() as $row) {
    // Process row
    // Memory efficient - only one row in memory at a time
}
?>
```

## Minimize File Includes

```php
<?php
// Use autoloading instead of many require statements
require_once 'vendor/autoload.php';

// Use opcache for better performance
?>
```

## Optimize Arrays

```php
<?php
// Use isset() instead of array_key_exists() for better performance
if (isset($array['key'])) {
    // Faster
}

// Use array_column() for extracting values
$ids = array_column($users, 'id');

// Use array_filter() efficiently
$activeUsers = array_filter($users, fn($u) => $u->active);
?>
```

## Output Buffering

```php
<?php
// Start output buffering
ob_start();

// Your code here
echo "Content";

// Get and clean buffer
$content = ob_get_clean();
echo $content;
?>
```

## Connection Pooling

```php
<?php
// Reuse database connections
class DatabasePool {
    private static $connections = [];
    
    public static function getConnection($name = 'default') {
        if (!isset(self::$connections[$name])) {
            self::$connections[$name] = new PDO(
                "mysql:host=localhost;dbname=mydb",
                "user",
                "pass"
            );
        }
        return self::$connections[$name];
    }
}
?>
```

## Profiling

```php
<?php
// Measure execution time
$start = microtime(true);

// Your code here

$end = microtime(true);
$executionTime = $end - $start;
echo "Execution time: " . $executionTime . " seconds";

// Use Xdebug for detailed profiling
// xdebug.profiler_enable=1
?>
```

## Memory Management

```php
<?php
// Check memory usage
echo memory_get_usage() . " bytes\n";
echo memory_get_peak_usage() . " bytes\n";

// Unset large variables when done
unset($largeArray);

// Use unset() in loops for large datasets
foreach ($largeDataset as $item) {
    // Process item
    unset($item);  // Free memory
}
?>
```

## Next Steps

Now let's learn about [RESTful APIs](./restful-apis)!

