# Imagick::spreadImage

Source: https://devdocs.io/php/imagick.spreadimage

(PECL imagick 2, PECL imagick 3)

Imagick::spreadImage — Randomly displaces each pixel in a block

### Description

```
public Imagick::spreadImage(float $radius): bool
```

Special effects method that randomly displaces each pixel in a block defined by the radius parameter.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::spreadImage()

```
<?php
function spreadImage($imagePath, $radius) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->spreadImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.spreadimage.php
