# Imagick::blackThresholdImage

Source: https://devdocs.io/php/imagick.blackthresholdimage

(PECL imagick 2, PECL imagick 3)

Imagick::blackThresholdImage — Forces all pixels below the threshold into black

### Description

```
public Imagick::blackThresholdImage(mixed $threshold): bool
```

Is like Imagick::thresholdImage() but forces all pixels below the threshold into black while leaving all pixels above the threshold unchanged.

### Parameters

The threshold below which everything turns black

### Return Values

Returns true on success.

### Changelog

### Examples

Example #1 Imagick::blackThresholdImage()

```
<?php
function blackThresholdImage($imagePath, $thresholdColor) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->blackthresholdimage($thresholdColor);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.blackthresholdimage.php
