# Imagick::paintTransparentImage

Source: https://devdocs.io/php/imagick.painttransparentimage

(PECL imagick 2, PECL imagick 3)

Imagick::paintTransparentImage — Changes any pixel that matches color with the color defined by fill

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::paintTransparentImage(mixed $target, float $alpha, float $fuzz): bool
```

Changes any pixel that matches color with the color defined by fill.

### Parameters

Change this target color to specified opacity value within the image.

The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.

The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.painttransparentimage.php
