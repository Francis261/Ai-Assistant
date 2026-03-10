# Gmagick::resizeimage

Source: https://devdocs.io/php/gmagick.resizeimage

(PECL gmagick >= Unknown)

Gmagick::resizeimage — Scales an image

### Description

```
public Gmagick::resizeimage(
 int $width,
 int $height,
 int $filter,
 float $blur,
 bool $fit = false
): Gmagick
```

Scales an image to the desired dimensions with a filter.

### Parameters

The number of columns in the scaled image.

The number of rows in the scaled image.

Image filter to use.

The blur factor where larger than 1 is blurry, lesser than 1 is sharp.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.resizeimage.php
