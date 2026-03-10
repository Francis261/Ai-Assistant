# Imagick::selectiveBlurImage

Source: https://devdocs.io/php/imagick.selectiveblurimage

(PECL imagick 3 >= 3.3.0)

Imagick::selectiveBlurImage — Selectively blur an image within a contrast threshold

### Description

```
public Imagick::selectiveBlurImage(
 float $radius,
 float $sigma,
 float $threshold,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Selectively blur an image within a contrast threshold. It is similar to the unsharpen mask that sharpens everything with contrast above a certain threshold.

### Parameters

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::selectiveBlurImage()

```
<?php
function selectiveBlurImage($imagePath, $radius, $sigma, $threshold, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->selectiveBlurImage($radius, $sigma, $threshold, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.selectiveblurimage.php
