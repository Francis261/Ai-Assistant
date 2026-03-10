# imagechar

Source: https://devdocs.io/php/function.imagechar

(PHP 4, PHP 5, PHP 7, PHP 8)

imagechar — Draw a character horizontally

### Description

```
imagechar(
 GdImage $image,
 GdFont|int $font,
 int $x,
 int $y,
 string $char,
 int $color
): bool
```

imagechar() draws the first character of char in the image identified by image with its upper-left at x,y (top left is 0, 0) with the color color.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Can be 1, 2, 3, 4, 5 for built-in fonts in latin2 encoding (where higher numbers corresponding to larger fonts) or GdFont instance, returned by imageloadfont().

x-coordinate of the start.

y-coordinate of the start.

The character to draw.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagechar() example

```
<?php

$im = imagecreate(100, 100);

$string = 'PHP';

$bg = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 0, 0, 0);

// prints a black "P" in the top left corner
imagechar($im, 1, 0, 0, $string, $black);

header('Content-type: image/png');
imagepng($im);

?>
```

The above example will output something similar to:

### See Also

- imagecharup() - Draw a character vertically
- imageloadfont() - Load a new font

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagechar.php
