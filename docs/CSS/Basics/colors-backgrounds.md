---
sidebar_position: 4
---

# Colors & Backgrounds

## CSS Colors
Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

### Color Names
```css
h1 { color: Tomato; }
```

### HEX
Hexadecimal colors (#RRGGBB).
```css
p { color: #ff6347; }
```

### RGB / RGBA (Alpha for transparency)
```css
/* Red, Green, Blue */
p { color: rgb(255, 99, 71); }

/* 50% opacity */
p { color: rgba(255, 99, 71, 0.5); }
```

### HSL / HSLA (Hue, Saturation, Lightness)
Often easier for humans to reason about.
```css
p { color: hsl(9, 100%, 64%); }
```

## Backgrounds

### Background Color
```css
body {
  background-color: lightblue;
}
```

### Background Image
```css
body {
  background-image: url("paper.gif");
}
```

### Background Repeat
By default, images repeat. To stop it:
```css
body {
  background-repeat: no-repeat;
}
```

### Background Position & Size
```css
div {
  background-image: url("img.png");
  background-position: center;
  background-size: cover; /* Resize to cover entire container */
}
```
