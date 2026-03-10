# Imagick::scaleImage

Source: https://devdocs.io/php/imagick.scaleimage

(PECL imagick 2, PECL imagick 3)

Imagick::scaleImage — Scales the size of an image

### Description

```
public Imagick::scaleImage(
 int $columns,
 int $rows,
 bool $bestfit = false,
 bool $legacy = false
): bool
```

Scales the size of an image to the given dimensions. The other parameter will be calculated if 0 is passed as either param.

Note: The behavior of the parameter bestfit changed in Imagick 3.0.0. Before this version given dimensions 400x400 an image of dimensions 200x150 would be left untouched. In Imagick 3.0.0 and later the image would be scaled up to size 400x300 as this is the "best fit" for the given dimensions. If bestfit parameter is used both width and height must be given.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

### Examples

Example #1 Imagick::scaleImage()

```
<?php
function scaleImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->scaleImage(150, 150, true);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.scaleimage.php
