---
sidebar_position: 1
---

# Dark Mode

Tailwind v4 supports dark mode out of the box using the `dark:` variant.

## Enabling Dark Mode
In v4, dark mode often relies on CSS variables or the `color-scheme` property, but typically you control it by adding a `dark` class to the `html` tag.

```html
<html class="dark">
  <body>
    <!-- ... -->
  </body>
</html>
```

## Styling for Dark Mode
Simply prefix your classes with `dark:`.

```html
<div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
  <h3 class="text-slate-900 dark:text-white text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including completely upside-down.
  </p>
</div>
```

## System Preference
To respect the user's OS preference automatically without a `class="dark"`, you can often configure Tailwind to use the `@media (prefers-color-scheme: dark)` strategy, which is the default in many v4 setups unless overridden.
