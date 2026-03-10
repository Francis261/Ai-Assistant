# Imagick::cropThumbnailImage

Source: https://devdocs.io/php/imagick.cropthumbnailimage

(PECL imagick 2, PECL imagick 3)

Imagick::cropThumbnailImage — Creates a crop thumbnail

### Description

```
public Imagick::cropThumbnailImage(int $width, int $height, bool $legacy = false): bool
```

Creates a fixed size thumbnail by first scaling the image up or down and cropping a specified area from the center.

### Parameters

The width of the thumbnail

The Height of the thumbnail

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.cropthumbnailimage.php
