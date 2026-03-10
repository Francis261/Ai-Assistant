# Imagick::optimizeImageLayers

Source: https://devdocs.io/php/imagick.optimizeimagelayers

(PECL imagick 2, PECL imagick 3)

Imagick::optimizeImageLayers — Removes repeated portions of images to optimize

### Description

```
public Imagick::optimizeImageLayers(): bool
```

Compares each image the GIF disposed forms of the previous image in the sequence. From this it attempts to select the smallest cropped image to replace each frame, while preserving the results of the animation. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::optimizeImageLayers()

Reading, optimizing and writing a GIF image

```
<?php
/* create new imagick object */
$im = new Imagick("test.gif");

/* optimize the image layers */
$im->optimizeImageLayers();

/* write the image back */
$im->writeImages("test_optimized.gif", true);
?>
```

### See Also

- Imagick::compareImageLayers() - Returns the maximum bounding region between images
- Imagick::writeImages() - Writes an image or image sequence
- Imagick::writeImage() - Writes an image to the specified filename

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.optimizeimagelayers.php
