# More Magics

Alpine provides several other magic properties to help you build interactive components.

## $store

Access global stores defined with `Alpine.store()`.

```html
<div x-text="$store.appName"></div>
```

## $watch

Watch a piece of data and run a callback when it changes.

```html
<div x-data="{ count: 0 }" x-init="$watch('count', value => console.log(value))">
    <button @click="count++">Increment</button>
</div>
```

## $dispatch

Dispatch custom browser events.

```html
<button @click="$dispatch('custom-event', { detail: 'data' })">Dispatch</button>
```

## $nextTick

Wait for Alpine to finish updating the DOM before running code.

```javascript
$nextTick(() => { /* DOM is updated here */ })
```

## $root

Returns the root element of the Alpine component.

## $data

Returns the current component's data object.
