---
sidebar_position: 8
---

# Database Operations

PHP provides several ways to interact with databases. Learn how to connect to databases and perform CRUD operations.

## MySQLi (Object-Oriented)

```php
<?php
// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create table
$sql = "CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
```

## Insert Data

```php
<?php
$conn = new mysqli($servername, $username, $password, $dbname);

// Prepared statement (recommended)
$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);

$name = "Anish";
$email = "anish@example.com";
$stmt->execute();

echo "New record created";
$stmt->close();
$conn->close();
?>
```

## Select Data

```php
<?php
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT id, name, email FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
```

## Update Data

```php
<?php
$conn = new mysqli($servername, $username, $password, $dbname);

$stmt = $conn->prepare("UPDATE users SET name = ?, email = ? WHERE id = ?");
$stmt->bind_param("ssi", $name, $email, $id);

$name = "Anish Regmi";
$email = "anish.regmi@example.com";
$id = 1;
$stmt->execute();

echo "Record updated";
$stmt->close();
$conn->close();
?>
```

## Delete Data

```php
<?php
$conn = new mysqli($servername, $username, $password, $dbname);

$stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
$stmt->bind_param("i", $id);

$id = 1;
$stmt->execute();

echo "Record deleted";
$stmt->close();
$conn->close();
?>
```

## PDO (PHP Data Objects)

PDO provides a more flexible database abstraction layer:

```php
<?php
try {
    $pdo = new PDO(
        "mysql:host=$servername;dbname=$dbname",
        $username,
        $password
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Insert
    $stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
    $stmt->execute([
        ":name" => "Anish",
        ":email" => "anish@example.com"
    ]);
    
    // Select
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
    $stmt->execute([":id" => 1]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Update
    $stmt = $pdo->prepare("UPDATE users SET name = :name WHERE id = :id");
    $stmt->execute([
        ":name" => "Anish Regmi",
        ":id" => 1
    ]);
    
    // Delete
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = :id");
    $stmt->execute([":id" => 1]);
    
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

## Database Class Example

```php
<?php
class Database {
    private $conn;
    
    public function __construct($servername, $username, $password, $dbname) {
        $this->conn = new mysqli($servername, $username, $password, $dbname);
        
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }
    
    public function query($sql, $params = []) {
        $stmt = $this->conn->prepare($sql);
        
        if (!empty($params)) {
            $types = str_repeat("s", count($params));
            $stmt->bind_param($types, ...$params);
        }
        
        $stmt->execute();
        return $stmt->get_result();
    }
    
    public function close() {
        $this->conn->close();
    }
}

// Usage
$db = new Database($servername, $username, $password, $dbname);
$result = $db->query("SELECT * FROM users WHERE id = ?", [1]);
$db->close();
?>
```

## Security Best Practices

1. **Always use prepared statements** to prevent SQL injection
2. **Validate and sanitize input** before database operations
3. **Use parameterized queries** instead of string concatenation
4. **Limit database user permissions** to only what's needed
5. **Use connection pooling** for better performance
6. **Handle errors gracefully** without exposing sensitive information

## Next Steps

Now let's learn about [Regular Expressions](./regular-expressions)!

