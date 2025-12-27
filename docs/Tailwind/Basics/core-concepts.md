---
sidebar_position: 3
---

# Core Concepts

## Padding & Margin
Size is controlled by a scale. `1` unit = `0.25rem` (usually 4px).
-   `p-4`: Padding 1rem (16px)
-   `m-2`: Margin 0.5rem (8px)
-   `px-4`: Padding Left & Right
-   `my-4`: Margin Top & Bottom

## Colors
Tailwind includes an expertly crafted color palette.
-   `bg-red-500`
-   `text-blue-700`
-   `border-gray-200`

Opacity modifiers are built-in: `text-blue-500/50` (50% opacity).

## Typography
-   **Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`...
-   **Weight**: `font-light`, `font-normal`, `font-bold`, `font-black`.
-   **Alignment**: `text-center`, `text-left`, `text-right`.

## Width & Height
-   **Fixed**: `w-1` (0.25rem), `w-96` (24rem).
-   **Fractional**: `w-1/2` (50%), `w-3/4` (75%).
-   **Full**: `w-full` (100%).
-   **Viewport**: `h-screen` (100vh), `w-screen` (100vw).

## Borders
-   **Width**: `border`, `border-2`, `border-4`.
-   **Color**: `border-indigo-500`.
-   **Radius**: `rounded`, `rounded-lg`, `rounded-full`.

## Arbitrary Values
Need a specific pixel value that isn't in the scale? Use square brackets `[]`.

```html
<div class="top-[117px] bg-[#bada55]">
  <!-- ... -->
</div>
```
