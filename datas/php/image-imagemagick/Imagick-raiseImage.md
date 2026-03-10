# Imagick::raiseImage

Source: https://devdocs.io/php/imagick.raiseimage

(PECL imagick 2, PECL imagick 3)

Imagick::raiseImage — Creates a simulated 3d button-like effect

### Description

```
public Imagick::raiseImage(
 int $width,
 int $height,
 int $x,
 int $y,
 bool $raise
): bool
```

Creates a simulated three-dimensional button-like effect by lightening and darkening the edges of the image. Members width and height of raise_info define the width of the vertical and horizontal edge of the effect.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::raiseImage()

```
<?php
function raiseImage($imagePath, $width, $height, $x, $y, $raise) {
    $imagick = new \Imagick(realpath($imagePath));

    //x and y do nothing?
    $imagick->raiseImage($width, $height, $x, $y, $raise);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.raiseimage.php
