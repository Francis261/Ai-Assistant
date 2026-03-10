# Imagick::colorFloodfillImage

Source: https://devdocs.io/php/imagick.colorfloodfillimage

(PECL imagick 2, PECL imagick 3)

Imagick::colorFloodfillImage — Changes the color value of any pixel that matches target

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::colorFloodfillImage(
 mixed $fill,
 float $fuzz,
 mixed $bordercolor,
 int $x,
 int $y
): bool
```

Changes the color value of any pixel that matches target and is an immediate neighbor.

### Parameters

ImagickPixel object containing the fill color

The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color for the purposes of the floodfill.

ImagickPixel object containing the border color

X start position of the floodfill

Y start position of the floodfill

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.colorfloodfillimage.php
