# UI Components

Common UI patterns built using Alpine.js.

## Dropdown

```html
<div x-data="{ open: false }" class="relative">
    <button @click="open = ! open" @click.away="open = false">
        Options
    </button>

    <div x-show="open" x-transition class="absolute mt-2 w-48 bg-white shadow-md">
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
    </div>
</div>
```

## Modal

```html
<div x-data="{ open: false }">
    <button @click="open = true">Open Modal</button>

    <div x-show="open" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
         x-on:keydown.escape.window="open = false"
    >
        <div class="bg-white p-6 rounded shadow-lg" @click.away="open = false">
            <h2 class="text-xl">Modal Title</h2>
            <p>Modal content goes here...</p>
            <button @click="open = false">Close</button>
        </div>
    </div>
</div>
```
