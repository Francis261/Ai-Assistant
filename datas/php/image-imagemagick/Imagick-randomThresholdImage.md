# Imagick::randomThresholdImage

Source: https://devdocs.io/php/imagick.randomthresholdimage

(PECL imagick 2, PECL imagick 3)

Imagick::randomThresholdImage — Creates a high-contrast, two-color image

### Description

```
public Imagick::randomThresholdImage(float $low, float $high, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Changes the value of individual pixels based on the intensity of each pixel compared to threshold. The result is a high-contrast, two color image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The low point

The high point

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::randomThresholdImage()

```
<?php
function randomThresholdimage($imagePath, $lowThreshold, $highThreshold, $channel) {
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->randomThresholdimage(
        $lowThreshold * \Imagick::getQuantum(),
        $highThreshold * \Imagick::getQuantum(),
        $channel
    );
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.randomthresholdimage.php
