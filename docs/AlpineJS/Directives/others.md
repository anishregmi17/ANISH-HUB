# Additional Directives

A collection of useful directives in Alpine.js.

## x-init

Runs when the component is initialized.

```html
<div x-data="{ message: '' }" x-init="message = 'Hello World!'"></div>
```

## x-show

Toggles `display: none` on an element based on a boolean expression.

```html
<div x-show="open">...</div>
```

## x-text and x-html

- `x-text`: Sets `textContent`.
- `x-html`: Sets `innerHTML`.

## x-cloak

Prevents "Flash of Unstyled Content" (FOUC) while Alpine is loading.

```html
<style>
    [x-cloak] { display: none !important; }
</style>

<div x-data="{}" x-cloak>
    This will be hidden until Alpine is ready.
</div>
```

## x-teleport

Teleports a piece of HTML to another part of the DOM. Useful for modals.

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Modal</button>
 
    <template x-teleport="body">
        <div x-show="open">...</div>
    </template>
</div>
```

## x-if

Conditionally adds/removes an element from the DOM (must be on `<template>`).

## x-id

Generates unique IDs for elements.

```html
<div x-data x-id="['text-input']">
    <label :for="$id('text-input')">Label</label>
    <input :id="$id('text-input')" type="text">
</div>
```
