---
sidebar_position: 2
---

# Audio & Video

HTML5 introduced standard tags to play media files without third-party plugins (like Flash).

## Video Element

To show a video, use the `<video>` element.

```html
<video width="320" height="240" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

### Attributes
- `controls`: Adds play/pause buttons, volume, etc.
- `autoplay`: Starts playing automatically (often requires `muted`).
- `muted`: Mutes the audio.
- `loop`: Restarts video when finished.
- `poster`: An image to show before the video plays.

## Audio Element

To play sound, use the `<audio>` element.

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### Attributes
- `controls`: Adds play/pause buttons.
- `autoplay`: Starts playing automatically.
- `loop`: Restarts audio when finished.
- `muted`: Mutes the audio.
