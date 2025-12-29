# Livewire Directives

A list of common `wire:` directives used in your templates.

| Directive | Description |
| :--- | :--- |
| `wire:model` | Binds property to input element |
| `wire:click` | Listens for click events |
| `wire:submit` | Listens for form submissions |
| `wire:loading` | Shows/hides elements while a request is active |
| `wire:navigate` | Enables SPA-like navigation |
| `wire:poll` | Polls the server at a given interval |
| `wire:init` | Runs an action immediately after the component is rendered |
| `wire:cloak` | Hides the element until Livewire is initialized |
| `wire:dirty` | Displays elements when properties have been modified but not saved |
| `wire:confirm` | Shows a browser confirmation dialog before an action |
| `wire:offline` | Shows elements only when the browser is offline |
| `wire:ignore` | Tells Livewire not to update a specific element |

## wire:loading

Customize how loading states are handled:

```blade
<button wire:click="save">
    Save
    <span wire:loading wire:target="save">...</span>
</button>
```

## wire:poll

Keep data fresh automatically:

```blade
<div wire:poll.5s>
    Current Time: {{ now() }}
</div>
```
