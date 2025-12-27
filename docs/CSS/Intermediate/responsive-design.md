---
sidebar_position: 4
---

# Responsive Design

Responsive Web Design makes web pages look good on all devices (desktops, tablets, and phones).

## The Viewport Meta Tag
Always include this in your HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Media Queries
Media queries allow you to apply specific styles based on the device's characteristics (mostly width).

### Syntax
```css
@media (max-width: 600px) {
  /* Styles applied only if width is 600px or less */
  body {
    background-color: lightblue;
  }
}
```

## Mobile-First Design
It is best practice to design for mobile first, then add styles for larger screens.

```css
/* Mobile styles (Default) */
.container {
  width: 100%;
}

/* Tablet */
@media (min-width: 600px) {
  .container {
    width: 80%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 60%;
  }
}
```
