# Imagick::linearStretchImage

Source: https://devdocs.io/php/imagick.linearstretchimage

(PECL imagick 2, PECL imagick 3)

Imagick::linearStretchImage — Stretches with saturation the image intensity

### Description

```
public Imagick::linearStretchImage(float $blackPoint, float $whitePoint): bool
```

Stretches with saturation the image intensity.

### Parameters

The image black point

The image white point

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::linearStretchImage()

```
<?php
function linearStretchImage($imagePath, $blackThreshold, $whiteThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $pixels = $imagick->getImageWidth() * $imagick->getImageHeight();
    $imagick->linearStretchImage($blackThreshold * $pixels, $whiteThreshold * $pixels);

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.linearstretchimage.php
