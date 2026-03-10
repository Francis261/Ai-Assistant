# Imagick::shadowImage

Source: https://devdocs.io/php/imagick.shadowimage

(PECL imagick 2, PECL imagick 3)

Imagick::shadowImage — Simulates an image shadow

### Description

```
public Imagick::shadowImage(
 float $opacity,
 float $sigma,
 int $x,
 int $y
): bool
```

Simulates an image shadow.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::shadowImage()

```
<?php
function shadowImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shadowImage(0.4, 10, 50, 5);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.shadowimage.php
