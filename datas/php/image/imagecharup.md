# imagecharup

Source: https://devdocs.io/php/function.imagecharup

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecharup — Draw a character vertically

### Description

```
imagecharup(
 GdImage $image,
 GdFont|int $font,
 int $x,
 int $y,
 string $char,
 int $color
): bool
```

Draws the character char vertically at the specified coordinate on the given image.

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

Example #1 imagecharup() example

```
<?php

$im = imagecreate(100, 100);

$string = 'Note that the first letter is a N';

$bg = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 0, 0, 0);

// prints a black "Z" on a white background
imagecharup($im, 3, 10, 10, $string, $black);

header('Content-type: image/png');
imagepng($im);

?>
```

The above example will output something similar to:

### See Also

- imagechar() - Draw a character horizontally
- imageloadfont() - Load a new font

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecharup.php
