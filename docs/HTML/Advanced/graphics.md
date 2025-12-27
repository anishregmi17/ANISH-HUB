---
sidebar_position: 3
---

# Graphics (Canvas & SVG)

HTML5 introduced two powerful ways to include graphics: `<canvas>` and `<svg>`.

## SVG (Scalable Vector Graphics)
SVG is an XML-based format for vector graphics. It is great for logos, icons, and simple illustrations because it scales indefinitely without losing quality.

### Example
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

**Pros**:
- Scalable (Vector).
- DOM accessible (you can add click listeners to shapes).
- Easy to style with CSS.

## Canvas
The `<canvas>` element is used to draw graphics on the fly via JavaScript (Raster). It's basically a container for pixels.

### Example
```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
</script>
```

**Pros**:
- High performance for many objects (games, particle effects).
- Pixel-level manipulation.
