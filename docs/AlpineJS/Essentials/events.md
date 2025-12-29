# Events

Alpine makes it easy to listen for browser events and dispatch custom ones.

## Listening for Events

Use `x-on` or the `@` shorthand to listen for events.

```html
<button @click="alert('Hello World!')">Click Me</button>

<!-- Listening for key events -->
<input type="text" @keyup.enter="submitForm()">
```

## Event Modifiers

- `.prevent`: Calls `event.preventDefault()`.
- `.stop`: Calls `event.stopPropagation()`.
- `.window`: Listens for the event on the global window.
- `.away`: Triggers when an event occurs outside of the element.
- `.debounce`: Debounces the event handler.

```html
<div @click.away="open = false">
    Click outside this div to close it.
</div>
```

## Custom Events

Dispatch custom events using `$dispatch`:

```html
<div @notify="alert($event.detail.message)">
    <button @click="$dispatch('notify', { message: 'Hello!' })">
        Dispatch Event
    </button>
</div>
```
