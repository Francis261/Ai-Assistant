# imageftbbox

Source: https://devdocs.io/php/function.imageftbbox

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

imageftbbox — Give the bounding box of a text using fonts via freetype2

### Description

```
imageftbbox(
 float $size,
 float $angle,
 string $font_filename,
 string $string,
 array $options = []
): array|false
```

This function calculates and returns the bounding box in pixels for a FreeType text.

Note:

Prior to PHP 8.0.0, imageftbbox() was an extended variant of imagettfbbox() which additionally supported the options. As of PHP 8.0.0, imagettfbbox() is an alias of imageftbbox().

### Parameters

The font size in points.

Angle in degrees in which string will be measured.

The name of the TrueType font file (can be a URL). Depending on which version of the GD library that PHP is using, it may attempt to search for files that do not begin with a leading '/' by appending '.ttf' to the filename and searching along a library-defined font path.

The string to be measured.

### Return Values

imageftbbox() returns an array with 8 elements representing four points making the bounding box of the text:

The points are relative to the text regardless of the angle, so "upper left" means in the top left-hand corner seeing the text horizontally.

On failure, false is returned.

### Examples

Example #1 imageftbbox() example

```
<?php
// Create a 300x150 image
$im = imagecreatetruecolor(300, 150);
$black = imagecolorallocate($im, 0, 0, 0);
$white = imagecolorallocate($im, 255, 255, 255);

// Set the background to be white
imagefilledrectangle($im, 0, 0, 299, 299, $white);

// Path to our font file
$font = './arial.ttf';

// First we create our bounding box
$bbox = imageftbbox(10, 0, $font, 'The PHP Documentation Group');

// This is our cordinates for X and Y
$x = $bbox[0] + (imagesx($im) / 2) - ($bbox[4] / 2) - 5;
$y = $bbox[1] + (imagesy($im) / 2) - ($bbox[5] / 2) - 5;

imagefttext($im, 10, 0, $x, $y, $black, $font, 'The PHP Documentation Group');

// Output to browser
header('Content-Type: image/png');

imagepng($im);
?>
```

### Notes

Note: This function is only available if PHP is compiled with freetype support (--with-freetype-dir=DIR)

### See Also

- imagefttext() - Write text to the image using fonts using FreeType 2
- imagettfbbox() - Give the bounding box of a text using TrueType fonts

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageftbbox.php
