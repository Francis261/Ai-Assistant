# Imagick::oilPaintImage

Source: https://devdocs.io/php/imagick.oilpaintimage

(PECL imagick 2, PECL imagick 3)

Imagick::oilPaintImage — Simulates an oil painting

### Description

```
public Imagick::oilPaintImage(float $radius): bool
```

Applies a special effect filter that simulates an oil painting. Each pixel is replaced by the most frequent color occurring in a circular region defined by radius.

### Parameters

The radius of the circular neighborhood.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::oilPaintImage()

```
<?php
function oilPaintImage($imagePath, $radius) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->oilPaintImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.oilpaintimage.php
