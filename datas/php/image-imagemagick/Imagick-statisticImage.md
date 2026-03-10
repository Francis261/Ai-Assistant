# Imagick::statisticImage

Source: https://devdocs.io/php/imagick.statisticimage

(PECL imagick 3 >= 3.3.0)

Imagick::statisticImage — Modifies image using a statistics function

### Description

```
public Imagick::statisticImage(
 int $type,
 int $width,
 int $height,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Replace each pixel with corresponding statistic from the neighborhood of the specified width and height.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::statisticImage()

```
<?php
function statisticImage($imagePath, $statisticType, $width, $height, $channel) {
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->statisticImage(
        $statisticType,
        $width,
        $height,
        $channel
    );

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

statisticImage($imagePath, \Imagick::STATISTIC_MEDIAN, 5, 5, \Imagick::CHANNEL_DEFAULT);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.statisticimage.php
