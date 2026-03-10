# imagecolorset

Source: https://devdocs.io/php/function.imagecolorset

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorset — Set the color for the specified palette index

### Description

```
imagecolorset(
 GdImage $image,
 int $color,
 int $red,
 int $green,
 int $blue,
 int $alpha = 0
): ?false
```

This sets the specified index in the palette to the specified color. This is useful for creating flood-fill-like effects in palleted images without the overhead of performing the actual flood-fill.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

An index in the palette.

Value of red component.

Value of green component.

Value of blue component.

Value of alpha component.

### Return Values

The function returns null on success, or false on failure.

### Changelog

### Examples

Example #1 imagecolorset() example

```
<?php
// Create a 300x100 image
$im = imagecreate(300, 100);

// Set the background to be red
imagecolorallocate($im, 255, 0, 0);

// Get the color index for the background
$bg = imagecolorat($im, 0, 0);

// Set the background to be blue
imagecolorset($im, $bg, 0, 0, 255);

// Output the image to the browser
header('Content-Type: image/png');

imagepng($im);
?>
```

### See Also

- imagecolorat() - Get the index of the color of a pixel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorset.php
