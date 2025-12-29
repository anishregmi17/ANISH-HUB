# x-on

`x-on` allows you to listen for browser events.

## Usage

```html
<button x-on:click="alert('Clicked!')">Click Me</button>
```

## Shorthand `@`

```html
<button @click="alert('Clicked!')">Click Me</button>
```

## Key Modifiers

Listen for specific keys:

```html
<input type="text" @keyup.enter="submit()">
<input type="text" @keyup.escape="close()">
```

## Event Object

Access the native event object using `$event`:

```html
<button @click="console.log($event.target)">Log Target</button>
```
