# Imagick::transparentPaintImage

Source: https://devdocs.io/php/imagick.transparentpaintimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::transparentPaintImage — Paints pixels transparent

### Description

```
public Imagick::transparentPaintImage(
 mixed $target,
 float $alpha,
 float $fuzz,
 bool $invert
): bool
```

Paints pixels matching the target color transparent. This method is available if Imagick has been compiled against ImageMagick version 6.3.8 or newer.

### Parameters

The target color to paint

The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.

The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color.

If true paints any pixel that does not match the target color.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::transparentPaintImage()

```
<?php
function transparentPaintImage($color, $alpha, $fuzz) {
    $imagick = new \Imagick(realpath("images/BlueScreen.jpg"));

    //Need to be in a format that supports transparency
    $imagick->setimageformat('png');

    $imagick->transparentPaintImage(
        $color, $alpha, $fuzz * \Imagick::getQuantum(), false
    );

    //Not required, but helps tidy up left over pixels
    $imagick->despeckleimage();

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.transparentpaintimage.php
