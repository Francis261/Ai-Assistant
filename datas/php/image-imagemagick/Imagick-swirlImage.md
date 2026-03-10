# Imagick::swirlImage

Source: https://devdocs.io/php/imagick.swirlimage

(PECL imagick 2, PECL imagick 3)

Imagick::swirlImage — Swirls the pixels about the center of the image

### Description

```
Imagick::swirlImage(float $degrees): bool
```

Swirls the pixels about the center of the image, where degrees indicates the sweep of the arc through which each pixel is moved. You get a more dramatic effect as the degrees move from 1 to 360.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::swirlImage()

```
<?php
function swirlImage($imagePath, $swirl) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->swirlImage($swirl);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.swirlimage.php
