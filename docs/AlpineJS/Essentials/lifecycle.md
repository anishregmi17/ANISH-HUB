# Lifecycle

Lifecycle hooks allow you to run code at specific points in a component's existence.

## x-init

Runs when the component is first initialized by Alpine.

```html
<div x-data="{ message: 'Loading...' }" x-init="message = 'Loaded!'">
    <p x-text="message"></p>
</div>
```

## Lifecycle Events

- `alpine:init`: Fired when Alpine is loaded but before it initializes components.
- `alpine:initialized`: Fired after Alpine has finished initializing all components on the page.

```javascript
document.addEventListener('alpine:init', () => {
    console.log('Alpine is ready!')
})
```

## Destroying Components

Alpine handles cleanup automatically when elements are removed from the DOM, but you can also use `x-init` with a cleanup function:

```html
<div x-data x-init="
    let interval = setInterval(() => console.log('Ping'), 1000);
    return () => clearInterval(interval);
">
</div>
```
