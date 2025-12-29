# x-transition

`x-transition` allows you to apply CSS transitions to elements when they are shown or hidden.

## Basic Usage

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div x-show="open" x-transition>
        Transitioning Content
    </div>
</div>
```

## Customizing Transitions

You can specify durations, delays, and ease functions.

```html
<div x-show="open"
    x-transition:enter="transition ease-out duration-300"
    x-transition:enter-start="opacity-0 transform scale-90"
    x-transition:enter-end="opacity-100 transform scale-100"
    x-transition:leave="transition ease-in duration-300"
    x-transition:leave-start="opacity-100 transform scale-100"
    x-transition:leave-end="opacity-0 transform scale-90"
>
    Custom Transition
</div>
```

## Helper Modifiers

- `.duration.500ms`
- `.delay.200ms`
- `.opacity`
- `.scale`

```html
<div x-show="open" x-transition.duration.500ms.scale.origin.top>
    Scaled Transition
</div>
```
