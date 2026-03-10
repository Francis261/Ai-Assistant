# Imagick::fxImage

Source: https://devdocs.io/php/imagick.fximage

(PECL imagick 2, PECL imagick 3)

Imagick::fxImage — Evaluate expression for each pixel in the image

### Description

```
public Imagick::fxImage(string $expression, int $channel = Imagick::CHANNEL_DEFAULT): Imagick
```

Evaluate expression for each pixel in the image. Consult » The Fx Special Effects Image Operator for more information.

### Parameters

The expression.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::fxImage()

```
<?php
function fxImage() {
    $imagick = new \Imagick();
    $imagick->newPseudoImage(200, 200, "xc:white");

    $fx = 'xx=i-w/2; yy=j-h/2; rr=hypot(xx,yy); (.5-rr/140)*1.2+.5';
    $fxImage = $imagick->fxImage($fx);

    header("Content-Type: image/png");
    $fxImage->setimageformat('png');
    echo $fxImage->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.fximage.php
