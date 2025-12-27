---
sidebar_position: 2
---

# Elements & Attributes

## HTML Elements

An HTML element is defined by a start tag, some content, and an end tag.

```html
<tagname>Content goes here...</tagname>
```

Examples:
```html
<h1>The Main Heading</h1>
<p>A paragraph of text.</p>
```

### Nested Elements
Elements can contain other elements.

```html
<div>
    <p>I am inside a div!</p>
</div>
```

### Empty Elements
Some elements have no content and no end tag (self-closing).

```html
<br> <!-- Line break -->
<hr> <!-- Horizontal rule -->
<img src="pic.jpg"> <!-- Image -->
```

## HTML Attributes

Attributes provide additional information about elements. They are always specified in the **start tag** and usually come in name/value pairs like `name="value"`.

### Common Attributes

- `href`: Used in `<a>` tags to specify the URL.
  ```html
  <a href="https://google.com">Google</a>
  ```
  
- `src`: Used in `<img>` tags to specify the image path.
  ```html
  <img src="cat.jpg">
  ```

- `width` and `height`: Provide size details for images.
  ```html
  <img src="cat.jpg" width="500" height="600">
  ```

- `alt`: Alternate text for images if they fail to load.
  ```html
  <img src="cat.jpg" alt="A cute cat">
  ```

- `style`: Used to add CSS styles (color, font, size).
  ```html
  <p style="color:red;">I am red.</p>
  ```

- `lang`: Declares the language of the element (usually in `<html>`).
  ```html
  <html lang="en">
  ```
