# Imagick::resampleImage

Source: https://devdocs.io/php/imagick.resampleimage

(PECL imagick 2, PECL imagick 3)

Imagick::resampleImage — Resample image to desired resolution

### Description

```
public Imagick::resampleImage(
 float $x_resolution,
 float $y_resolution,
 int $filter,
 float $blur
): bool
```

Resample image to desired resolution.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::resampleImage()

```
<?php
function resampleImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->resampleImage(200, 200, \Imagick::FILTER_LANCZOS, 1);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.resampleimage.php
