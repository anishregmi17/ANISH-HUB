# x-data

The `x-data` directive defines a new Alpine component and its reactive state.

## Usage

```html
<div x-data="{ open: false }">
    ...
</div>
```

## Methods

You can also define methods within `x-data`:

```html
<div x-data="{ open: false, toggle() { this.open = ! this.open } }">
    <button @click="toggle()">Toggle</button>
</div>
```

## Reusable Data

You can extract data into a function for reusability:

```html
<div x-data="dropdown()">
    ...
</div>

<script>
    function dropdown() {
        return {
            open: false,
            toggle() { this.open = ! this.open }
        }
    }
</script>
```
