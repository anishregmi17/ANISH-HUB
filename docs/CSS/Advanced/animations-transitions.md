---
sidebar_position: 1
---

# Animations & Transitions

Make your website alive with movement.

## Transitions
Transitions allow you to change property values smoothly over a given duration.

**Syntax**: `transition: property duration timing-function delay;`

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red; /* Changes smoothly from blue to red */
}
```

## Transforms
Transforms allow you to move, rotate, scale, and skew elements.

```css
div {
  transform: rotate(45deg); /* Rotation */
  transform: scale(1.5);    /* Grow 1.5x larger */
  transform: translateX(50px); /* Move right */
}
```

## Animations (Keyframes)
Animations allow an element to change from one style to another at specific times.

### 1. Define Keyframes
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### 2. Apply Animation
```css
.card {
  animation: slideIn 1s ease-out;
}
```

### Animation Properties
- `animation-name`: The name of the @keyframes.
- `animation-duration`: How long it takes.
- `animation-iteration-count`: infinite or number.
- `animation-direction`: normal, reverse, alternate.
