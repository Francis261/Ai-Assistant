# Imagick::appendImages

Source: https://devdocs.io/php/imagick.appendimages

(PECL imagick 2, PECL imagick 3)

Imagick::appendImages — Append a set of images

### Description

```
public Imagick::appendImages(bool $stack): Imagick
```

Append a set of images into one larger image.

### Parameters

Whether to stack the images vertically. By default (or if false is specified) images are stacked left-to-right. If stack is true, images are stacked top-to-bottom.

### Return Values

Returns Imagick instance on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::appendImages() example

```
<?php

/* Create new imagick object */
$im = new Imagick();

/* create red, green and blue images */
$im->newImage(100, 50, "red");
$im->newImage(100, 50, "green");
$im->newImage(100, 50, "blue");

/* Append the images into one */
$im->resetIterator();
$combined = $im->appendImages(true);

/* Output the image */
$combined->setImageFormat("png");
header("Content-Type: image/png");
echo $combined;
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.appendimages.php
