# Gmagick::raiseimage

Source: https://devdocs.io/php/gmagick.raiseimage

(PECL gmagick >= Unknown)

Gmagick::raiseimage — Creates a simulated 3d button-like effect

### Description

```
public Gmagick::raiseimage(
 int $width,
 int $height,
 int $x,
 int $y,
 bool $raise
): Gmagick
```

Creates a simulated three-dimensional button-like effect by lightening and darkening the edges of the image. Members width and height of raise_info define the width of the vertical and horizontal edge of the effect.

### Parameters

Width of the area to raise.

Height of the area to raise.

X coordinate.

Y coordinate.

A value other than zero creates a 3-D raise effect, otherwise it has a lowered effect.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.raiseimage.php
