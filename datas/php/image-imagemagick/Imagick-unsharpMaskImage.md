# Imagick::unsharpMaskImage

Source: https://devdocs.io/php/imagick.unsharpmaskimage

(PECL imagick 2, PECL imagick 3)

Imagick::unsharpMaskImage — Sharpens an image

### Description

```
public Imagick::unsharpMaskImage(
 float $radius,
 float $sigma,
 float $amount,
 float $threshold,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Sharpens an image. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and Imagick::UnsharpMaskImage() selects a suitable radius for you.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::unsharpMaskImage()

```
<?php
function unsharpMaskImage($imagePath, $radius, $sigma, $amount, $unsharpThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->unsharpMaskImage($radius, $sigma, $amount, $unsharpThreshold);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.unsharpmaskimage.php
