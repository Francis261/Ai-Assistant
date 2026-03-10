# imagecolorexact

Source: https://devdocs.io/php/function.imagecolorexact

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorexact — Get the index of the specified color

### Description

```
imagecolorexact(
 GdImage $image,
 int $red,
 int $green,
 int $blue
): int
```

Returns the index of the specified color in the palette of the image.

If you created the image from a file, only colors used in the image are resolved. Colors present only in the palette are not resolved.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Value of red component.

Value of green component.

Value of blue component.

### Return Values

Returns the index of the specified color in the palette, or -1 if the color does not exist.

### Changelog

### Examples

Example #1 Get colors from the GD logo

```
<?php
// Setup an image
$im = imagecreatefrompng('./gdlogo.png');

$colors   = Array();
$colors[] = imagecolorexact($im, 255, 0, 0);
$colors[] = imagecolorexact($im, 0, 0, 0);
$colors[] = imagecolorexact($im, 255, 255, 255);
$colors[] = imagecolorexact($im, 100, 255, 52);

print_r($colors);
?>
```

The above example will output something similar to:

```
Array
(
    [0] => 16711680
    [1] => 0
    [2] => 16777215
    [3] => 6618932
)
```

### See Also

- imagecolorclosest() - Get the index of the closest color to the specified color

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorexact.php
