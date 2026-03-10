# Imagick::blurImage

Source: https://devdocs.io/php/imagick.blurimage

(PECL imagick 2, PECL imagick 3)

Imagick::blurImage — Adds blur filter to image

### Description

```
public Imagick::blurImage(float $radius, float $sigma, int $channel = ?): bool
```

Adds blur filter to image. Optional third parameter to blur a specific channel.

### Parameters

Blur radius

Standard deviation

The Channeltype constant. When not supplied, all channels are blurred.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::blurImage():

Blur an image, then display to the browser.

```
<?php

header('Content-type: image/jpeg');

$image = new Imagick('test.jpg');

$image->blurImage(5,3);
echo $image;

?>
```

### See Also

- Imagick::adaptiveBlurImage() - Adds adaptive blur filter to image
- Imagick::motionBlurImage() - Simulates motion blur
- Imagick::radialBlurImage() - Radial blurs an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.blurimage.php
