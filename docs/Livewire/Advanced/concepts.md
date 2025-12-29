# Under the Hood & Advanced Concepts

Understanding how Livewire works helps you build more efficient applications.

## Morphing

Livewire uses a "morphing" library to update the DOM. Instead of replacing an entire element, Livewire compares the new HTML with the existing HTML and only updates the parts that have changed. This preserves input focus and other browser states.

## Hydration & Dehydration

This is the process by which Livewire maintains state between requests.
- **Dehydration**: When a component is rendered on the server, its state is "dehydrated" into a JSON object and sent to the browser.
- **Hydration**: When an action is triggered, that JSON object is sent back to the server and used to "rehydrate" the component instance.

## Request Bundling

Livewire 3 automatically bundles multiple requests into one if they happen within a very short timeframe. This reduces the number of trips to the server and improves performance.

## Security

Livewire includes several security features:
- **Checksums**: Every request includes a checksum to ensure the state hasn't been tampered with.
- **Locked Properties**: Use the `#[Locked]` attribute for properties that should never be modified by the frontend.

```php
use Livewire\Attributes\Locked;

#[Locked]
public $id;
```

## JavaScript Hooks

You can hook into Livewire's lifecycle using JavaScript:

```javascript
Livewire.on('post-created', () => {
    // Run JS after event is fired
})

Livewire.hook('request', ({ component, request, respond, succeed, fail }) => {
    // Run code before/after every request
})
```
