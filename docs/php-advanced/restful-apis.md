---
sidebar_position: 6
---

# RESTful APIs

REST (Representational State Transfer) is an architectural style for designing web services. Learn how to build RESTful APIs with PHP.

## What is REST?

REST is a set of principles for designing web services:
- **Stateless**: Each request contains all information needed
- **Resource-based**: URLs represent resources
- **HTTP Methods**: Use GET, POST, PUT, DELETE
- **JSON**: Common data format

## Basic API Structure

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PATH_INFO'] ?? '/';

switch ($method) {
    case 'GET':
        handleGet($path);
        break;
    case 'POST':
        handlePost($path);
        break;
    case 'PUT':
        handlePut($path);
        break;
    case 'DELETE':
        handleDelete($path);
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
}
?>
```

## GET Request

```php
<?php
function handleGet($path) {
    if ($path === '/users') {
        $users = getAllUsers();
        echo json_encode($users);
    } elseif (preg_match('/\/users\/(\d+)/', $path, $matches)) {
        $userId = $matches[1];
        $user = getUserById($userId);
        if ($user) {
            echo json_encode($user);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
        }
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
    }
}
?>
```

## POST Request

```php
<?php
function handlePost($path) {
    if ($path === '/users') {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Validate data
        if (!isset($data['name']) || !isset($data['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing required fields']);
            return;
        }
        
        $user = createUser($data);
        http_response_code(201);
        echo json_encode($user);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
    }
}
?>
```

## PUT Request

```php
<?php
function handlePut($path) {
    if (preg_match('/\/users\/(\d+)/', $path, $matches)) {
        $userId = $matches[1];
        $data = json_decode(file_get_contents('php://input'), true);
        
        $user = updateUser($userId, $data);
        if ($user) {
            echo json_encode($user);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
        }
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
    }
}
?>
```

## DELETE Request

```php
<?php
function handleDelete($path) {
    if (preg_match('/\/users\/(\d+)/', $path, $matches)) {
        $userId = $matches[1];
        
        if (deleteUser($userId)) {
            http_response_code(204);  // No content
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
        }
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
    }
}
?>
```

## API Response Helper

```php
<?php
class ApiResponse {
    public static function success($data, $statusCode = 200) {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'data' => $data
        ]);
        exit;
    }
    
    public static function error($message, $statusCode = 400) {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode([
            'success' => false,
            'error' => $message
        ]);
        exit;
    }
}

// Usage
ApiResponse::success(['users' => $users]);
ApiResponse::error('User not found', 404);
?>
```

## Authentication

```php
<?php
function authenticate() {
    $headers = getallheaders();
    $token = $headers['Authorization'] ?? '';
    
    if (strpos($token, 'Bearer ') === 0) {
        $token = substr($token, 7);
    }
    
    // Validate token
    if (!validateToken($token)) {
        ApiResponse::error('Unauthorized', 401);
    }
    
    return getUserIdFromToken($token);
}

function validateToken($token) {
    // Implement token validation
    // Check against database or JWT verification
    return true;  // Simplified
}
?>
```

## API Versioning

```php
<?php
$path = $_SERVER['PATH_INFO'] ?? '/';
$pathParts = explode('/', trim($path, '/'));

if ($pathParts[0] === 'v1') {
    // Version 1 API
    $resource = $pathParts[1] ?? '';
} elseif ($pathParts[0] === 'v2') {
    // Version 2 API
    $resource = $pathParts[1] ?? '';
} else {
    // Default version
    $resource = $pathParts[0] ?? '';
}
?>
```

## Pagination

```php
<?php
function getUsers($page = 1, $perPage = 10) {
    $offset = ($page - 1) * $perPage;
    
    $pdo = getDatabaseConnection();
    $stmt = $pdo->prepare("SELECT * FROM users LIMIT :limit OFFSET :offset");
    $stmt->bindValue(':limit', $perPage, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Get total count
    $countStmt = $pdo->query("SELECT COUNT(*) FROM users");
    $total = $countStmt->fetchColumn();
    
    return [
        'data' => $users,
        'pagination' => [
            'page' => $page,
            'per_page' => $perPage,
            'total' => $total,
            'total_pages' => ceil($total / $perPage)
        ]
    ];
}
?>
```

## Rate Limiting

```php
<?php
function checkRateLimit($identifier, $limit = 100, $window = 3600) {
    $key = "rate_limit_{$identifier}";
    $file = sys_get_temp_dir() . '/' . md5($key) . '.txt';
    
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
        if (time() - $data['reset_time'] < $window) {
            if ($data['count'] >= $limit) {
                return false;
            }
            $data['count']++;
        } else {
            $data = ['count' => 1, 'reset_time' => time()];
        }
    } else {
        $data = ['count' => 1, 'reset_time' => time()];
    }
    
    file_put_contents($file, json_encode($data));
    return true;
}
?>
```

## Next Steps

Now let's learn about [Testing with PHPUnit](./testing)!

