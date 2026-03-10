# imagesetbrush

Source: https://devdocs.io/php/function.imagesetbrush

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagesetbrush — Set the brush image for line drawing

### Description

```
imagesetbrush(GdImage $image, GdImage $brush): bool
```

imagesetbrush() sets the brush image to be used by all line drawing functions (such as imageline() and imagepolygon()) when drawing with the special colors IMG_COLOR_BRUSHED or IMG_COLOR_STYLEDBRUSHED.

You need not take special action when you are finished with a brush, but if you destroy the brush image (or let PHP destroy it), you must not use the IMG_COLOR_BRUSHED or IMG_COLOR_STYLEDBRUSHED colors until you have set a new brush image!

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

An image object.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagesetbrush() example

```
<?php
// Load a mini php logo
$php = imagecreatefrompng('./php.png');

// Create the main image, 100x100
$im = imagecreatetruecolor(100, 100);

// Fill the background with white
$white = imagecolorallocate($im, 255, 255, 255);
imagefilledrectangle($im, 0, 0, 299, 99, $white);

// Set the brush
imagesetbrush($im, $php);

// Draw a couple of brushes, each overlaying each
imageline($im, 50, 50, 50, 60, IMG_COLOR_BRUSHED);

// Output image to the browser
header('Content-type: image/png');

imagepng($im);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesetbrush.php
