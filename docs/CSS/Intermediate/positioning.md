---
sidebar_position: 3
---

# Positioning

The `position` property specifies the type of positioning method used for an element.

## 1. Static (Default)
Elements render in order, as they appear in the document flow. Top, bottom, left, and right properties have no effect.

```css
div { position: static; }
```

## 2. Relative
Positioned relative to its normal position. Setting `top: 20px` moves it down 20px from where it *would* have been. It does NOT impact other elements' positions (leaves a "ghost" space).

```css
div {
  position: relative;
  left: 30px;
}
```

## 3. Absolute
Positioned relative to the **nearest positioned ancestor** (anything not static). If no ancestor is positioned, it uses the document body. It is removed from the normal document flow.

```css
.parent { position: relative; }

.child {
  position: absolute;
  top: 0;
  right: 0; /* Sticks to top-right of parent */
}
```

## 4. Fixed
Positioned relative to the **viewport** (browser window). It stays in the same place even when scrolled.

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

## 5. Sticky
Toggles between relative and fixed depending on scroll position.

```css
.header {
  position: sticky;
  top: 0;
}
```
