# imagestring

Source: https://devdocs.io/php/function.imagestring

(PHP 4, PHP 5, PHP 7, PHP 8)

imagestring — Draw a string horizontally

### Description

```
imagestring(
 GdImage $image,
 GdFont|int $font,
 int $x,
 int $y,
 string $string,
 int $color
): bool
```

Draws a string at the given coordinates.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Can be 1, 2, 3, 4, 5 for built-in fonts in latin2 encoding (where higher numbers corresponding to larger fonts) or GdFont instance, returned by imageloadfont().

x-coordinate of the upper left corner.

y-coordinate of the upper left corner.

The string to be written.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagestring() example

```
<?php
// Create a 100*30 image
$im = imagecreate(100, 30);

// White background and blue text
$bg = imagecolorallocate($im, 255, 255, 255);
$textcolor = imagecolorallocate($im, 0, 0, 255);

// Write the string at the top left
imagestring($im, 5, 0, 0, 'Hello world!', $textcolor);

// Output the image
header('Content-type: image/png');

imagepng($im);
?>
```

The above example will output something similar to:

### See Also

- imagestringup() - Draw a string vertically
- imageloadfont() - Load a new font
- imagettftext() - Write text to the image using TrueType fonts

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagestring.php
