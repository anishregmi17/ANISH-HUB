---
sidebar_position: 3
---

# Traits

Traits are a mechanism for code reuse in single inheritance languages like PHP. They allow you to reuse methods in multiple classes.

## What are Traits?

Traits are similar to classes but are intended to group functionality in a fine-grained and consistent way.

## Basic Trait

```php
<?php
trait Loggable {
    public function log($message) {
        echo "Log: " . $message . "\n";
    }
}

class User {
    use Loggable;
    
    public function create() {
        $this->log("User created");
    }
}

$user = new User();
$user->create();  // Output: Log: User created
?>
```

## Multiple Traits

A class can use multiple traits:

```php
<?php
trait Loggable {
    public function log($message) {
        echo "Log: $message\n";
    }
}

trait Timestampable {
    public function getTimestamp() {
        return date('Y-m-d H:i:s');
    }
}

class Post {
    use Loggable, Timestampable;
    
    public function publish() {
        $this->log("Post published at " . $this->getTimestamp());
    }
}

$post = new Post();
$post->publish();
?>
```

## Trait Methods with Same Name

When multiple traits have methods with the same name, you need to resolve conflicts:

```php
<?php
trait A {
    public function test() {
        return "A";
    }
}

trait B {
    public function test() {
        return "B";
    }
}

class MyClass {
    use A, B {
        B::test insteadof A;  // Use B's test method
        A::test as testA;     // Keep A's test as testA
    }
}

$obj = new MyClass();
echo $obj->test();   // B
echo $obj->testA();  // A
?>
```

## Changing Method Visibility

```php
<?php
trait MyTrait {
    private function privateMethod() {
        return "Private";
    }
}

class MyClass {
    use MyTrait {
        privateMethod as public publicMethod;
    }
}

$obj = new MyClass();
echo $obj->publicMethod();  // Works!
?>
```

## Abstract Methods in Traits

```php
<?php
trait Renderable {
    abstract public function render();
    
    public function display() {
        echo $this->render();
    }
}

class View {
    use Renderable;
    
    public function render() {
        return "<div>Content</div>";
    }
}

$view = new View();
$view->display();
?>
```

## Trait Properties

```php
<?php
trait Properties {
    public $x = 1;
    public $y = 2;
}

class MyClass {
    use Properties;
}

$obj = new MyClass();
echo $obj->x;  // 1
?>
```

## Next Steps

Now let's learn about [Error Handling](./error-handling)!

