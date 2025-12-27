---
sidebar_position: 2
---

# CSS Variables

CSS Variables (Custom Properties) allow you to store values and reuse them throughout your stylesheet. This makes maintenance much easier.

## Declaring Variables
Variables are usually declared in the `:root` pseudo-class (global scope).

```css
:root {
  --primary-color: #3498db;
  --text-color: #333;
  --padding-base: 16px;
}
```

## Using Variables
Use the `var()` function.

```css
body {
  color: var(--text-color);
  background-color: #fff;
}

button {
  background-color: var(--primary-color);
  padding: var(--padding-base);
}
```

## Overriding Variables
You can override variables for specific contexts.

```css
.dark-mode {
  --primary-color: #9b59b6;
  --text-color: #fff;
}
```

OR in Javascript:
```javascript
document.documentElement.style.setProperty('--primary-color', 'red');
```
