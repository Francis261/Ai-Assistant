# imagecolorclosesthwb

Source: https://devdocs.io/php/function.imagecolorclosesthwb

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

imagecolorclosesthwb — Get the index of the color which has the hue, white and blackness

### Description

```
imagecolorclosesthwb(
 GdImage $image,
 int $red,
 int $green,
 int $blue
): int
```

Get the index of the color which has the hue, white and blackness nearest the given color.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Value of red component.

Value of green component.

Value of blue component.

### Return Values

Returns an integer with the index of the color which has the hue, white and blackness nearest the given color.

### Changelog

### Examples

Example #1 Example of using imagecolorclosesthwb()

```
<?php
$im = imagecreatefromgif('php.gif');

echo 'HWB: ' . imagecolorclosesthwb($im, 116, 115, 152);
?>
```

The above example will output something similar to:

```
HWB: 33
```

### See Also

- imagecolorclosest() - Get the index of the closest color to the specified color

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorclosesthwb.php
