# Imagick::cropImage

Source: https://devdocs.io/php/imagick.cropimage

(PECL imagick 2, PECL imagick 3)

Imagick::cropImage — Extracts a region of the image

### Description

```
public Imagick::cropImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

Extracts a region of the image.

### Parameters

The width of the crop

The height of the crop

The X coordinate of the cropped region's top left corner

The Y coordinate of the cropped region's top left corner

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::cropImage()

```
<?php
function cropImage($imagePath, $startX, $startY, $width, $height) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->cropImage($width, $height, $startX, $startY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.cropimage.php
