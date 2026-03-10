# ImagickPixel::setColorValueQuantum

Source: https://devdocs.io/php/imagickpixel.setcolorvaluequantum

(PECL imagick 2 >=2.3.0, PECL imagick 3)

ImagickPixel::setColorValueQuantum — Sets the quantum value of a color element of the ImagickPixel

### Description

```
public ImagickPixel::setColorValueQuantum(int $color, int|float $value): bool
```

Sets the quantum value of a color element of the ImagickPixel.

This function is currently not documented; only its argument list is available.

### Parameters

Which color element to set e.g. \Imagick::COLOR_GREEN.

The quantum value to set the color element to. This should be a float if ImageMagick was compiled with HDRI otherwise an int in the range 0 to Imagick::getQuantum().

### Return Values

Returns true on success.

### Examples

Example #1 ImagickPixel::setColorValueQuantum()

```
<?php
function setColorValueQuantum() {
    $image = new \Imagick();

    $quantumRange = $image->getQuantumRange();

    $draw = new \ImagickDraw();
    $color = new \ImagickPixel('blue');
    $color->setcolorValueQuantum(\Imagick::COLOR_RED, 128 * $quantumRange['quantumRangeLong'] / 256);

    $draw->setstrokewidth(1.0);
    $draw->setStrokeColor($color);
    $draw->setFillColor($color);
    $draw->rectangle(200, 200, 300, 300);

    $image->newImage(500, 500, "SteelBlue2");
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.setcolorvaluequantum.php
