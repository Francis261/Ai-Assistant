# Imagick::compareImageLayers

Source: https://devdocs.io/php/imagick.compareimagelayers

(PECL imagick 2, PECL imagick 3)

Imagick::compareImageLayers — Returns the maximum bounding region between images

### Description

```
public Imagick::compareImageLayers(int $method): Imagick
```

Compares each image with the next in a sequence and returns the maximum bounding region of any pixel differences it discovers. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

One of the layer method constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::compareImageLayers()

Comparing image layers

```
<?php
/* create new imagick object */
$im = new Imagick("test.gif");

/* optimize the image layers */
$result = $im->compareImageLayers(imagick::LAYERMETHOD_COALESCE);

/* work on the $result */
?>
```

### See Also

- Imagick::optimizeImageLayers() - Removes repeated portions of images to optimize
- Imagick::writeImages() - Writes an image or image sequence
- Imagick::writeImage() - Writes an image to the specified filename

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.compareimagelayers.php
