---
sidebar_position: 1
---

# Meta Tags & SEO

Meta tags provide metadata about the HTML document. Metadata is not displayed on the page but is machine parsable.

## Basic Meta Tags

Meta tags always go inside the `<head>` element.

### Character Set
Defining the character set is crucial for displaying text correctly.
```html
<meta charset="UTF-8">
```

### Viewport (Responsive Design)
Essential for mobile-friendly websites.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Keywords and Description (SEO)
Search engines use these to understand your page.

```html
<meta name="description" content="Free HTML tutorials for beginners to advanced.">
<meta name="keywords" content="HTML, CSS, JavaScript, Tutorial">
<meta name="author" content="Anish Regmi">
```

## Open Graph (Social Media)
These tags control how your link looks when shared on Facebook, LinkedIn, etc.

```html
<meta property="og:title" content="The Ultimate HTML Course" />
<meta property="og:description" content="Learn HTML from scratch." />
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
<meta property="og:url" content="https://example.com/html-course" />
```

## Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
```
