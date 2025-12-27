---
sidebar_position: 4
---

# Lists

There are three main types of lists in HTML.

## Unordered Lists
Used for items where order doesn't matter (bullet points). Uses `<ul>` (Unordered List) and `<li>` (List Item).

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

## Ordered Lists
Used for numbered items. Uses `<ol>` (Ordered List) and `<li>`.

```html
<ol>
  <li>Wake up</li>
  <li>Code</li>
  <li>Sleep</li>
</ol>
```

### Type Attribute
You can change the numbering style:
- `type="1"`: Numbers (default)
- `type="A"`: Uppercase letters
- `type="a"`: Lowercase letters
- `type="I"`: Roman numerals

```html
<ol type="I">
  <li>First item</li>
  <li>Second item</li>
</ol>
```

## Description Lists
A list of terms, with a description of each term. Uses `<dl>` (Description List), `<dt>` (Term), and `<dd>` (Description).

```html
<dl>
  <dt>Coffee</dt>
  <dd>- Black hot drink</dd>
  <dt>Milk</dt>
  <dd>- White cold drink</dd>
</dl>
```
