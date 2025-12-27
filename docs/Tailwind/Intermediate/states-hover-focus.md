---
sidebar_position: 2
---

# Handling States

Tailwind makes styling states like hover, focus, and active incredibly easy with modifiers.

## Hover
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hover me
</button>
```

## Focus
```html
<input class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none">
```

## Active
```html
<button class="bg-blue-500 active:bg-blue-800">
  Click me
</button>
```

## Styling Children based on Parent State (Group Hover)
If you want to style an icon when the user hovers over the *card* (the parent), use the `group` class.

```html
<div class="group border p-4 hover:bg-gray-100">
  <p class="text-gray-900 group-hover:text-blue-600">
    New Project
  </p>
  <p class="text-gray-500 group-hover:text-gray-900">
    Create a new project from a variety of templates.
  </p>
</div>
```

## Styling Siblings (Peer)
Style an element based on the state of a sibling (e.g., error message showing when input is invalid).

```html
<form>
  <input class="peer border border-gray-300 invalid:border-red-500" type="email">
  <p class="invisible peer-invalid:visible text-red-500">
    Please provide a valid email.
  </p>
</form>
```
