# Imagick::thumbnailImage

Source: https://devdocs.io/php/imagick.thumbnailimage

(PECL imagick 2, PECL imagick 3)

Imagick::thumbnailImage — Changes the size of an image

### Description

```
public Imagick::thumbnailImage(
 int $columns,
 int $rows,
 bool $bestfit = false,
 bool $fill = false,
 bool $legacy = false
): bool
```

Changes the size of an image to the given dimensions and removes any associated profiles. The goal is to produce small, low cost thumbnail images suited for display on the Web. If true is given as a third parameter then columns and rows parameters are used as maximums for each side. Both sides will be scaled down until they match or are smaller than the parameter given for the side.

Note: The behavior of the parameter bestfit changed in Imagick 3.0.0. Before this version given dimensions 400x400 an image of dimensions 200x150 would be left untouched. In Imagick 3.0.0 and later the image would be scaled up to size 400x300 as this is the "best fit" for the given dimensions. If bestfit parameter is used both width and height must be given.

### Parameters

Image width

Image height

Whether to force maximum values

If the image does not fill the box completely then the box is filled with image's background color.

Round the smaller dimension down instead to the closest integer.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::thumbnailImage()

```
<?php
function thumbnailImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setbackgroundcolor('rgb(64, 64, 64)');
    $imagick->thumbnailImage(100, 100, true, true);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.thumbnailimage.php
