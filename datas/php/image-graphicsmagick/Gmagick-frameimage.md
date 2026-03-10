# Gmagick::frameimage

Source: https://devdocs.io/php/gmagick.frameimage

(PECL gmagick >= Unknown)

Gmagick::frameimage — Adds a simulated three-dimensional border

### Description

```
public Gmagick::frameimage(
 GmagickPixel $color,
 int $width,
 int $height,
 int $inner_bevel,
 int $outer_bevel
): Gmagick
```

Adds a simulated three-dimensional border around the image. The width and height specify the border width of the vertical and horizontal sides of the frame. The inner and outer bevels indicate the width of the inner and outer shadows of the frame.

### Parameters

GmagickPixel object or a float representing the matte color.

The width of the border.

The height of the border.

The inner bevel width.

The outer bevel width.

### Return Values

The framed Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.frameimage.php
