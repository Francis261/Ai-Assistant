# Imagick::despeckleImage

Source: https://devdocs.io/php/imagick.despeckleimage

(PECL imagick 2, PECL imagick 3)

Imagick::despeckleImage — Reduces the speckle noise in an image

### Description

```
public Imagick::despeckleImage(): bool
```

Reduces the speckle noise in an image while preserving the edges of the original image.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::despeckleImage()

```
<?php
function despeckleImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->despeckleImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.despeckleimage.php
