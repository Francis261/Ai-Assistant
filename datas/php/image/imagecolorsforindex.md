# imagecolorsforindex

Source: https://devdocs.io/php/function.imagecolorsforindex

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorsforindex — Get the colors for an index

### Description

```
imagecolorsforindex(GdImage $image, int $color): array
```

Gets the color for a specified index.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The color index.

### Return Values

Returns an associative array with red, green, blue and alpha keys that contain the appropriate values for the specified color index.

### Changelog

### Examples

Example #1 imagecolorsforindex() example

```
<?php

// open an image
$im = imagecreatefrompng('nexen.png');

// get a color
$start_x = 40;
$start_y = 50;
$color_index = imagecolorat($im, $start_x, $start_y);

// make it human readable
$color_tran = imagecolorsforindex($im, $color_index);

// what is it ?
print_r($color_tran);

?>
```

The above example will output something similar to:

```
Array
(
   [red] => 226
   [green] => 222
   [blue] => 252
   [alpha] => 0
)
```

### See Also

- imagecolorat() - Get the index of the color of a pixel
- imagecolorexact() - Get the index of the specified color

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorsforindex.php
