# Imagick::sharpenImage

Source: https://devdocs.io/php/imagick.sharpenimage

(PECL imagick 2, PECL imagick 3)

Imagick::sharpenImage — Sharpens an image

### Description

```
public Imagick::sharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Sharpens an image. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, the radius should be larger than sigma. Use a radius of 0 and Imagick::sharpenImage() selects a suitable radius for you.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::sharpenImage()

```
<?php
function sharpenImage($imagePath, $radius, $sigma, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->sharpenimage($radius, $sigma, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.sharpenimage.php
