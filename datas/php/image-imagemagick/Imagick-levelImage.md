# Imagick::levelImage

Source: https://devdocs.io/php/imagick.levelimage

(PECL imagick 2, PECL imagick 3)

Imagick::levelImage — Adjusts the levels of an image

### Description

```
public Imagick::levelImage(
 float $blackPoint,
 float $gamma,
 float $whitePoint,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Adjusts the levels of an image by scaling the colors falling between specified white and black points to the full available quantum range. The parameters provided represent the black, mid, and white points. The black point specifies the darkest color in the image. Colors darker than the black point are set to zero. Mid point specifies a gamma correction to apply to the image. White point specifies the lightest color in the image. Colors brighter than the white point are set to the maximum quantum value.

### Parameters

The image black point

The gamma value

The image white point

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::levelImage()

```
<?php
function levelImage($blackPoint, $gamma, $whitePoint) {
    $imagick = new \Imagick();
    $imagick->newPseudoimage(500, 500, 'gradient:black-white');

    $imagick->setFormat('png');
    $quantum = $imagick->getQuantum();
    $imagick->levelImage($blackPoint / 100 , $gamma, $quantum * $whitePoint / 100);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.levelimage.php
