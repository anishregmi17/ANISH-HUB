---
sidebar_position: 1
---

# Responsive Design

Tailwind uses specific breakpoints to apply styles at different screen widths. It uses a **mobile-first** system.

## The Breakpoints
-   (None): Mobile by default (< 640px)
-   `sm`: 640px
-   `md`: 768px
-   `lg`: 1024px
-   `xl`: 1280px
-   `2xl`: 1536px

## How to use them
Prefix any utility with the breakpoint name and a colon.

```html
<!-- Red by default, Blue on medium screens, Green on large screens -->
<div class="bg-red-500 md:bg-blue-500 lg:bg-green-500">
  Resize me!
</div>
```

## Common Pattern
A stacked grid on mobile, side-by-side on desktop.

```html
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">Left</div>
  <div class="w-full md:w-1/2">Right</div>
</div>
```
