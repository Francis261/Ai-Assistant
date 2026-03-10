# Imagick::getImageDistortion

Source: https://devdocs.io/php/imagick.getimagedistortion

(PECL imagick 2, PECL imagick 3)

Imagick::getImageDistortion — Compares an image to a reconstructed image

### Description

```
public Imagick::getImageDistortion(MagickWand $reference, int $metric): float
```

Compares an image to a reconstructed image and returns the specified distortion metric.

### Parameters

Imagick object to compare to.

One of the metric type constants.

### Return Values

Returns the distortion metric used on the image (or the best guess thereof).

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagedistortion.php
