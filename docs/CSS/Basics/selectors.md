---
sidebar_position: 2
---

# Selectors

Selectors are patterns used to select the element(s) you want to style.

## Basic Selectors

### Element Selector
Selects all elements with the given tag name.
```css
p {
  text-align: center;
  color: red;
}
```

### ID Selector (#)
Selects a unique element with a specific `id` attribute. IDs must be unique within a page.
```css
#header {
  background-color: black;
}
```

### Class Selector (.)
Selects elements with a specific `class` attribute. Classes can be reused.
```css
.center {
  text-align: center;
}
```

### Universal Selector (*)
Selects all elements on the page.
```css
* {
  margin: 0;
  padding: 0;
}
```

## Grouping Selectors
To minimize code, you can group selectors separated by commas.
```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

## Combinators

### Descendant Selector (space)
Selects all `<p>` elements inside `<div>` elements.
```css
div p {
  background-color: yellow;
}
```

### Child Selector (>)
Selects all `<p>` elements that are *direct* children of a `<div>`.
```css
div > p {
  background-color: yellow;
}
```
