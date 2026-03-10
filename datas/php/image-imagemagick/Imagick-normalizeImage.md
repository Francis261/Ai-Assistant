# Imagick::normalizeImage

Source: https://devdocs.io/php/imagick.normalizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::normalizeImage — Enhances the contrast of a color image

### Description

```
public Imagick::normalizeImage(int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Enhances the contrast of a color image by adjusting the pixels color to span the entire range of colors available.

### Parameters

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::normalizeImage()

```
<?php
function normalizeImage($imagePath, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $original = clone $imagick;
    $original->cropimage($original->getImageWidth() / 2, $original->getImageHeight(), 0, 0);
    $imagick->normalizeImage($channel);
    $imagick->compositeimage($original, \Imagick::COMPOSITE_ATOP, 0, 0);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.normalizeimage.php
