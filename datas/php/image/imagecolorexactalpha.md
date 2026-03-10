# imagecolorexactalpha

Source: https://devdocs.io/php/function.imagecolorexactalpha

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagecolorexactalpha — Get the index of the specified color + alpha

### Description

```
imagecolorexactalpha(
 GdImage $image,
 int $red,
 int $green,
 int $blue,
 int $alpha
): int
```

Returns the index of the specified color+alpha in the palette of the image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Value of red component.

Value of green component.

Value of blue component.

A value between 0 and 127. 0 indicates completely opaque while 127 indicates completely transparent.

### Return Values

Returns the index of the specified color+alpha in the palette of the image, or -1 if the color does not exist in the image's palette.

### Changelog

### Examples

Example #1 Get colors from the GD logo

```
<?php

// Setup an image
$im = imagecreatefrompng('./gdlogo.png');

$colors   = Array();
$colors[] = imagecolorexactalpha($im, 255, 0, 0, 0);
$colors[] = imagecolorexactalpha($im, 0, 0, 0, 127);
$colors[] = imagecolorexactalpha($im, 255, 255, 255, 55);
$colors[] = imagecolorexactalpha($im, 100, 255, 52, 20);

print_r($colors);
?>
```

The above example will output something similar to:

```
Array
(
    [0] => 16711680
    [1] => 2130706432
    [2] => 939524095
    [3] => 342163252
)
```

### See Also

- imagecolorclosestalpha() - Get the index of the closest color to the specified color + alpha

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorexactalpha.php
