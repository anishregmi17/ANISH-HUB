# x-for

`x-for` allows you to create DOM nodes by iterating over a list.

## Usage

Must be used on a `<template>` tag and containing only one root element.

```html
<ul x-data="{ colors: ['Red', 'Green', 'Blue'] }">
    <template x-for="color in colors">
        <li x-text="color"></li>
    </template>
</ul>
```

## Accessing Index

```html
<template x-for="(color, index) in colors">
    <li>
        <span x-text="index + 1"></span>.
        <span x-text="color"></span>
    </li>
</template>
```

## Keying

It is highly recommended to provide a key for each item in the loop for performance and stability.

```html
<template x-for="user in users" :key="user.id">
    <li x-text="user.name"></li>
</template>
```
