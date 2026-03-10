# Imagick::enhanceImage

Source: https://devdocs.io/php/imagick.enhanceimage

(PECL imagick 2, PECL imagick 3)

Imagick::enhanceImage — Improves the quality of a noisy image

### Description

```
public Imagick::enhanceImage(): bool
```

Applies a digital filter that improves the quality of a noisy image.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::enhanceImage()

```
<?php
function enhanceImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->enhanceImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.enhanceimage.php
