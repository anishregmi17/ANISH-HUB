# Globals

Globals are methods available on the `Alpine` object for registering components, stores, and more.

## Alpine.data()

Used to register a reusable component structure.

```javascript
Alpine.data('dropdown', (initialOpen = false) => ({
    open: initialOpen,

    toggle() {
        this.open = ! this.open
    }
}))
```

```html
<div x-data="dropdown(true)">
    ...
</div>
```

## Alpine.store()

Used to register global, reactive state that can be shared across multiple components.

```javascript
Alpine.store('auth', {
    user: null,

    login(user) { this.user = user },
    logout() { this.user = null }
})
```

## Alpine.bind()

Used to register reusable sets of directives.

```javascript
Alpine.bind('SubmitButton', {
    'type': 'submit',
    ':disabled'() {
        return this.isLoading
    },
    '@click'() {
        this.submit()
    },
})
```
