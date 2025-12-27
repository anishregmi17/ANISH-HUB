---
sidebar_position: 3
---

# Pseudo-classes & Elements

## Pseudo-classes
A keyword added to a selector that specifies a **special state** of the selected element(s).
Starts with a single colon `:`.

```css
/* User interaction states */
button:hover { ... }
button:active { ... }
input:focus { ... }

/* Structural states */
li:first-child { ... }
li:last-child { ... }
li:nth-child(even) { ... }
```

## Pseudo-elements
A keyword added to a selector that lets you style a **specific part** of the selected element(s).
Starts with double colons `::` (though single `:` often works for legacy reasons).

### ::before and ::after
Inserts "fake" content before or after an element's actual content.

```css
.quote::before {
  content: "“";
  color: grey;
  font-size: 2em;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

### Other Pseudo-elements
```css
p::first-line { ... }
p::first-letter { ... }
::selection { background: yellow; } /* Styles highlighted text */
```
