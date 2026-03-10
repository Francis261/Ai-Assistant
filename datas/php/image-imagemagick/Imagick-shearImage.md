# Imagick::shearImage

Source: https://devdocs.io/php/imagick.shearimage

(PECL imagick 2, PECL imagick 3)

Imagick::shearImage — Creating a parallelogram

### Description

```
public Imagick::shearImage(mixed $background, float $x_shear, float $y_shear): bool
```

Slides one edge of an image along the X or Y axis, creating a parallelogram. An X direction shear slides an edge along the X axis, while a Y direction shear slides an edge along the Y axis. The amount of the shear is controlled by a shear angle. For X direction shears, x_shear is measured relative to the Y axis, and similarly, for Y direction shears y_shear is measured relative to the X axis. Empty triangles left over from shearing the image are filled with the background color.

### Parameters

The background color

The number of degrees to shear on the x axis

The number of degrees to shear on the y axis

### Return Values

Returns true on success.

### Changelog

### Examples

Example #1 Imagick::shearImage()

```
<?php
function shearImage($imagePath, $color, $shearX, $shearY) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shearimage($color, $shearX, $shearY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.shearimage.php
