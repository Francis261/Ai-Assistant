# ImagickPixel::getHSL

Source: https://devdocs.io/php/imagickpixel.gethsl

(PECL imagick 2, PECL imagick 3)

ImagickPixel::getHSL — Returns the normalized HSL color of the ImagickPixel object

### Description

```
public ImagickPixel::getHSL(): array
```

Returns the normalized HSL color described by the ImagickPixel object, with each of the three values as floating point numbers between 0.0 and 1.0.

### Parameters

This function has no parameters.

### Return Values

Returns the HSL value in an array with the keys "hue", "saturation", and "luminosity". Throws ImagickPixelException on failure.

### Examples

Example #1 Basic Imagick::getHSL() example

```
<?php

$color = new ImagickPixel('rgb(90%, 10%, 10%)');

$colorInfo = $color->getHSL();

print_r($colorInfo);

?>
```

The above example will output:

```
Array
(
    [hue] => 0
    [saturation] => 0.80001220740379
    [luminosity] => 0.50000762951095
)
```

### Notes

Note:

Available with ImageMagick library version 6.2.9 and higher.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.gethsl.php
