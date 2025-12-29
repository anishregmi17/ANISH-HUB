# Common Features

Livewire comes with many built-in features to handle common web tasks.

## Pagination

Livewire makes pagination seamless. Use the `WithPagination` trait.

```php
use Livewire\WithPagination;

class ShowPosts extends Component
{
    use WithPagination;

    public function render()
    {
        return view('livewire.show-posts', [
            'posts' => Post::paginate(10),
        ]);
    }
}
```

## File Uploads

Handle file uploads with the `WithFileUploads` trait.

```php
use Livewire\WithFileUploads;

class UploadPhoto extends Component
{
    use WithFileUploads;

    public $photo;

    public function save()
    {
        $this->photo->store('photos');
    }
}
```

## SPA Mode (Navigate)

Livewire 3 allows for SPA-like navigation using `wire:navigate`.

```blade
<a href="/dashboard" wire:navigate>Dashboard</a>
```
This enables fast page transitions by only replacing the page body.

## Lazy Loading

Load heavy components only when they are needed.

```blade
<livewire:expensive-component lazy />
```

## Validation

Validation is built-in and feels just like Laravel controller validation.

```php
public function save()
{
    $this->validate([
        'name' => 'required|min:3',
    ]);
}
```
