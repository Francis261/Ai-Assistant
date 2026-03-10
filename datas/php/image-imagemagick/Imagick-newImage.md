# Imagick::newImage

Source: https://devdocs.io/php/imagick.newimage

(PECL imagick 2, PECL imagick 3)

Imagick::newImage — Creates a new image

### Description

```
public Imagick::newImage(
 int $cols,
 int $rows,
 mixed $background,
 string $format = ?
): bool
```

Creates a new image and associates ImagickPixel value as background color

### Parameters

Columns in the new image

Rows in the new image

The background color used for this image

Image format. This parameter was added in Imagick version 2.0.1.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

### Examples

Example #1 Using Imagick::newImage():

Create a new image and display it.

```
<?php

$image = new Imagick();
$image->newImage(100, 100, new ImagickPixel('red'));
$image->setImageFormat('png');

header('Content-type: image/png');
echo $image;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.newimage.php
