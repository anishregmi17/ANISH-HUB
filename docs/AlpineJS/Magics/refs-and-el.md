# $el and $refs

## $el

The `$el` magic property returns the current DOM element.

```html
<button @click="$el.innerHTML = 'Clicked!'">
    Click Me
</button>
```

## $refs

`$refs` allows you to access DOM elements marked with the `x-ref` directive.

```html
<div x-data>
    <input type="text" x-ref="inputField">
    <button @click="$refs.inputField.focus()">Focus Input</button>
</div>
```

This is useful for interacting with non-Alpine libraries or for manual DOM manipulation.
