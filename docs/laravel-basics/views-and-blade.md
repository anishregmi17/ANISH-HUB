---
sidebar_position: 5
---

# Views and Blade

Blade is Laravel's powerful templating engine. It provides elegant syntax for creating views.

## Creating Views

Views are stored in `resources/views/`:

```php
<?php
// resources/views/welcome.blade.php
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome, {{ $name }}!</h1>
</body>
</html>
```

## Returning Views

```php
<?php
// From controller
return view('welcome', ['name' => 'Anish']);

// Using compact
$name = 'Anish';
$age = 25;
return view('profile', compact('name', 'age'));

// Using with
return view('profile')->with('name', 'Anish');
?>
```

## Blade Syntax

### Echoing Data

```blade
{{-- Display escaped data --}}
{{ $name }}

{{-- Display unescaped data (use carefully) --}}
{!! $html !!}

{{-- Display with default --}}
{{ $name ?? 'Guest' }}
```

### Control Structures

```blade
{{-- If statement --}}
@if($user->isAdmin())
    <p>You are an admin</p>
@elseif($user->isModerator())
    <p>You are a moderator</p>
@else
    <p>You are a regular user</p>
@endif

{{-- Unless (opposite of if) --}}
@unless($user->isAdmin())
    <p>You are not an admin</p>
@endunless

{{-- Loops --}}
@foreach($users as $user)
    <p>{{ $user->name }}</p>
@endforeach

@for($i = 0; $i < 10; $i++)
    <p>{{ $i }}</p>
@endfor

@while($condition)
    <p>Looping</p>
@endwhile
```

### Loops

```blade
@foreach($users as $user)
    <p>{{ $user->name }}</p>
@endforeach

{{-- Loop with index --}}
@foreach($users as $index => $user)
    <p>{{ $index }}: {{ $user->name }}</p>
@endforeach

{{-- Loop with first/last --}}
@foreach($users as $user)
    @if($loop->first)
        <p>First user: {{ $user->name }}</p>
    @endif
    
    @if($loop->last)
        <p>Last user: {{ $user->name }}</p>
    @endif
    
    <p>Iteration: {{ $loop->iteration }}</p>
    <p>Remaining: {{ $loop->remaining }}</p>
@endforeach
```

## Blade Components

### Layouts

```blade
{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title', 'Default Title')</title>
</head>
<body>
    @yield('content')
</body>
</html>
```

### Extending Layouts

```blade
{{-- resources/views/pages/home.blade.php --}}
@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
    <h1>Welcome to Home</h1>
@endsection
```

### Components

```blade
{{-- resources/views/components/alert.blade.php --}}
<div class="alert alert-{{ $type }}">
    {{ $message }}
</div>

{{-- Usage --}}
<x-alert type="success" message="Operation successful!" />
```

## Includes

```blade
{{-- Include partial --}}
@include('partials.header')

{{-- Include with data --}}
@include('partials.header', ['title' => 'Welcome'])

{{-- Include if exists --}}
@includeIf('partials.header')

{{-- Include first available --}}
@includeFirst(['custom.header', 'header'])
```

## Comments

```blade
{{-- This is a Blade comment --}}
{{-- 
    Multi-line
    comment
--}}
```

## Stacks

```blade
{{-- Push to stack --}}
@push('scripts')
    <script src="/js/app.js"></script>
@endpush

{{-- In layout --}}
@stack('scripts')
```

## Custom Directives

```php
<?php
// In AppServiceProvider
use Illuminate\Support\Facades\Blade;

Blade::directive('datetime', function ($expression) {
    return "<?php echo ($expression)->format('Y-m-d H:i:s'); ?>";
});
```

```blade
@datetime($post->created_at)
```

## Next Steps

Now let's learn about [Models and Eloquent](./models-and-eloquent)!

