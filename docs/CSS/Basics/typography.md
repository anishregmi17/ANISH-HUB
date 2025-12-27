---
sidebar_position: 5
---

# Typography

## Font Family
Specifies the font for an element. Always include a fallback.

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```
*   **Serif**: Small lines at the ends (Times New Roman).
*   **Sans-serif**: Clean lines (Arial, Helvetica).

## Font Size
```css
h1 { font-size: 40px; }
p { font-size: 1.2rem; } /* Relative to root element size */
```

## Font Weight
Controls boldness.
```css
p.normal { font-weight: normal; } /* 400 */
p.bold { font-weight: bold; }     /* 700 */
```

## Text Alignment
```css
h1 { text-align: center; }
p { text-align: justify; }
```

## Text Decoration
Used to set or remove decorations (like underlines).
```css
a { text-decoration: none; } /* Removes underline from links */
h1 { text-decoration: underline; }
```

## Web Fonts (Google Fonts)
To use custom fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```
