# x-bind

`x-bind` allows you to reactively set HTML attributes on an element.

## Usage

```html
<div x-data="{ placeholder: 'Type here...' }">
    <input type="text" x-bind:placeholder="placeholder">
</div>
```

## Shorthand `:`

You can use the `:` shorthand instead of `x-bind:`.

```html
<button :disabled="isLoading">Submit</button>
```

## Binding Classes

You can bind classes using an object where the key is the class name and the value is a boolean.

```html
<div :class="{ 'bg-red-500': hasError, 'bg-green-500': !hasError }">
    Status Indicator
</div>
```
