# Imagick::edgeImage

Source: https://devdocs.io/php/imagick.edgeimage

(PECL imagick 2, PECL imagick 3)

Imagick::edgeImage — Enhance edges within the image

### Description

```
public Imagick::edgeImage(float $radius): bool
```

Enhance edges within the image with a convolution filter of the given radius. Use radius 0 and it will be auto-selected.

### Parameters

The radius of the operation.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::edgeImage()

```
<?php
function edgeImage($imagePath, $radius) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->edgeImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.edgeimage.php
