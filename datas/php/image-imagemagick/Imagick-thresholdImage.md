# Imagick::thresholdImage

Source: https://devdocs.io/php/imagick.thresholdimage

(PECL imagick 2, PECL imagick 3)

Imagick::thresholdImage — Changes the value of individual pixels based on a threshold

### Description

```
public Imagick::thresholdImage(float $threshold, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Changes the value of individual pixels based on the intensity of each pixel compared to threshold. The result is a high-contrast, two color image.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::thresholdImage()

```
<?php
function thresholdimage($imagePath, $threshold, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->thresholdimage($threshold * \Imagick::getQuantum(), $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.thresholdimage.php
