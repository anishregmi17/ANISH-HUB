---
sidebar_position: 1
---

# Semantic HTML

Semantic HTML means using tags that convey the **meaning** of the content, rather than just its presentation.

## Why use Semantic Elements?
1.  **Accessibility**: Screen readers can navigate the page better.
2.  **SEO**: Search engines understand the structure of your content.
3.  **Readability**: Code is easier for humans to understand.

## Non-Semantic vs Semantic

- **Non-semantic**: `<div>` and `<span>` - Tells nothing about its content.
- **Semantic**: `<form>`, `<table>`, `<article>` - Clearly defines its content.

## Major Semantic Elements

### `<header>`
Represents introductory content or a set of navigational links.

### `<nav>`
Defines a set of navigation links.

### `<main>`
Specifies the main content of a document. Should be unique per page.

### `<section>`
Thematic grouping of content, typically with a heading.

### `<article>`
Independent, self-contained content (Blog posts, comments, news stories).

### `<aside>`
Content aside from the content it is placed in (Sidebars like "Related Posts").

### `<footer>`
Footer for a document or section (Copyright, contacts).

## Example Structure

```html
<body>

<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a> | <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Understanding HTML</h2>
    <p>HTML is the standard markup language...</p>
  </article>
  
  <aside>
    <h3>Related</h3>
    <p>Check out our CSS tutorial.</p>
  </aside>
</main>

<footer>
  <p>&copy; 2025 Anish Regmi</p>
</footer>

</body>
```
