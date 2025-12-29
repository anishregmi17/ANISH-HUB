# Forms, Events & Lifecycle

## Forms

Livewire 3 introduces **Form Objects** to keep your components clean.

```php
// app/Livewire/Forms/PostForm.php
class PostForm extends Form
{
    #[Rule('required|min:5')]
    public $title = '';
 
    #[Rule('required')]
    public $content = '';
}

// In Component
public PostForm $form;

public function save()
{
    $this->form->validate();
    Post::create($this->form->all());
}
```

## Events

Livewire components can communicate via events.

```php
// Dispatching
$this->dispatch('post-created');

// Listening (in another component)
#[On('post-created')]
public function updateList() { ... }
```

## Lifecycle Hooks

Run code at specific points in the component's execution.

- `mount()`: Runs once when the component is first initialized.
- `hydrate()`: Runs on every subsequent request.
- `boot()`: Runs on every single request.
- `updating()` / `updated()`: Runs when a property is changed.

```php
public function mount($id)
{
    $this->post = Post::find($id);
}
```
