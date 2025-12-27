---
sidebar_position: 7
---

# Testing with PHPUnit

Testing ensures your code works correctly. PHPUnit is the standard testing framework for PHP.

## Installation

```bash
composer require --dev phpunit/phpunit
```

## Basic Test

```php
<?php
// tests/CalculatorTest.php
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase {
    public function testAddition() {
        $calculator = new Calculator();
        $result = $calculator->add(2, 3);
        $this->assertEquals(5, $result);
    }
}
```

## Assertions

```php
<?php
use PHPUnit\Framework\TestCase;

class AssertionsTest extends TestCase {
    public function testAssertions() {
        // Equality
        $this->assertEquals(5, 5);
        $this->assertNotEquals(5, 4);
        
        // Identity
        $this->assertSame(5, 5);
        $this->assertNotSame('5', 5);
        
        // True/False
        $this->assertTrue(true);
        $this->assertFalse(false);
        
        // Null
        $this->assertNull(null);
        $this->assertNotNull('value');
        
        // Arrays
        $this->assertArrayHasKey('key', ['key' => 'value']);
        $this->assertContains('value', ['value1', 'value2']);
        
        // Objects
        $this->assertInstanceOf(MyClass::class, $object);
        $this->assertObjectHasAttribute('property', $object);
        
        // Strings
        $this->assertStringContainsString('needle', 'haystack');
        $this->assertMatchesRegularExpression('/pattern/', 'string');
    }
}
?>
```

## Test Database

```php
<?php
use PHPUnit\Framework\TestCase;

class UserRepositoryTest extends TestCase {
    private $pdo;
    
    protected function setUp(): void {
        $this->pdo = new PDO('sqlite::memory:');
        $this->pdo->exec("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");
    }
    
    protected function tearDown(): void {
        $this->pdo = null;
    }
    
    public function testCreateUser() {
        $repository = new UserRepository($this->pdo);
        $user = $repository->create(['name' => 'Anish', 'email' => 'anish@example.com']);
        
        $this->assertNotNull($user->id);
        $this->assertEquals('Anish', $user->name);
    }
}
?>
```

## Mocking

```php
<?php
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;

class UserServiceTest extends TestCase {
    public function testSendEmail() {
        $emailService = $this->createMock(EmailService::class);
        $emailService->expects($this->once())
                     ->method('send')
                     ->with($this->equalTo('anish@example.com'))
                     ->willReturn(true);
        
        $userService = new UserService($emailService);
        $result = $userService->notifyUser('anish@example.com');
        
        $this->assertTrue($result);
    }
}
?>
```

## Data Providers

```php
<?php
use PHPUnit\Framework\TestCase;

class MathTest extends TestCase {
    /**
     * @dataProvider additionProvider
     */
    public function testAdd($a, $b, $expected) {
        $this->assertEquals($expected, $a + $b);
    }
    
    public function additionProvider() {
        return [
            [0, 0, 0],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 2],
        ];
    }
}
?>
```

## Exception Testing

```php
<?php
use PHPUnit\Framework\TestCase;

class ExceptionTest extends TestCase {
    public function testException() {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Invalid value');
        
        throw new InvalidArgumentException('Invalid value');
    }
}
?>
```

## PHPUnit Configuration

```xml
<!-- phpunit.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<phpunit bootstrap="vendor/autoload.php">
    <testsuites>
        <testsuite name="Application Test Suite">
            <directory>./tests</directory>
        </testsuite>
    </testsuites>
</phpunit>
```

## Running Tests

```bash
# Run all tests
vendor/bin/phpunit

# Run specific test file
vendor/bin/phpunit tests/CalculatorTest.php

# Run with coverage
vendor/bin/phpunit --coverage-html coverage/
```

## Next Steps

Now let's learn about [PSR Standards](./psr-standards)!

