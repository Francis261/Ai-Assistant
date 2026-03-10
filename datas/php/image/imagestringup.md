# imagestringup

Source: https://devdocs.io/php/function.imagestringup

(PHP 4, PHP 5, PHP 7, PHP 8)

imagestringup — Draw a string vertically

### Description

```
imagestringup(
 GdImage $image,
 GdFont|int $font,
 int $x,
 int $y,
 string $string,
 int $color
): bool
```

Draws a string vertically at the given coordinates.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Can be 1, 2, 3, 4, 5 for built-in fonts in latin2 encoding (where higher numbers corresponding to larger fonts) or GdFont instance, returned by imageloadfont().

x-coordinate of the bottom left corner.

y-coordinate of the bottom left corner.

The string to be written.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagestringup() example

```
<?php
// create a 100*100 image
$im = imagecreatetruecolor(100, 100);

// Write the text
$textcolor = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
imagestringup($im, 3, 40, 80, 'gd library', $textcolor);

// Save the image
imagepng($im, './stringup.png');
?>
```

The above example will output something similar to:

### See Also

- imagestring() - Draw a string horizontally
- imageloadfont() - Load a new font

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagestringup.php
