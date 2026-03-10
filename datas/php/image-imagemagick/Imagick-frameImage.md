# Imagick::frameImage

Source: https://devdocs.io/php/imagick.frameimage

(PECL imagick 2, PECL imagick 3)

Imagick::frameImage — Adds a simulated three-dimensional border

### Description

```
public Imagick::frameImage(
 mixed $matte_color,
 int $width,
 int $height,
 int $inner_bevel,
 int $outer_bevel
): bool
```

Adds a simulated three-dimensional border around the image. The width and height specify the border width of the vertical and horizontal sides of the frame. The inner and outer bevels indicate the width of the inner and outer shadows of the frame.

### Parameters

ImagickPixel object or a string representing the matte color

The width of the border

The height of the border

The inner bevel width

The outer bevel width

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

### Examples

Example #1 Imagick::frameImage()

```
<?php
function frameImage($imagePath, $color, $width, $height, $innerBevel, $outerBevel) {
    $imagick = new \Imagick(realpath($imagePath));

    $width = $width + $innerBevel + $outerBevel;
    $height = $height + $innerBevel + $outerBevel;

    $imagick->frameimage(
        $color,
        $width,
        $height,
        $innerBevel,
        $outerBevel
    );
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.frameimage.php
