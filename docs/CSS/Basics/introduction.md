---
sidebar_position: 1
---

# Introduction to CSS

## What is CSS?
**CSS** stands for **C**ascading **S**tyle **S**heets. It describes how HTML elements are to be displayed on screen, paper, or in other media.

HTML is the *structure* (the skeleton).
CSS is the *presentation* (the skin and clothes).

## CSS Syntax
A CSS rule-set consists of a selector and a declaration block.

```css
h1 {
  color: blue;
  font-size: 12px;
}
```

*   **Selector**: Points to the HTML element you want to style (`h1`).
*   **Property**: The aspect you want to change (`color`).
*   **Value**: The setting for that property (`blue`).

## Three Ways to Insert CSS

### 1. External CSS (Recommended)
Stored in a separate `.css` file. Best for maintainability.

**index.html**
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

**style.css**
```css
body {
  background-color: lightblue;
}
```

### 2. Internal CSS
Defined within the `<style>` element in the `<head>` section.

```html
<head>
  <style>
    body {
      background-color: linen;
    }
  </style>
</head>
```

### 3. Inline CSS (Avoid)
Used to apply a unique style for a single element.

```html
<h1 style="color:blue;text-align:center;">This is a heading</h1>
```
