# Imagick::motionBlurImage

Source: https://devdocs.io/php/imagick.motionblurimage

(PECL imagick 2, PECL imagick 3)

Imagick::motionBlurImage — Simulates motion blur

### Description

```
public Imagick::motionBlurImage(
 float $radius,
 float $sigma,
 float $angle,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Simulates motion blur. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and MotionBlurImage() selects a suitable radius for you. Angle gives the angle of the blurring motion.

### Parameters

The radius of the Gaussian, in pixels, not counting the center pixel.

The standard deviation of the Gaussian, in pixels.

Apply the effect along this angle.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants. The channel argument affects only if Imagick is compiled against ImageMagick version 6.4.4 or greater.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::motionBlurImage()

```
<?php
function motionBlurImage($imagePath, $radius, $sigma, $angle, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->motionBlurImage($radius, $sigma, $angle, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.motionblurimage.php
