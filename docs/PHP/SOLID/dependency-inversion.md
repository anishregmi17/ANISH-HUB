---
sidebar_position: 5
---

# Dependency Inversion Principle (DIP)

## The Principle
> High-level modules should not depend on low-level modules. Both should depend on abstractions.

You should rely on **interfaces**, not concrete classes.

## ❌ Bad Code (Coupled)
`PasswordReminder` (High Level) is tightly coupled to `MySQLConnection` (Low Level).

```php
class MySQLConnection {
    public function connect() { return "Connected to MySQL"; }
}

class PasswordReminder {
    private $db;

    public function __construct() {
        // Tight coupling! What if we want to change to PostgreSQL?
        $this->db = new MySQLConnection();
    }
}
```

## ✅ Good Code (Decoupled)
Inject the interface.

```php
// 1. Abstraction
interface DBConnection {
    public function connect();
}

// 2. Low-level module
class MySQLConnection implements DBConnection {
    public function connect() { return "Connected to MySQL"; }
}

class PostgresConnection implements DBConnection {
    public function connect() { return "Connected to Postgres"; }
}

// 3. High-level module
class PasswordReminder {
    private $db;

    // Dependency Injection: We ask for "ANY" DBConnection
    public function __construct(DBConnection $db) {
        $this->db = $db;
    }
}

// Now we can easily switch!
$app = new PasswordReminder(new MySQLConnection());
$app2 = new PasswordReminder(new PostgresConnection());
```
