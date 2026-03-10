# imagecolortransparent

Source: https://devdocs.io/php/function.imagecolortransparent

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolortransparent — Define a color as transparent

### Description

```
imagecolortransparent(GdImage $image, ?int $color = null): int
```

Gets or sets the transparent color in the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

A color identifier created with imagecolorallocate().

### Return Values

The identifier of the new (or current, if none is specified) transparent color is returned. If color is null, and the image has no transparent color, the returned identifier will be -1.

### Changelog

### Examples

Example #1 imagecolortransparent() example

```
<?php
// Create a 55x30 image
$im = imagecreatetruecolor(55, 30);
$red = imagecolorallocate($im, 255, 0, 0);
$black = imagecolorallocate($im, 0, 0, 0);

// Make the background transparent
imagecolortransparent($im, $black);

// Draw a red rectangle
imagefilledrectangle($im, 4, 4, 50, 25, $red);

// Save the image
imagepng($im, './imagecolortransparent.png');
?>
```

The above example will output something similar to:

### Notes

Note:

Transparency is copied only with imagecopymerge() and true color images, not with imagecopy() or pallete images.

Note:

The transparent color is a property of the image, transparency is not a property of the color. Once you have set a color to be the transparent color, any regions of the image in that color that were drawn previously will be transparent.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolortransparent.php
