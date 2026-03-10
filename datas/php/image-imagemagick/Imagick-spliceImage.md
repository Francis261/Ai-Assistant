# Imagick::spliceImage

Source: https://devdocs.io/php/imagick.spliceimage

(PECL imagick 2, PECL imagick 3)

Imagick::spliceImage — Splices a solid color into the image

### Description

```
public Imagick::spliceImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

Splices a solid color into the image.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::spliceImage()

```
<?php
function spliceImage($imagePath, $startX, $startY, $width, $height) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->spliceImage($width, $height, $startX, $startY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.spliceimage.php
