# ImagickPixel::setColorValue

Source: https://devdocs.io/php/imagickpixel.setcolorvalue

(PECL imagick 2, PECL imagick 3)

ImagickPixel::setColorValue — Sets the normalized value of one of the channels

### Description

```
public ImagickPixel::setColorValue(int $color, float $value): bool
```

Sets the value of the specified channel of this object to the provided value, which should be between 0 and 1. This function can be used to provide an opacity channel to an ImagickPixel object.

### Parameters

One of the Imagick color constants e.g. \Imagick::COLOR_GREEN or \Imagick::COLOR_ALPHA.

The value to set this channel to, ranging from 0 to 1.

### Return Values

Returns true on success.

### Examples

Example #1 Basic Imagick::setColorValue() usage

```
<?php

$color  = new \ImagickPixel('firebrick');

$color->setColorValue(Imagick::COLOR_ALPHA, 0.5);

print_r($color->getcolor(true));
?>
```

The above example will output:

```
Array
(
    [r] => 0.69803921568627
    [g] => 0.13333333333333
    [b] => 0.13333333333333
    [a] => 0.50000762951095
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.setcolorvalue.php
