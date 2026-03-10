# Imagick::trimImage

Source: https://devdocs.io/php/imagick.trimimage

(PECL imagick 2, PECL imagick 3)

Imagick::trimImage — Remove edges from the image

### Description

```
public Imagick::trimImage(float $fuzz): bool
```

Remove edges that are the background color from the image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

By default target must match a particular pixel color exactly. However, in many cases two colors may differ by a small amount. The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same. This parameter represents the variation on the quantum range.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::trimImage():

Trim an image, then display to the browser.

```
<?php
/* Create the object and read the image in */
$im = new Imagick("image.jpg");

/* Trim the image. */
$im->trimImage(0);

/* Ouput the image */
header("Content-Type: image/" . $im->getImageFormat());
echo $im;
?>
```

### See Also

- Imagick::getQuantumDepth() - Gets the quantum depth
- Imagick::getQuantumRange() - Returns the Imagick quantum range
- imagecropauto() - Crop an image automatically using one of the available modes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.trimimage.php
