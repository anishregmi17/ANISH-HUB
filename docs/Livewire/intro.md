# Livewire 3.x

Livewire is a powerful full-stack framework for Laravel that allows you to build dynamic interfaces without leaving the comfort of Laravel.

## Getting Started

### Quickstart

The fastest way to get started with Livewire is to install it via Composer and add a component to your page.

```bash
composer require livewire/livewire
```

### Installation

Once installed, Livewire automatically injects the necessary JavaScript and CSS. You can start creating components immediately.

```bash
php artisan make:livewire counter
```

This will create two files:
1. `app/Livewire/Counter.php` (The PHP Class)
2. `resources/views/livewire/counter.blade.php` (The Blade Template)

### Upgrade Guide

Livewire 3 is a major update. If you're coming from v2, some key changes include:
- **Alpine.js is bundled**: No need to include it separately.
- **Wire:model is deferred by default**: Improves performance.
- **New `@persist` directive**: For persistent layouts.
- **Reactive properties**: Properties can now be reactive across nested components.

For a full migration path, check the [Official Upgrade Guide](https://livewire.laravel.com/docs/upgrade-guide).
