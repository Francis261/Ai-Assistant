# Imagick::rotateImage

Source: https://devdocs.io/php/imagick.rotateimage

(PECL imagick 2, PECL imagick 3)

Imagick::rotateImage — Rotates an image

### Description

```
public Imagick::rotateImage(mixed $background, float $degrees): bool
```

Rotates an image the specified number of degrees. Empty triangles left over from rotating the image are filled with the background color.

### Parameters

The background color

Rotation angle, in degrees. The rotation angle is interpreted as the number of degrees to rotate the image clockwise.

### Return Values

Returns true on success.

### Changelog

### Examples

Example #1 Imagick::rotateImage()

```
<?php
function rotateImage($imagePath, $angle, $color) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->rotateimage($color, $angle);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.rotateimage.php
