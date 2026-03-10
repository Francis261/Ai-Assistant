# Imagick::whiteThresholdImage

Source: https://devdocs.io/php/imagick.whitethresholdimage

(PECL imagick 2, PECL imagick 3)

Imagick::whiteThresholdImage — Force all pixels above the threshold into white

### Description

```
public Imagick::whiteThresholdImage(mixed $threshold): bool
```

Is like Imagick::ThresholdImage() but force all pixels above the threshold into white while leaving all pixels below the threshold unchanged.

### Parameters

### Return Values

Returns true on success.

### Changelog

### Examples

Example #1 Imagick::whiteThresholdImage()

```
<?php
function whiteThresholdImage($imagePath, $color) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->whiteThresholdImage($color);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.whitethresholdimage.php
