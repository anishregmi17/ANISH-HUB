# Templating

Alpine provides several directives for manipulating the DOM based on your state.

## x-text and x-html

- `x-text`: Sets the `textContent` of an element.
- `x-html`: Sets the `innerHTML` of an element.

```html
<div x-data="{ name: 'John Doe', html: '<strong>Bold Text</strong>' }">
    <p x-text="name"></p>
    <div x-html="html"></div>
</div>
```

## x-show and x-if

- `x-show`: Toggles `display: none` (useful for frequent toggling).
- `x-if`: Completely adds/removes the element from the DOM (must be used on a `<template>` tag).

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div x-show="open">I am shown/hidden with CSS</div>

    <template x-if="open">
        <div>I am added/removed from the DOM</div>
    </template>
</div>
```

## x-for

Iterate over an array. Must be used on a `<template>` tag.

```html
<ul x-data="{ colors: ['Red', 'Green', 'Blue'] }">
    <template x-for="color in colors">
        <li x-text="color"></li>
    </template>
</ul>
```
