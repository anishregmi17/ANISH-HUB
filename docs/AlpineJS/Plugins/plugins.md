# Plugins

Alpine's core is small, but it can be extended with powerful plugins.

## Collapse

Smoothly expand/collapse elements.

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>
    <div x-show="open" x-collapse>
        Content that slides down...
    </div>
</div>
```

## Persist

Persist state in LocalStorage automatically.

```html
<div x-data="{ count: $persist(0) }">
    <button @click="count++">Increment (Saved in Browser)</button>
</div>
```

## Intersect

Trigger actions when an element enters the viewport.

```html
<div x-intersect="showNextSection = true">
    Load more when you scroll here...
</div>
```

## Mask

Apply input masks.

```html
<input x-mask="99/99/9999" placeholder="MM/DD/YYYY">
```

## Other Plugins
- **Focus**: Manage focus for accessibility.
- **Resize**: Trigger actions when an element is resized.
- **Anchor**: Position elements relative to other elements.
- **Morph**: Seamlessly morph one piece of HTML into another.
- **Sort**: Drag and drop sorting.
