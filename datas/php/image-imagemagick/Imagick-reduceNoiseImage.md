# Imagick::reduceNoiseImage

Source: https://devdocs.io/php/imagick.reducenoiseimage

(PECL imagick 2, PECL imagick 3)

Imagick::reduceNoiseImage — Smooths the contours of an image

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::reduceNoiseImage(float $radius): bool
```

Smooths the contours of an image while still preserving edge information. The algorithm works by replacing each pixel with its neighbor closest in value. A neighbor is defined by radius. Use a radius of 0 and Imagick::reduceNoiseImage() selects a suitable radius for you.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::reduceNoiseImage()

```
<?php
function reduceNoiseImage($imagePath, $reduceNoise) {
    $imagick = new \Imagick(realpath($imagePath));
    @$imagick->reduceNoiseImage($reduceNoise);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.reducenoiseimage.php
