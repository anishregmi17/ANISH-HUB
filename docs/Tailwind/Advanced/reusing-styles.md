---
sidebar_position: 2
---

# Reusing Styles (@apply)

While Tailwind encourages utility classes in HTML, sometimes you need to extract components (like buttons) to avoid repetition.

## The @apply directive
In your CSS file, you can compose utilities into custom classes.

```css
@import "tailwindcss";

.btn-primary {
  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
```

Now use it in HTML:
```html
<button class="btn-primary">
  Save changes
</button>
```

## Don't Overuse It!
The goal of Tailwind is often to avoid creating abstract CSS classes. Before reaching for `@apply`, consider:
1.  **Framework Components**: If you are using React/Vue/Blade, create a `<Button>` component instead. It's much better than `@apply`.
2.  **Multi-cursor editing**: Often it's faster to just copy-paste utilities.

`@apply` is useful mostly for overriding 3rd-party library styles where you cannot edit the HTML directly.
