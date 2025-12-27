---
sidebar_position: 5
---

# File Operations

PHP provides many functions for working with files and directories. Learn how to read, write, and manipulate files.

## Reading Files

### Read entire file

```php
<?php
// Read entire file
$content = file_get_contents("data.txt");
echo $content;

// Read file into array (line by line)
$lines = file("data.txt");
foreach ($lines as $line) {
    echo $line;
}
?>
```

### Read file line by line

```php
<?php
$file = fopen("data.txt", "r");

if ($file) {
    while (($line = fgets($file)) !== false) {
        echo $line;
    }
    fclose($file);
}
?>
```

## Writing Files

```php
<?php
// Write to file (overwrites existing content)
file_put_contents("output.txt", "Hello, World!");

// Append to file
file_put_contents("output.txt", "\nNew line", FILE_APPEND);

// Using file handle
$file = fopen("output.txt", "w");
fwrite($file, "Hello, World!");
fclose($file);
?>
```

## File Information

```php
<?php
$filename = "data.txt";

// Check if file exists
if (file_exists($filename)) {
    echo "File exists\n";
    
    // Get file size
    echo "Size: " . filesize($filename) . " bytes\n";
    
    // Get file modification time
    echo "Modified: " . date("Y-m-d H:i:s", filemtime($filename)) . "\n";
    
    // Get file type
    echo "Type: " . filetype($filename) . "\n";
    
    // Check if readable/writable
    echo "Readable: " . (is_readable($filename) ? "Yes" : "No") . "\n";
    echo "Writable: " . (is_writable($filename) ? "Yes" : "No") . "\n";
}
?>
```

## Working with Directories

```php
<?php
// Create directory
mkdir("new_directory");

// Create nested directories
mkdir("path/to/directory", 0777, true);

// Check if directory exists
if (is_dir("directory")) {
    echo "Directory exists";
}

// List directory contents
$files = scandir(".");
foreach ($files as $file) {
    if ($file != "." && $file != "..") {
        echo $file . "\n";
    }
}

// Remove directory
rmdir("empty_directory");
?>
```

## File Upload

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    
    // Check if file already exists
    if (file_exists($targetFile)) {
        echo "File already exists.";
        $uploadOk = 0;
    }
    
    // Check file size (5MB)
    if ($_FILES["file"]["size"] > 5000000) {
        echo "File is too large.";
        $uploadOk = 0;
    }
    
    // Allow certain file formats
    $allowedTypes = ["jpg", "jpeg", "png", "gif"];
    if (!in_array($imageFileType, $allowedTypes)) {
        echo "Only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }
    
    // Upload file
    if ($uploadOk == 1) {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            echo "File uploaded successfully.";
        } else {
            echo "Error uploading file.";
        }
    }
}
?>
```

## CSV File Operations

```php
<?php
// Read CSV
$file = fopen("data.csv", "r");
while (($data = fgetcsv($file)) !== false) {
    print_r($data);
}
fclose($file);

// Write CSV
$file = fopen("output.csv", "w");
$data = [
    ["Name", "Age", "City"],
    ["Anish", "25", "Kathmandu"],
    ["John", "30", "New York"]
];
foreach ($data as $row) {
    fputcsv($file, $row);
}
fclose($file);
?>
```

## JSON File Operations

```php
<?php
// Read JSON
$json = file_get_contents("data.json");
$data = json_decode($json, true);

// Write JSON
$data = [
    "name" => "Anish",
    "age" => 25,
    "city" => "Kathmandu"
];
$json = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents("output.json", $json);
?>
```

## Next Steps

Now let's learn about [Working with Forms](./working-with-forms)!

