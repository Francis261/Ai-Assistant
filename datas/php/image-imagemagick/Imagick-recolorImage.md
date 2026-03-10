# Imagick::recolorImage

Source: https://devdocs.io/php/imagick.recolorimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::recolorImage — Recolors image

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::recolorImage(array $matrix): bool
```

Translate, scale, shear, or rotate image colors. This method supports variable sized matrices but normally 5x5 matrix is used for RGBA and 6x6 is used for CMYK. The last row should contain the normalized values. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

### Parameters

The matrix containing the color values

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::recolorImage()

```
<?php
function recolorImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $remapColor = [ 1, 0, 0,
        0, 0, 1,
        0, 1, 0,];

//$remapColor = [
//    1.438, -0.122, -0.016,  0, 0, -0.03,
//    -0.062,  1.378, -0.016,  0, 0,  0.05,
//    -0.062, -0.122, 1.483,   0, 0, -0.02,
//];

    @$imagick->recolorImage($remapColor);

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

### See Also

- Imagick::displayImage() - Displays an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.recolorimage.php
