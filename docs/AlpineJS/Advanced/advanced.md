# Advanced Topics

Deep dives into how Alpine works and how to handle advanced scenarios.

## CSP Compatibility

If your site has a strict Content Security Policy, you cannot use the standard Alpine distribution because it uses `new Function()` for expressions.

Use the CSP-friendly build:
```html
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js"></script>
```

## Reactivity

Alpine uses JavaScript Proxies to track data changes. When you update a property on an `x-data` object, the Proxy triggers a dependency tracking system that updates the parts of the DOM that depend on that property.

## Extending Alpine

You can add your own directives or magic properties:

```javascript
Alpine.directive('uppercase', (el, { expression }, { evaluateLater, effect }) => {
    let getExpressionValue = evaluateLater(expression)

    effect(() => {
        getExpressionValue(value => {
            el.innerText = value.toUpperCase()
        })
    })
})
```

## Async Operations

Alpine handles Promises in expressions automatically.

```html
<div x-data="{ user: null }" x-init="user = await (await fetch('/api/user')).json()">
    <p x-text="user?.name"></p>
</div>
```
