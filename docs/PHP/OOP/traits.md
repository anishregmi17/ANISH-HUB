---
sidebar_position: 9
---

# Traits

PHP does not support multiple inheritance (a class cannot extend two classes). **Traits** solve this by allowing you to reuse sets of methods in several independent classes.

## Defining a Trait
```php
trait Sharable {
    public function share($platform) {
        echo "Shared to $platform!";
    }
}

trait Commentable {
    public function addComment($text) {
        echo "Comment added: $text";
    }
}
```

## Using a Trait
Use the `use` keyword inside a class.

```php
class Post {
    use Sharable, Commentable;
}

class Photo {
    use Sharable;
}

$post = new Post();
$post->share("Facebook");
$post->addComment("Great post!");

$photo = new Photo();
$photo->share("Instagram");
```
