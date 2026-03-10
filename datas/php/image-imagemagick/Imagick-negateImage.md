# Imagick::negateImage

Source: https://devdocs.io/php/imagick.negateimage

(PECL imagick 2, PECL imagick 3)

Imagick::negateImage — Negates the colors in the reference image

### Description

```
public Imagick::negateImage(bool $gray, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Negates the colors in the reference image. The Grayscale option means that only grayscale values within the image are negated.

### Parameters

Whether to only negate grayscale pixels within the image.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::negateImage()

```
<?php
function negateImage($imagePath, $grayOnly, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->negateImage($grayOnly, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.negateimage.php
