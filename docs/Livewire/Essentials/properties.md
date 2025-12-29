# Properties

Public properties on your Livewire component are automatically shared with the Blade view and are reactive.

## Defining Properties

```php
class Counter extends Component
{
    public $count = 0;
}
```

## Data Binding

Use `wire:model` to bind property values to input elements.

```blade
<input type="text" wire:model="count">
```

## Reactive Properties (v3)

You can now pass properties to child components and make them reactive.

```php
// In Parent
public $title = 'Hello';

// In Child
#[Reactive]
public $title;
```

## Computed Properties

Use the `#[Computed]` attribute for properties that are derived from other state.

```php
use Livewire\Attributes\Computed;

#[Computed]
public function user()
{
    return User::find($this->userId);
}
```
Access it in Blade as `$this->user`.
