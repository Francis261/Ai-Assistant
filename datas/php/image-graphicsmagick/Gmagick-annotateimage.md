# Gmagick::annotateimage

Source: https://devdocs.io/php/gmagick.annotateimage

(PECL gmagick >= Unknown)

Gmagick::annotateimage — Annotates an image with text

### Description

```
public Gmagick::annotateimage(
 GmagickDraw $GmagickDraw,
 float $x,
 float $y,
 float $angle,
 string $text
): Gmagick
```

Annotates an image with text.

### Parameters

The GmagickDraw object that contains settings for drawing the text.

Horizontal offset in pixels to the left of text.

Vertical offset in pixels to the baseline of text.

The angle at which to write the text.

The string to draw.

### Return Values

The Gmagick object with annotation made.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.annotateimage.php
