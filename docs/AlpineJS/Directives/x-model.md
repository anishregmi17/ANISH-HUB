# x-model

`x-model` allows you to bind the value of an input element to Alpine data.

## Usage

```html
<div x-data="{ message: '' }">
    <input type="text" x-model="message">
    <p>Message: <span x-text="message"></span></p>
</div>
```

## Modifiers

- `.lazy`: Only updates the data on the "change" event instead of "input".
- `.number`: Forces the input value to be a number.
- `.debounce`: Debounces the data update.

```html
<input type="text" x-model.debounce.500ms="searchQuery">
```

## Supported Inputs

Works on:
- `<input type="text">`
- `<textarea>`
- `<input type="checkbox">`
- `<input type="radio">`
- `<select>`
