# imageaffine

Source: https://devdocs.io/php/function.imageaffine

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

imageaffine — Return an image containing the affine transformed src image, using an optional clipping area

### Description

```
imageaffine(GdImage $image, array $affine, ?array $clip = null): GdImage|false
```

This function is currently not documented; only its argument list is available.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Array with keys 0 to 5.

Array with keys "x", "y", "width" and "height"; or null.

### Return Values

Return affined image object on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageaffine.php
