# Imagick::getImageRegion

Source: https://devdocs.io/php/imagick.getimageregion

(PECL imagick 2, PECL imagick 3)

Imagick::getImageRegion — Extracts a region of the image

### Description

```
public Imagick::getImageRegion(
 int $width,
 int $height,
 int $x,
 int $y
): Imagick
```

Extracts a region of the image and returns it as a new Imagick object.

### Parameters

The width of the extracted region.

The height of the extracted region.

X-coordinate of the top-left corner of the extracted region.

Y-coordinate of the top-left corner of the extracted region.

### Return Values

Extracts a region of the image and returns it as a new wand.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimageregion.php
