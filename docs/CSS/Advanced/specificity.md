---
sidebar_position: 4
---

# Specificity & The Cascade

CSS stands for **Cascading** Style Sheets. Understanding how rules compete is vital.

## The Cascade
When multiple rules apply to an element, the browser decides which one wins based on:
1.  **Importance** (`!important`)
2.  **Specificity**
3.  **Source Order** (Last specific rule wins)

## Specificity Hierarchy
Specificity is a weight that is applied to a given CSS declaration. Think of it as a score.

1.  **Inline styles**: `style="..."` (Score: 1000)
2.  **IDs**: `#navbar` (Score: 100)
3.  **Classes, Pseudo-classes, Attributes**: `.btn`, `:hover`, `[type="text"]` (Score: 10)
4.  **Elements**: `div`, `h1` (Score: 1)

**Example Calculation**:

```css
/* Score: 1 (Element) */
p { color: red; }

/* Score: 10 (Class) -> WINNER */
.text { color: blue; }

/* Score: 100 (ID) -> ULTIMATE WINNER */
#content { color: green; }
```

## !important
Overrides all specificity. Use with extreme caution.

```css
p {
  color: red !important;
}
```

*Tip: Don't use `!important` to solve specificity wars. Use more specific selectors instead.*
