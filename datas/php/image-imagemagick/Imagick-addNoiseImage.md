# Imagick::addNoiseImage

Source: https://devdocs.io/php/imagick.addnoiseimage

(PECL imagick 2, PECL imagick 3)

Imagick::addNoiseImage — Adds random noise to the image

### Description

```
public Imagick::addNoiseImage(int $noise_type, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Adds random noise to the image.

### Parameters

The type of the noise. Refer to this list of noise constants.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::addNoiseImage()

```
<?php
function addNoiseImage($noiseType, $imagePath, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->addNoiseImage($noiseType, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.addnoiseimage.php
