# Imagick::previewImages

Source: https://devdocs.io/php/imagick.previewimages

(PECL imagick 2, PECL imagick 3)

Imagick::previewImages — Quickly pin-point appropriate parameters for image processing

### Description

```
public Imagick::previewImages(int $preview): bool
```

Tiles 9 thumbnails of the specified image with an image processing operation applied at varying strengths. This is helpful to quickly pin-point an appropriate parameter for an image processing operation.

### Parameters

Preview type. See Preview type constants

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.previewimages.php
