# ImagickPixel::getColorAsString

Source: https://devdocs.io/php/imagickpixel.getcolorasstring

(PECL imagick 2 >= 2.1.0, PECL imagick 3)

ImagickPixel::getColorAsString — Returns the color as a string

### Description

```
public ImagickPixel::getColorAsString(): string
```

Returns the color of the ImagickPixel object as a string.

### Parameters

This function has no parameters.

### Return Values

Returns the color of the ImagickPixel object as a string.

### Examples

Example #1 Basic Imagick::getColorAsString() usage

```
<?php

//Create an ImagickPixel with the predefined color 'brown'
$color = new ImagickPixel('brown');

$color->setColorValue(Imagick::COLOR_ALPHA, 64 / 256.0);

$colorInfo = $color->getColorAsString();

print_r($colorInfo);
?>
```

The above example will output:

```
rgb(165,42,42)
```

### Notes

Note: Alpha not returned

This function does not return the alpha value of the color in the string.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.getcolorasstring.php
