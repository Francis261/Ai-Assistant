# Imagick::tintImage

Source: https://devdocs.io/php/imagick.tintimage

(PECL imagick 2, PECL imagick 3)

Imagick::tintImage — Applies a color vector to each pixel in the image

### Description

```
public Imagick::tintImage(mixed $tint, mixed $opacity, bool $legacy = false): bool
```

Applies a color vector to each pixel in the image. The length of the vector is 0 for black and white and at its maximum for the midtones. The vector weighing function is f(x)=(1-(4.0*((x-0.5)*(x-0.5)))).

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

### Examples

Example #1 Imagick::tintImage()

```
<?php
function tintImage($r, $g, $b, $a) {
    $a = $a / 100;

    $imagick = new \Imagick();
    $imagick->newPseudoImage(400, 400, 'gradient:black-white');

    $tint = new \ImagickPixel("rgb($r, $g, $b)");
    $opacity = new \ImagickPixel("rgb(128, 128, 128, $a)");
    $imagick->tintImage($tint, $opacity);
    $imagick->setImageFormat('png');
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.tintimage.php
