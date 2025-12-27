---
sidebar_position: 2
---

# Installation (v4)

Tailwind CSS v4 simplifies the setup process significantly by moving configuration into CSS itself.

## Using Vite (Recommended)

If you are using Vite (for React, Vue, Laravel, etc.), this is the modern way.

### 1. Install Dependencies
```bash
npm install tailwindcss @tailwindcss/vite
```

### 2. Configure Vite
In your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### 3. Import Tailwind
In your main CSS file (e.g., `app.css`):

```css
@import "tailwindcss";
```

 That's it! No `tailwind.config.js` is strictly needed anymore unless you have specific legacy plugins.

## Configuration via CSS Variables
In v4, you customize your theme directly in CSS using the `@theme` directive.

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --font-family-display: "Satoshi", sans-serif;
  
  --breakpoint-3xl: 1920px;
}
```

Now you can use `bg-primary` or `font-display` in your HTML.
