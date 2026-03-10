# Imagick::segmentImage

Source: https://devdocs.io/php/imagick.segmentimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::segmentImage — Segments an image

### Description

```
public Imagick::segmentImage(
 int $COLORSPACE,
 float $cluster_threshold,
 float $smooth_threshold,
 bool $verbose = false
): bool
```

Analyses the image and identifies units that are similar. This method is available if Imagick has been compiled against ImageMagick version 6.4.5 or newer.

### Parameters

One of the COLORSPACE constants.

A percentage describing minimum number of pixels contained in hexedra before it is considered valid.

Eliminates noise from the histogram.

Whether to output detailed information about recognised classes.

### Return Values

### Examples

Example #1 Imagick::segmentImage()

```
<?php
function segmentImage($imagePath, $colorSpace, $clusterThreshold, $smoothThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->segmentImage($colorSpace, $clusterThreshold, $smoothThreshold);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

segmentImage($imagePath, \Imagick::COLORSPACE_RGB, 5, 5);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.segmentimage.php
