# Actions

Actions are methods on your component class that can be triggered from the frontend.

## Triggering Actions

Use `wire:click`, `wire:submit`, etc., to call methods.

```blade
<button wire:click="increment">Increment</button>
```

```php
public function increment()
{
    $this->count++;
}
```

## Passing Parameters

```blade
<button wire:click="deletePost({{ $post->id }})">Delete</button>
```

## Action Modifiers

- `.prevent`: Equivalent to `event.preventDefault()`.
- `.stop`: Equivalent to `event.stopPropagation()`.

```blade
<form wire:submit.prevent="save">
    ...
</form>
```
