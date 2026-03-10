# Imagick::rollImage

Source: https://devdocs.io/php/imagick.rollimage

(PECL imagick 2, PECL imagick 3)

Imagick::rollImage — Offsets an image

### Description

```
public Imagick::rollImage(int $x, int $y): bool
```

Offsets an image as defined by x and y.

### Parameters

The X offset.

The Y offset.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::rollImage()

```
<?php
function rollImage($imagePath, $rollX, $rollY) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->rollimage($rollX, $rollY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.rollimage.php
