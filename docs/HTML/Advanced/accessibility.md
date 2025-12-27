---
sidebar_position: 2
---

# Accessibility (ARIA)

Web accessibility means designing websites that can be used by people with disabilities (visual, auditory, motor, or cognitive impairments).

## Why it matters
1.  **Legal Requirements**: Many countries require accessible government/business sites.
2.  **Inclusivity**: Access for everyone.
3.  **SEO**: Accessible sites are often more machine-readable.

## ARIA (Accessible Rich Internet Applications)

ARIA is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible.

### Common ARIA Attributes

- `aria-label`: Used when an element doesn't have visible text (like an icon button).
  ```html
  <button aria-label="Close menu">X</button>
  ```
  
- `role`: Defines the purpose of an element if not using a semantic tag.
  ```html
  <div role="alert">Login failed!</div>
  ```
  
- `aria-hidden`: Hides content from screen readers but keeps it visible.
  ```html
  <span aria-hidden="true">decorative-icon</span>
  ```

- `aria-expanded`: Indicates if a menu/accordion is open.
  ```html
  <button aria-expanded="true">Menu</button>
  ```

## Best Practices
1.  **Use Semantic HTML first**: A `<button>` is better than a `<div role="button">`.
2.  **Alt Text**: Always provide `alt` for images.
3.  **Contrast**: Ensure text color contrasts well with the background.
4.  **Keyboard Navigation**: Ensure all interactive elements can be reached via `Tab`.
