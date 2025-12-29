# State

State is the data that your application uses to track information. In Alpine, everything revolves around state.

## Defining State

State is defined using the `x-data` directive. Any HTML element can have its own local state.

```html
<div x-data="{ count: 0 }">
    <button @click="count++">Increment</button>
    <span x-text="count"></span>
</div>
```

## Global State

For state that needs to be shared across multiple components, you can use `Alpine.store()`:

```javascript
document.addEventListener('alpine:init', () => {
    Alpine.store('tabs', {
        current: 'first',
        items: ['first', 'second', 'third'],
    })
})
```

Access global state using the `$store` magic property:

```html
<div x-data>
    <template x-for="tab in $store.tabs.items">
        <button @click="$store.tabs.current = tab" x-text="tab"></button>
    </template>
</div>
```
