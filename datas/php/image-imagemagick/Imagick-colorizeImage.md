# Imagick::colorizeImage

Source: https://devdocs.io/php/imagick.colorizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::colorizeImage — Blends the fill color with the image

### Description

```
public Imagick::colorizeImage(mixed $colorize, mixed $opacity, bool $legacy = false): bool
```

Blends the fill color with each pixel in the image.

### Parameters

ImagickPixel object or a string containing the colorize color

ImagickPixel object or an float containing the opacity value. 1.0 is fully opaque and 0.0 is fully transparent.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

### Examples

Example #1 Imagick::colorizeImage()

```
<?php
function colorizeImage($imagePath, $color, $opacity) {
    $imagick = new \Imagick(realpath($imagePath));
    $opacity = $opacity / 255.0;
    $opacityColor = new \ImagickPixel("rgba(0, 0, 0, $opacity)");
    $imagick->colorizeImage($color, $opacityColor);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.colorizeimage.php
