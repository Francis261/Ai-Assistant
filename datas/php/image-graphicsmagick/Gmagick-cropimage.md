# Gmagick::cropimage

Source: https://devdocs.io/php/gmagick.cropimage

(PECL gmagick >= Unknown)

Gmagick::cropimage — Extracts a region of the image

### Description

```
public Gmagick::cropimage(
  int $width ,
  int $height ,
 int $x,
 int $y
): Gmagick
```

Extracts a region of the image.

### Parameters

The width of the crop.

The height of the crop.

The X coordinate of the cropped region's top left corner.

The Y coordinate of the cropped region's top left corner.

### Return Values

The cropped Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.cropimage.php
