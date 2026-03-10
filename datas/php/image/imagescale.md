# imagescale

Source: https://devdocs.io/php/function.imagescale

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

imagescale — Scale an image using the given new width and height

### Description

```
imagescale(
 GdImage $image,
 int $width,
 int $height = -1,
 int $mode = IMG_BILINEAR_FIXED
): GdImage|false
```

imagescale() scales an image using the given interpolation algorithm.

Note:

Unlike many of other image functions, imagescale() does not modify the passed image; instead, a new image is returned.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The width to scale the image to.

The height to scale the image to. If omitted or negative, the aspect ratio will be preserved.

One of IMG_NEAREST_NEIGHBOUR, IMG_BILINEAR_FIXED, IMG_BICUBIC, IMG_BICUBIC_FIXED or anything else (will use two pass).

Note: IMG_WEIGHTED4 is not yet supported.

### Return Values

Return the scaled image object on success or false on failure.

### Errors/Exceptions

Throws a ValueError if width or height would cause over-/underflow.

Throws a ValueError if mode is invalid.

### Changelog

### See Also

- imagecopyresized() - Copy and resize part of an image
- imagecopyresampled() - Copy and resize part of an image with resampling

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagescale.php
