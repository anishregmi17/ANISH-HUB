---
sidebar_position: 2
---

# CSS Grid Layout

CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out content in rows and columns.

## The Container
```css
.container {
  display: grid;
}
```

## Defining Columns and Rows
```css
.container {
  /* Three columns: 1st auto, 2nd 200px, 3rd 1 fraction */
  grid-template-columns: auto 200px 1fr;
  
  /* Two rows of height 100px and 200px */
  grid-template-rows: 100px 200px;
}
```

The `fr` unit represents a fraction of the available space.

## Gap
Space between grid cells.
```css
.container {
  gap: 10px;
  /* or row-gap / column-gap */
}
```

## Placing Items
You can define where specifically an item should sit.

```css
.item1 {
  grid-column: 1 / 3; /* Span from line 1 to 3 */
  grid-row: 1;
}
```

## Grid Areas (The Visual Way)
You can name areas and visualize the layout.

```css
.container {
  grid-template-areas:
    "header header header"
    "menu main main"
    "footer footer footer";
}

.header { grid-area: header; }
.menu { grid-area: menu; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```
