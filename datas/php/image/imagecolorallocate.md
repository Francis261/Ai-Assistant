# imagecolorallocate

Source: https://devdocs.io/php/function.imagecolorallocate

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorallocate — Allocate a color for an image

### Description

```
imagecolorallocate(
 GdImage $image,
 int $red,
 int $green,
 int $blue
): int|false
```

Returns a color identifier representing the color composed of the given RGB components.

imagecolorallocate() must be called to create each color that is to be used in the image represented by image.

Note:

The first call to imagecolorallocate() fills the background color in palette-based images - images created using imagecreate().

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Value of red component.

Value of green component.

Value of blue component.

### Return Values

A color identifier or false if the allocation failed.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### Examples

Example #1 imagecolorallocate() example

```
<?php

$im = imagecreate(100, 100);

// sets background to red
$background = imagecolorallocate($im, 255, 0, 0);

// sets some colors
$white = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 0, 0, 0);

// hexadecimal way
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
$black = imagecolorallocate($im, 0x00, 0x00, 0x00);

?>
```

### See Also

- imagecolorallocatealpha() - Allocate a color for an image
- imagecolordeallocate() - De-allocate a color for an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorallocate.php
