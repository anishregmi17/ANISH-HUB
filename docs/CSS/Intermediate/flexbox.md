---
sidebar_position: 1
---

# Flexbox (Flexible Box Layout)

Flexbox is a one-dimensional layout method for laying out items in rows or columns.

## The Container
To start using Flexbox, you need a container.

```css
.container {
  display: flex; /* or inline-flex */
}
```

## Flex Direction
Defines the direction items are placed.
```css
.container {
  flex-direction: row; /* default */
  /* row-reverse, column, column-reverse */
}
```

## Justify Content (Main Axis Alignment)
Aligns items horizontally (if direction is row).

```css
.container {
  justify-content: flex-start; /* default */
  justify-content: center;      /* center items */
  justify-content: space-between; /* push first/last to edges */
  justify-content: space-around; /* equal space around */
}
```

## Align Items (Cross Axis Alignment)
Aligns items vertically (if direction is row).

```css
.container {
  align-items: stretch; /* default */
  align-items: center;  /* vertical center */
  align-items: flex-start; /* top */
}
```

## Flex Wrap
By default, items try to fit on one line.
```css
.container {
  flex-wrap: wrap; /* allow wrapping to next line */
}
```

## The Flex Item
```css
.item {
  flex: 1; /* Grow to fill space */
}
```
