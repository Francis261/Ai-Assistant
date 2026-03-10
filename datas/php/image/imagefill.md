# imagefill

Source: https://devdocs.io/php/function.imagefill

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefill — Flood fill

### Description

```
imagefill(
 GdImage $image,
 int $x,
 int $y,
 int $color
): bool
```

Performs a flood fill starting at the given coordinate (top left is 0, 0) with the given color in the image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate of start point.

y-coordinate of start point.

The fill color. A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagefill() example

```
<?php

$im = imagecreatetruecolor(100, 100);

// sets background to red
$red = imagecolorallocate($im, 255, 0, 0);
imagefill($im, 0, 0, $red);

header('Content-type: image/png');
imagepng($im);
?>
```

The above example will output something similar to:

### See Also

- imagecolorallocate() - Allocate a color for an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefill.php
