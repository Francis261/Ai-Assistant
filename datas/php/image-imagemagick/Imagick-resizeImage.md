# Imagick::resizeImage

Source: https://devdocs.io/php/imagick.resizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::resizeImage — Scales an image

### Description

```
public Imagick::resizeImage(
 int $columns,
 int $rows,
 int $filter,
 float $blur,
 bool $bestfit = false,
 bool $legacy = false
): bool
```

Scales an image to the desired dimensions with a filter.

Note: The behavior of the parameter bestfit changed in Imagick 3.0.0. Before this version given dimensions 400x400 an image of dimensions 200x150 would be left untouched. In Imagick 3.0.0 and later the image would be scaled up to size 400x300 as this is the "best fit" for the given dimensions. If bestfit parameter is used both width and height must be given.

### Parameters

Width of the image

Height of the image

Refer to the list of filter constants.

The blur factor where > 1 is blurry, < 1 is sharp.

Optional fit parameter.

### Return Values

Returns true on success.

### Changelog

### Examples

Example #1 Imagick::resizeImage()

```
<?php
function resizeImage($imagePath, $width, $height, $filterType, $blur, $bestFit, $cropZoom) {
    //The blur factor where > 1 is blurry, < 1 is sharp.
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->resizeImage($width, $height, $filterType, $blur, $bestFit);

    $cropWidth = $imagick->getImageWidth();
    $cropHeight = $imagick->getImageHeight();

    if ($cropZoom) {
        $newWidth = $cropWidth / 2;
        $newHeight = $cropHeight / 2;

        $imagick->cropimage(
            $newWidth,
            $newHeight,
            ($cropWidth - $newWidth) / 2,
            ($cropHeight - $newHeight) / 2
        );

        $imagick->scaleimage(
            $imagick->getImageWidth() * 4,
            $imagick->getImageHeight() * 4
        );
    }

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.resizeimage.php
