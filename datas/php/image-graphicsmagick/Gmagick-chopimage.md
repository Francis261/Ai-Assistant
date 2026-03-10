# Gmagick::chopimage

Source: https://devdocs.io/php/gmagick.chopimage

(PECL gmagick >= Unknown)

Gmagick::chopimage — Removes a region of an image and trims

### Description

```
public Gmagick::chopimage(
 int $width,
 int $height,
 int $x,
 int $y
): Gmagick
```

Removes a region of an image and collapses the image to occupy the removed portion.

### Parameters

Width of the chopped area.

Height of the chopped area.

X origo of the chopped area.

Y origo of the chopped area.

### Return Values

The chopped Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.chopimage.php
