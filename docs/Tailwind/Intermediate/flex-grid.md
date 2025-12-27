---
sidebar_position: 3
---

# Flexbox & Grid

Tailwind provides first-class support for modern layout systems.

## Flexbox

### Enable Flex
```html
<div class="flex">...</div>
```

### Direction
`flex-row` (default), `flex-col`, `flex-row-reverse`, `flex-col-reverse`.

### Justify (Main Axis)
-   `justify-start`
-   `justify-center`
-   `justify-end`
-   `justify-between`
-   `justify-around`

### Align (Cross Axis)
-   `items-start`
-   `items-center`
-   `items-end`
-   `items-stretch`

### Example
```html
<div class="flex justify-between items-center p-4">
  <div>Logo</div>
  <div>Menu</div>
</div>
```

## Grid

### Enable Grid
```html
<div class="grid">...</div>
```

### Columns
`grid-cols-1`, `grid-cols-2` ... `grid-cols-12`.

### Gap
`gap-4`, `gap-x-2`, `gap-y-6`.

### Spanning
`col-span-2`, `row-span-1`.

### Example
```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-gray-100">1</div>
  <div class="bg-gray-100">2</div>
  <div class="bg-gray-100">3</div>
  <div class="bg-gray-100 col-span-3">Footer</div>
</div>
```
