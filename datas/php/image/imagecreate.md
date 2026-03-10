# imagecreate

Source: https://devdocs.io/php/function.imagecreate

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecreate — Create a new palette based image

### Description

```
imagecreate(int $width, int $height): GdImage|false
```

imagecreate() returns an image identifier representing a blank image of specified size.

In general, we recommend the use of imagecreatetruecolor() instead of imagecreate() so that image processing occurs on the highest quality image possible. If you want to output a palette image, then imagetruecolortopalette() should be called immediately before saving the image with imagepng() or imagegif().

### Parameters

The image width.

The image height.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 Creating a new GD image stream and outputting an image.

```
<?php
header("Content-Type: image/png");
$im = @imagecreate(110, 20)
    or die("Cannot Initialize new GD image stream");
$background_color = imagecolorallocate($im, 0, 0, 0);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  "A Simple Text String", $text_color);
imagepng($im);
?>
```

The above example will output something similar to:

### See Also

- imagecreatetruecolor() - Create a new true color image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreate.php
