# Imagick::compareImages

Source: https://devdocs.io/php/imagick.compareimages

(PECL imagick 2, PECL imagick 3)

Imagick::compareImages — Compares an image to a reconstructed image

### Description

```
public Imagick::compareImages(Imagick $compare, int $metric): array
```

Returns an array containing a reconstructed image and the difference between images.

### Parameters

An image to compare to.

Provide a valid metric type constant. Refer to this list of metric constants.

### Return Values

Returns an array containing a reconstructed image and the difference between images.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::compareImages():

Compare images and display the reconstructed image

```
<?php

$image1 = new imagick("image1.png");
$image2 = new imagick("image2.png");

$result = $image1->compareImages($image2, Imagick::METRIC_MEANSQUAREERROR);
$result[0]->setImageFormat("png");

header("Content-Type: image/png");
echo $result[0];

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.compareimages.php
