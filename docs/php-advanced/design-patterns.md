---
sidebar_position: 2
---

# Design Patterns

Design patterns are reusable solutions to common problems in software design. They provide best practices for solving specific problems.

## Singleton Pattern

Ensures a class has only one instance:

```php
<?php
class Database {
    private static $instance = null;
    private $connection;
    
    private function __construct() {
        $this->connection = new PDO("mysql:host=localhost;dbname=mydb", "user", "pass");
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function getConnection() {
        return $this->connection;
    }
    
    private function __clone() {}
    public function __wakeup() {
        throw new Exception("Cannot unserialize singleton");
    }
}

// Usage
$db = Database::getInstance();
$connection = $db->getConnection();
?>
```

## Factory Pattern

Creates objects without specifying the exact class:

```php
<?php
interface PaymentMethod {
    public function pay($amount);
}

class CreditCard implements PaymentMethod {
    public function pay($amount) {
        return "Paid $amount using Credit Card";
    }
}

class PayPal implements PaymentMethod {
    public function pay($amount) {
        return "Paid $amount using PayPal";
    }
}

class PaymentFactory {
    public static function create($type) {
        switch ($type) {
            case "creditcard":
                return new CreditCard();
            case "paypal":
                return new PayPal();
            default:
                throw new Exception("Unknown payment method");
        }
    }
}

// Usage
$payment = PaymentFactory::create("creditcard");
echo $payment->pay(100);
?>
```

## Observer Pattern

Notifies multiple objects about state changes:

```php
<?php
interface Observer {
    public function update($data);
}

interface Subject {
    public function attach(Observer $observer);
    public function detach(Observer $observer);
    public function notify();
}

class NewsAgency implements Subject {
    private $observers = [];
    private $news;
    
    public function attach(Observer $observer) {
        $this->observers[] = $observer;
    }
    
    public function detach(Observer $observer) {
        $key = array_search($observer, $this->observers);
        if ($key !== false) {
            unset($this->observers[$key]);
        }
    }
    
    public function notify() {
        foreach ($this->observers as $observer) {
            $observer->update($this->news);
        }
    }
    
    public function setNews($news) {
        $this->news = $news;
        $this->notify();
    }
}

class NewsChannel implements Observer {
    private $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function update($data) {
        echo "{$this->name} received: $data\n";
    }
}

// Usage
$agency = new NewsAgency();
$channel1 = new NewsChannel("Channel 1");
$channel2 = new NewsChannel("Channel 2");

$agency->attach($channel1);
$agency->attach($channel2);
$agency->setNews("Breaking news!");
?>
```

## Strategy Pattern

Defines a family of algorithms and makes them interchangeable:

```php
<?php
interface SortStrategy {
    public function sort(array $data): array;
}

class BubbleSort implements SortStrategy {
    public function sort(array $data): array {
        // Bubble sort implementation
        $n = count($data);
        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n - $i - 1; $j++) {
                if ($data[$j] > $data[$j + 1]) {
                    [$data[$j], $data[$j + 1]] = [$data[$j + 1], $data[$j]];
                }
            }
        }
        return $data;
    }
}

class QuickSort implements SortStrategy {
    public function sort(array $data): array {
        // Quick sort implementation
        if (count($data) <= 1) {
            return $data;
        }
        $pivot = $data[0];
        $left = $right = [];
        for ($i = 1; $i < count($data); $i++) {
            if ($data[$i] < $pivot) {
                $left[] = $data[$i];
            } else {
                $right[] = $data[$i];
            }
        }
        return array_merge($this->sort($left), [$pivot], $this->sort($right));
    }
}

class Sorter {
    private $strategy;
    
    public function __construct(SortStrategy $strategy) {
        $this->strategy = $strategy;
    }
    
    public function setStrategy(SortStrategy $strategy) {
        $this->strategy = $strategy;
    }
    
    public function sort(array $data): array {
        return $this->strategy->sort($data);
    }
}

// Usage
$data = [3, 1, 4, 1, 5, 9, 2, 6];
$sorter = new Sorter(new BubbleSort());
$sorted = $sorter->sort($data);

$sorter->setStrategy(new QuickSort());
$sorted = $sorter->sort($data);
?>
```

## Repository Pattern

Abstracts data access logic:

```php
<?php
interface UserRepository {
    public function find($id);
    public function findAll();
    public function save(User $user);
    public function delete($id);
}

class User {
    public $id;
    public $name;
    public $email;
}

class DatabaseUserRepository implements UserRepository {
    private $pdo;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }
    
    public function find($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetchObject(User::class);
    }
    
    public function findAll() {
        $stmt = $this->pdo->query("SELECT * FROM users");
        return $stmt->fetchAll(PDO::FETCH_CLASS, User::class);
    }
    
    public function save(User $user) {
        if ($user->id) {
            $stmt = $this->pdo->prepare("UPDATE users SET name = ?, email = ? WHERE id = ?");
            $stmt->execute([$user->name, $user->email, $user->id]);
        } else {
            $stmt = $this->pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
            $stmt->execute([$user->name, $user->email]);
            $user->id = $this->pdo->lastInsertId();
        }
    }
    
    public function delete($id) {
        $stmt = $this->pdo->prepare("DELETE FROM users WHERE id = ?");
        $stmt->execute([$id]);
    }
}

// Usage
$pdo = new PDO("mysql:host=localhost;dbname=mydb", "user", "pass");
$repository = new DatabaseUserRepository($pdo);
$user = $repository->find(1);
?>
```

## Dependency Injection

Pass dependencies into a class rather than creating them inside:

```php
<?php
class Logger {
    public function log($message) {
        echo "Log: $message\n";
    }
}

class UserService {
    private $logger;
    
    public function __construct(Logger $logger) {
        $this->logger = $logger;
    }
    
    public function createUser($name) {
        $this->logger->log("Creating user: $name");
        // Create user logic
    }
}

// Usage
$logger = new Logger();
$userService = new UserService($logger);
$userService->createUser("Anish");
?>
```

## Next Steps

Now let's learn about [Autoloading and Composer](./autoloading-and-composer)!

