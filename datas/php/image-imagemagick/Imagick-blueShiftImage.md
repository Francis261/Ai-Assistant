# Imagick::blueShiftImage

Source: https://devdocs.io/php/imagick.blueshiftimage

(PECL imagick 3 >= 3.3.0)

Imagick::blueShiftImage — Mutes the colors of the image

### Description

```
public Imagick::blueShiftImage(float $factor = 1.5): bool
```

Mutes the colors of the image to simulate a scene at nighttime in the moonlight.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::blueShiftImage()

```
<?php
function blueShiftImage($imagePath, $blueShift) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->blueShiftImage($blueShift);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.blueshiftimage.php
