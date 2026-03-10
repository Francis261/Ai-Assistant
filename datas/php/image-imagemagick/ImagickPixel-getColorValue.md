# ImagickPixel::getColorValue

Source: https://devdocs.io/php/imagickpixel.getcolorvalue

(PECL imagick 2, PECL imagick 3)

ImagickPixel::getColorValue — Gets the normalized value of the provided color channel

### Description

```
public ImagickPixel::getColorValue(int $color): float
```

Retrieves the value of the color channel specified, as a floating-point number between 0 and 1.

### Parameters

The color to get the value of, specified as one of the Imagick color constants. This can be one of the RGB colors, CMYK colors, alpha and opacity e.g (Imagick::COLOR_BLUE, Imagick::COLOR_MAGENTA).

### Return Values

The value of the channel, as a normalized floating-point number, throwing ImagickPixelException on error.

### Examples

Example #1 Basic Imagick::getColorValue() usage

```
<?php
    
$color = new ImagickPixel('rgba(90%, 20%, 20%, 0.75)');

echo "Alpha value is ".$color->getColorValue(Imagick::COLOR_ALPHA).PHP_EOL;
echo "".PHP_EOL;
echo "Red value is ".$color->getColorValue(Imagick::COLOR_RED).PHP_EOL;
echo "Green value is ".$color->getColorValue(Imagick::COLOR_GREEN).PHP_EOL;
echo "Blue value is ".$color->getColorValue(Imagick::COLOR_BLUE).PHP_EOL;
echo "".PHP_EOL;
echo "Cyan value is ".$color->getColorValue(Imagick::COLOR_CYAN).PHP_EOL;
echo "Magenta value is ".$color->getColorValue(Imagick::COLOR_MAGENTA).PHP_EOL;
echo "Yellow value is ".$color->getColorValue(Imagick::COLOR_YELLOW).PHP_EOL;
echo "Black value is ".$color->getColorValue(Imagick::COLOR_BLACK).PHP_EOL;

?>
```

The above example will output:

```
Alpha value is 0.74999618524453

Red value is 0.90000762951095
Green value is 0.2
Blue value is 0.2

Cyan value is 0.90000762951095
Magenta value is 0.2
Yellow value is 0.2
Black value is 0
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.getcolorvalue.php
