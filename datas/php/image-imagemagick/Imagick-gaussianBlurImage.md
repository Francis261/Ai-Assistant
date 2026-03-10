# Imagick::gaussianBlurImage

Source: https://devdocs.io/php/imagick.gaussianblurimage

(PECL imagick 2, PECL imagick 3)

Imagick::gaussianBlurImage — Blurs an image

### Description

```
public Imagick::gaussianBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Blurs an image. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, the radius should be larger than sigma. Use a radius of 0 and selects a suitable radius for you.

### Parameters

The radius of the Gaussian, in pixels, not counting the center pixel.

The standard deviation of the Gaussian, in pixels.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::gaussianBlurImage()

```
<?php
function gaussianBlurImage($imagePath, $radius, $sigma, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->gaussianBlurImage($radius, $sigma, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.gaussianblurimage.php
