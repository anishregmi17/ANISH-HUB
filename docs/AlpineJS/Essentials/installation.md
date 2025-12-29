# Installation

There are two primary ways to include Alpine in your project:
1. Including it from a script tag (Recommended for simple projects)
2. Installing it as a module using NPM (Recommended for complex projects)

## From Script Tag

Add the following script tag to the end of your `<head>` section:

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

That's it! Alpine will now be available for use in your HTML.

## From NPM

First, install Alpine via NPM:

```bash
npm install alpinejs
```

Then, import and initialize it in your main JavaScript bundle:

```javascript
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
```

> **Note:** If you are using Alpine inside a tool like Vite or Webpack, you must call `Alpine.start()` for it to initialize.
