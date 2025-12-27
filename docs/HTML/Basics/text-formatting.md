---
sidebar_position: 3
---

# Text Formatting

HTML defines special elements for defining text with a special meaning.

## Headings
HTML provides 6, and only 6, levels of headings. `h1` is the most important, `h6` is the least.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Paragraphs
New lines in your code are ignored by browsers. You must use `<p>` tags.

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

## Formatting Elements

- `<b>`: Bold text (visual only)
- `<strong>`: Important text (usually rendered bold, semantic meaning)
- `<i>`: Italic text (visual only)
- `<em>`: Emphasized text (usually italic, semantic meaning)
- `<mark>`: Marked/highlighted text
- `<small>`: Smaller text
- `<del>`: Deleted text (strikethrough)
- `<ins>`: Inserted text (underlined)
- `<sub>`: Subscript text
- `<sup>`: Superscript text

### Example

```html
<p>This is <strong>important</strong> text.</p>
<p>H<sub>2</sub>O is water.</p>
<p>2<sup>3</sup> = 8</p>
```

## Preformatted Text
If you want to preserve spaces and line breaks exactly as written in code (like a poem), use `<pre>`.

```html
<pre>
  My    Bonnie
  Lies  Over
  The   Ocean
</pre>
```
