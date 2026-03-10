# Imagick::sketchImage

Source: https://devdocs.io/php/imagick.sketchimage

(PECL imagick 2, PECL imagick 3)

Imagick::sketchImage — Simulates a pencil sketch

### Description

```
public Imagick::sketchImage(float $radius, float $sigma, float $angle): bool
```

Simulates a pencil sketch. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and Imagick::sketchImage() selects a suitable radius for you. Angle gives the angle of the blurring motion. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The radius of the Gaussian, in pixels, not counting the center pixel

The standard deviation of the Gaussian, in pixels.

Apply the effect along this angle.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::sketchImage()

```
<?php
function sketchImage($imagePath, $radius, $sigma, $angle) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->sketchimage($radius, $sigma, $angle);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.sketchimage.php
