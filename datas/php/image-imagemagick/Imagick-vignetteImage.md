# Imagick::vignetteImage

Source: https://devdocs.io/php/imagick.vignetteimage

(PECL imagick 2, PECL imagick 3)

Imagick::vignetteImage — Adds vignette filter to the image

### Description

```
public Imagick::vignetteImage(
 float $blackPoint,
 float $whitePoint,
 int $x,
 int $y
): bool
```

Softens the edges of the image in vignette style. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The black point.

The white point

X offset of the ellipse

Y offset of the ellipse

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::vignetteImage()

```
<?php
function vignetteImage($imagePath, $blackPoint, $whitePoint, $x, $y) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->vignetteImage($blackPoint, $whitePoint, $x, $y);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

### See Also

- Imagick::waveImage() - Applies wave filter to the image
- Imagick::swirlImage() - Swirls the pixels about the center of the image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.vignetteimage.php
