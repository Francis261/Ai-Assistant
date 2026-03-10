# imagetruecolortopalette

Source: https://devdocs.io/php/function.imagetruecolortopalette

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagetruecolortopalette — Convert a true color image to a palette image

### Description

```
imagetruecolortopalette(GdImage $image, bool $dither, int $num_colors): bool
```

imagetruecolortopalette() converts a truecolor image to a palette image. The code for this function was originally drawn from the Independent JPEG Group library code, which is excellent. The code has been modified to preserve as much alpha channel information as possible in the resulting palette, in addition to preserving colors as well as possible. This does not work as well as might be hoped. It is usually best to simply produce a truecolor output image instead, which guarantees the highest output quality.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Indicates if the image should be dithered - if it is true then dithering will be used which will result in a more speckled image but with better color approximation.

Sets the maximum number of colors that should be retained in the palette.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Converting a true color image to a palette-based image

```
<?php
// Create a new true color image
$im = imagecreatetruecolor(100, 100);

// Convert to palette-based with no dithering and 255 colors
imagetruecolortopalette($im, false, 255);

// Save the image
imagepng($im, './paletteimage.png');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagetruecolortopalette.php
