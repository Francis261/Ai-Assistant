# Imagick::matteFloodfillImage

Source: https://devdocs.io/php/imagick.mattefloodfillimage

(PECL imagick 2, PECL imagick 3)

Imagick::matteFloodfillImage — Changes the transparency value of a color

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::matteFloodfillImage(
 float $alpha,
 float $fuzz,
 mixed $bordercolor,
 int $x,
 int $y
): bool
```

Changes the transparency value of any pixel that matches target and is an immediate neighbor. If the method FillToBorderMethod is specified, the transparency value is changed for any neighbor pixel that does not match the bordercolor member of image.

### Parameters

The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.

The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same.

An ImagickPixel object or string representing the border color.

The starting x coordinate of the operation.

The starting y coordinate of the operation.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.mattefloodfillimage.php
