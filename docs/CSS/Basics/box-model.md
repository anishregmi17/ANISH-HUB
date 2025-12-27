---
sidebar_position: 3
---

# The Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of:

1.  **Content**: The content of the box, where text and images appear.
2.  **Padding**: Clears an area around the content. The padding is transparent.
3.  **Border**: A border that goes around the padding and content.
4.  **Margin**: Clears an area outside the border. The margin is transparent.

## Visualization

```text
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  |  +---------------+  |  |
|  |  |    Padding    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

## CSS Example

```css
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

## Box Sizing
By default, the `width` and `height` properties only apply to the **Content**. If you add padding/border, the element grows bigger than the specified width.

To make `width` include padding and border (recommended):

```css
* {
  box-sizing: border-box;
}
```
With `border-box`, if you set width to 300px, the total width remains 300px, and content shrinks to fit padding.
