# imagecreatefromgd2part

Source: https://devdocs.io/php/function.imagecreatefromgd2part

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

imagecreatefromgd2part — Create a new image from a given part of GD2 file or URL

### Description

```
imagecreatefromgd2part(
 string $filename,
 int $x,
 int $y,
 int $width,
 int $height
): GdImage|false
```

Create a new image from a given part of GD2 file or URL.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the GD2 image.

x-coordinate of source point.

y-coordinate of source point.

Source width.

Source height.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 imagecreatefromgd2part() example

```
<?php
// For this example we need the image size before
$image = getimagesize('./test.gd2');

// Create the image instance now we got the image 
// sizes
$im = imagecreatefromgd2part('./test.gd2', 4, 4, ($image[0] / 2) - 6, ($image[1] / 2) - 6);

// Do an image operation, in this case we emboss the image
if(function_exists('imagefilter'))
{
    imagefilter($im, IMG_FILTER_EMBOSS);
}

// Save optimized image
imagegd2($im, './test_emboss.gd2');
?>
```

### Notes

The GD and GD2 image formats are proprietary image formats of libgd. They have to be regarded obsolete, and should only be used for development and testing purposes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromgd2part.php
