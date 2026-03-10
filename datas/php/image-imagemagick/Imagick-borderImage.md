# Imagick::borderImage

Source: https://devdocs.io/php/imagick.borderimage

(PECL imagick 2, PECL imagick 3)

Imagick::borderImage — Surrounds the image with a border

### Description

```
public Imagick::borderImage(mixed $bordercolor, int $width, int $height): bool
```

Surrounds the image with a border of the color defined by the bordercolor ImagickPixel object.

### Parameters

ImagickPixel object or a string containing the border color

Border width

Border height

### Return Values

Returns true on success.

### Changelog

### Examples

Example #1 Imagick::borderImage()

```
<?php
function borderImage($imagePath, $color, $width, $height) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->borderImage($color, $width, $height);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.borderimage.php
