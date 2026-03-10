# ImagickPixel::getColor

Source: https://devdocs.io/php/imagickpixel.getcolor

(PECL imagick 2, PECL imagick 3)

ImagickPixel::getColor — Returns the color

### Description

```
public ImagickPixel::getColor(int $normalized = 0): array
```

Returns the color described by the ImagickPixel object, as an array. If the color has an opacity channel set, this is provided as a fourth value in the list.

### Parameters

Normalize the color values. Possible values are 0, 1 or 2.

### Return Values

An array of channel values. Throws ImagickPixelException on error.

### Examples

Example #1 Basic Imagick::getColor() usage

```
<?php

//Create an ImagickPixel with the predefined color 'brown'
$color = new ImagickPixel('brown');

//Set the color to have an alpha of 25%
$color->setColorValue(Imagick::COLOR_ALPHA, 64 / 256.0);

$colorInfo = $color->getColor();

echo "Standard values".PHP_EOL;
print_r($colorInfo);

$colorInfo = $color->getColor(1);

echo "Normalized values:".PHP_EOL;
print_r($colorInfo);

?>
```

The above example will output:

```
Standard values
Array
(
    [r] => 165
    [g] => 42
    [b] => 42
    [a] => 0
)
Normalized values:
Array
(
    [r] => 0.64705882352941
    [g] => 0.16470588235294
    [b] => 0.16470588235294
    [a] => 0.25000381475547
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.getcolor.php
