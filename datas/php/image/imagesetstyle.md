# imagesetstyle

Source: https://devdocs.io/php/function.imagesetstyle

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagesetstyle — Set the style for line drawing

### Description

```
imagesetstyle(GdImage $image, array $style): bool
```

imagesetstyle() sets the style to be used by all line drawing functions (such as imageline() and imagepolygon()) when drawing with the special color IMG_COLOR_STYLED or lines of images with color IMG_COLOR_STYLEDBRUSHED.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

An array of pixel colors. You can use the IMG_COLOR_TRANSPARENT constant to add a transparent pixel. Note that style must not be an empty array.

### Return Values

Returns true on success or false on failure.

### Examples

Following example script draws a dashed line from upper left to lower right corner of the canvas:

Example #1 imagesetstyle() example

```
<?php
header("Content-type: image/jpeg");
$im  = imagecreatetruecolor(100, 100);
$w   = imagecolorallocate($im, 255, 255, 255);
$red = imagecolorallocate($im, 255, 0, 0);

/* Draw a dashed line, 5 red pixels, 5 white pixels */
$style = array($red, $red, $red, $red, $red, $w, $w, $w, $w, $w);
imagesetstyle($im, $style);
imageline($im, 0, 0, 100, 100, IMG_COLOR_STYLED);

/* Draw a line of happy faces using imagesetbrush() with imagesetstyle */
$style = array($w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $red);
imagesetstyle($im, $style);

$brush = imagecreatefrompng("http://www.libpng.org/pub/png/images/smile.happy.png");
$w2 = imagecolorallocate($brush, 255, 255, 255);
imagecolortransparent($brush, $w2);
imagesetbrush($im, $brush);
imageline($im, 100, 0, 0, 100, IMG_COLOR_STYLEDBRUSHED);

imagejpeg($im);
?>
```

The above example will output something similar to:

### See Also

- imagesetbrush() - Set the brush image for line drawing
- imageline() - Draw a line

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesetstyle.php
