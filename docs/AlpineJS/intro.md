# Alpine.js

Alpine is a rugged, minimal framework for composing JavaScript behavior in your markup.

It allows you to write interactive UI components with the ease of frameworks like Vue or React, but with the simplicity of jQuery or even vanilla JavaScript.

## Start Here

If you are new to Alpine, the best way to start is by including it via CDN and adding `x-data` to an element.

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Content</button>
 
    <div x-show="open">
        Hello from Alpine!
    </div>
</div>
```

## Upgrade From V2

Alpine v3 was a major rewrite with many improvements. Here are the key changes:

- **New Reactivity Engine**: Faster and more robust.
- **Improved Scoping**: Components now have better access to parent data.
- **New Directives**: Added `x-effect`, `x-teleport`, `x-id`.
- **Global Stores**: `Alpine.store()` replaces the need for some complex state management.
- **Magic Properties**: New `$nextTick`, `$root`, `$data`.

For a full migration guide, visit the [official documentation](https://alpinejs.dev/upgrade-guide).
