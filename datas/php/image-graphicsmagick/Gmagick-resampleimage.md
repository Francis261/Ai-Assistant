# Gmagick::resampleimage

Source: https://devdocs.io/php/gmagick.resampleimage

(PECL gmagick >= Unknown)

Gmagick::resampleimage — Resample image to desired resolution

### Description

```
public Gmagick::resampleimage(
 float $xResolution,
 float $yResolution,
 int $filter,
 float $blur
): Gmagick
```

Resample image to desired resolution.

### Parameters

The new image x resolution.

The new image y resolution.

Image filter to use.

The blur factor where larger than 1 is blurry, smaller than 1 is sharp.

### Return Values

The Gmagick object on success

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.resampleimage.php
