# Imagick::liquidRescaleImage

Source: https://devdocs.io/php/imagick.liquidrescaleimage

(PECL imagick 2 >= 2.2.0, PECL imagick 3)

Imagick::liquidRescaleImage — Animates an image or images

### Description

```
public Imagick::liquidRescaleImage(
 int $width,
 int $height,
 float $delta_x,
 float $rigidity
): bool
```

This method scales the images using liquid rescaling method. This method is an implementation of a technique called seam carving. In order for this method to work as expected ImageMagick must be compiled with liblqr support. This method is available if Imagick has been compiled against ImageMagick version 6.3.9 or newer.

### Parameters

The width of the target size

The height of the target size

How much the seam can traverse on x-axis. Passing 0 causes the seams to be straight.

Introduces a bias for non-straight seams. This parameter is typically 0.

### Return Values

Returns true on success.

### See Also

- Imagick::resizeImage() - Scales an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.liquidrescaleimage.php
