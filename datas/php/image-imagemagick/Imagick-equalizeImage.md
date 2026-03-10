# Imagick::equalizeImage

Source: https://devdocs.io/php/imagick.equalizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::equalizeImage — Equalizes the image histogram

### Description

```
public Imagick::equalizeImage(): bool
```

Equalizes the image histogram.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::equalizeImage()

```
<?php
function equalizeImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->equalizeImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.equalizeimage.php
