---
sidebar_position: 5
---

# HTML Best Practices

Writing "working" HTML is easy. Writing clean, maintainable, and standard-compliant HTML requires discipline.

## 1. Always Close Tags
Even if browsers forgive you, always close your tags.
*   **Bad**: `<p>Text`
*   **Good**: `<p>Text</p>`

## 2. Lowercase Attribute Names
*   **Bad**: `<DIV CLASS="container">`
*   **Good**: `<div class="container">`

## 3. Quote Attribute Values
*   **Bad**: `<img src=image.jpg>`
*   **Good**: `<img src="image.jpg">`

## 4. Use Valid Doctype
Always start with `<!DOCTYPE html>`.

## 5. Don't Skip Semantic Tags
Don't use `<div>` for everything. Use `<header>`, `<main>`, `<footer>`, `<section>` where appropriate.

## 6. Meaningful Alt Text
Don't write `alt="image"`. Describe the image: `alt="A red ferrari driving on a mountain road"`.

## 7. Format Your Code
Indentation matters for readability.

```html
<!-- Good -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Bad -->
<ul>
<li>Item 1</li>
<li>Item 2</li></ul>
```
