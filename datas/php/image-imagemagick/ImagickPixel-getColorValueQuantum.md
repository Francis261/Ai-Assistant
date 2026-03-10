# ImagickPixel::getColorValueQuantum

Source: https://devdocs.io/php/imagickpixel.getcolorvaluequantum

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

ImagickPixel::getColorValueQuantum — Gets the quantum value of a color in the ImagickPixel

### Description

```
public ImagickPixel::getColorValueQuantum(int $color): int|float
```

Gets the quantum value of a color in the ImagickPixel. Return value is a float if ImageMagick was compiled with HDRI, otherwise an integer.

### Parameters

This function has no parameters.

### Return Values

The quantum value of the color element. Float if ImageMagick was compiled with HDRI, otherwise an int.

### Examples

Example #1 ImagickPixel::getColorValueQuantum()

```
<?php
        $color = new \ImagickPixel('rgb(128, 5, 255)');
        $colorRed = $color->getColorValueQuantum(\Imagick::COLOR_RED);
        $colorGreen = $color->getColorValueQuantum(\Imagick::COLOR_GREEN);
        $colorBlue = $color->getColorValueQuantum(\Imagick::COLOR_BLUE);
        $colorAlpha = $color->getColorValueQuantum(\Imagick::COLOR_ALPHA);

        printf(
            "Red: %s Green: %s  Blue %s Alpha: %s",
            $colorRed,
            $colorGreen,
            $colorBlue,
            $colorAlpha
        );

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.getcolorvaluequantum.php
