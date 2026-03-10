# Imagick::adaptiveBlurImage

Source: https://devdocs.io/php/imagick.adaptiveblurimage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveBlurImage — Adds adaptive blur filter to image

### Description

```
public Imagick::adaptiveBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Adds an adaptive blur filter to image. The intensity of an adaptive blur depends is dramatically decreased at edge of the image, whereas a standard blur is uniform across the image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The radius of the Gaussian, in pixels, not counting the center pixel. Provide a value of 0 and the radius will be chosen automagically.

The standard deviation of the Gaussian, in pixels.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::adaptiveBlurImage():

Adaptively blur an image, then display to the browser.

```
<?php

header('Content-type: image/jpeg');

$image = new Imagick('test.jpg');

$image->adaptiveBlurImage(5,3);
echo $image;

?>
```

The above example will output something similar to:

### See Also

- Imagick::blurImage() - Adds blur filter to image
- Imagick::motionBlurImage() - Simulates motion blur
- Imagick::radialBlurImage() - Radial blurs an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.adaptiveblurimage.php
