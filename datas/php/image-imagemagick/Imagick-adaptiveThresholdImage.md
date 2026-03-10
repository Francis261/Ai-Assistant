# Imagick::adaptiveThresholdImage

Source: https://devdocs.io/php/imagick.adaptivethresholdimage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveThresholdImage — Selects a threshold for each pixel based on a range of intensity

### Description

```
public Imagick::adaptiveThresholdImage(int $width, int $height, int $offset): bool
```

Selects an individual threshold for each pixel based on the range of intensity values in its local neighborhood. This allows for thresholding of an image whose global intensity histogram doesn't contain distinctive peaks.

### Parameters

Width of the local neighborhood.

Height of the local neighborhood.

The mean offset

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::adaptiveThresholdImage()

```
<?php
function adaptiveThresholdImage($imagePath, $width, $height, $adaptiveOffset) {
    $imagick = new \Imagick(realpath($imagePath));
    $adaptiveOffsetQuantum = intval($adaptiveOffset * \Imagick::getQuantum());
    $imagick->adaptiveThresholdImage($width, $height, $adaptiveOffsetQuantum);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.adaptivethresholdimage.php
