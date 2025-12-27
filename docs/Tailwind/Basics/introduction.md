---
sidebar_position: 1
---

# Introduction

## What is Tailwind CSS?

Tailwind CSS is a **utility-first** CSS framework. Instead of writing custom CSS classes like `.btn-primary` and then defining `padding`, `color`, and `border` in a separate file, you use small, single-purpose classes directly in your HTML.

## The "Ugly" HTML Myth
At first glance, this looks messy:

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

**But the benefits are massive:**
1.  **No context switching**: You don't have to jump between HTML and CSS files.
2.  **No class naming**: No more agonizing over `sidebar-wrapper-inner` vs `sidebar-container`.
3.  **Safer changes**: Changing a class in HTML only affects *that* element, not 50 others across the site.
4.  **Tiny bundle sizes**: Tailwind only compiles the CSS you actually use.

## Tailwind v4 Features
We will be focusing on modern Tailwind patterns including:
-   **CSS-first configuration**: Configuring your design system directly in CSS.
-   **Automatic content detection**: No more configuring `content` arrays.
-   **Native Cascade Layers**: Better compatibility with other CSS.
