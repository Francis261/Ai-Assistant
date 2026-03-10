# Gmagick::reducenoiseimage

Source: https://devdocs.io/php/gmagick.reducenoiseimage

(PECL gmagick >= Unknown)

Gmagick::reducenoiseimage — Smooths the contours of an image

### Description

```
public Gmagick::reducenoiseimage(float $radius): Gmagick
```

Smooths the contours of an image while still preserving edge information. The algorithm works by replacing each pixel with its neighbor closest in value. A neighbor is defined by radius. Use a radius of 0 and Gmagick::reducenoiseimage() selects a suitable radius for you.

### Parameters

The radius of the pixel neighborhood.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.reducenoiseimage.php
