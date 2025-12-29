# Components

Components are the building blocks of Livewire. They consist of a PHP class and a Blade template.

## Rendering Components

You can render a Livewire component in your Blade views using the `<livewire:component-name />` tag.

```blade
<div>
    <h1>My Page</h1>
    <livewire:counter />
</div>
```

## Inline Components

For very simple components, you can use an inline component that doesn't require a separate Blade file.

```php
namespace App\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public function render()
    {
        return <<<'HTML'
            <div>
                <!-- Your HTML here -->
            </div>
        HTML;
    }
}
```

## Nesting Components

Components can be nested within each other. However, you should avoid deep nesting for performance reasons.

```blade
<div>
    <livewire:parent-component>
        <livewire:child-component />
    </livewire:parent-component>
</div>
```
