# imagedashedline

Source: https://devdocs.io/php/function.imagedashedline

(PHP 4, PHP 5, PHP 7, PHP 8)

imagedashedline — Draw a dashed line

### Description

```
imagedashedline(
 GdImage $image,
 int $x1,
 int $y1,
 int $x2,
 int $y2,
 int $color
): bool
```

This function is deprecated. Use combination of imagesetstyle() and imageline() instead.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Upper left x coordinate.

Upper left y coordinate 0, 0 is the top left corner of the image.

Bottom right x coordinate.

Bottom right y coordinate.

The fill color. A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagedashedline() example

```
<?php
// Create a 100x100 image
$im = imagecreatetruecolor(100, 100);
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);

// Draw a vertical dashed line
imagedashedline($im, 50, 25, 50, 75, $white);

// Save the image
imagepng($im, './dashedline.png');
?>
```

The above example will output something similar to:

Example #2 Alternative to imagedashedline()

```
<?php
// Create a 100x100 image
$im = imagecreatetruecolor(100, 100);
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);

// Define our style: First 4 pixels is white and the 
// next 4 is transparent. This creates the dashed line effect
$style = Array(
                $white, 
                $white, 
                $white, 
                $white, 
                IMG_COLOR_TRANSPARENT, 
                IMG_COLOR_TRANSPARENT, 
                IMG_COLOR_TRANSPARENT, 
                IMG_COLOR_TRANSPARENT
                );

imagesetstyle($im, $style);

// Draw the dashed line
imageline($im, 50, 25, 50, 75, IMG_COLOR_STYLED);

// Save the image
imagepng($im, './imageline.png');
?>
```

### See Also

- imagesetstyle() - Set the style for line drawing
- imageline() - Draw a line

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagedashedline.php
