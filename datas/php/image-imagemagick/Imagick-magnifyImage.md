# Imagick::magnifyImage

Source: https://devdocs.io/php/imagick.magnifyimage

(PECL imagick 2, PECL imagick 3)

Imagick::magnifyImage — Scales an image proportionally 2x

### Description

```
public Imagick::magnifyImage(): bool
```

Is a convenience method that scales an image proportionally to twice its original size.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::magnifyImage()

```
<?php
function magnifyImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->magnifyImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.magnifyimage.php
