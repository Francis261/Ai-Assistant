# Imagick::rotationalBlurImage

Source: https://devdocs.io/php/imagick.rotationalblurimage

(PECL imagick 3 >= 3.3.0)

Imagick::rotationalBlurImage — Rotational blurs an image

### Description

```
public Imagick::rotationalBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Rotational blurs an image.

### Parameters

The angle to apply the blur over.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::rotationalBlurImage()

```
<?php
function rotationalBlurImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->rotationalBlurImage(3);
    $imagick->rotationalBlurImage(5);
    $imagick->rotationalBlurImage(7);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.rotationalblurimage.php
