# imagecreatefromgd2

Source: https://devdocs.io/php/function.imagecreatefromgd2

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

imagecreatefromgd2 — Create a new image from GD2 file or URL

### Description

```
imagecreatefromgd2(string $filename): GdImage|false
```

Create a new image from GD2 file or URL.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the GD2 image.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 imagecreatefromgd2() example

```
<?php
// Load the gd2 image
$im = imagecreatefromgd2('./test.gd2');

// Apply an effect on the image, in this 
// case negate the image
if(function_exists('imagefilter'))
{
    imagefilter($im, IMG_FILTER_NEGATE);
}

// Save the image
imagegd2($im, './test_updated.gd2');
?>
```

### Notes

The GD and GD2 image formats are proprietary image formats of libgd. They have to be regarded obsolete, and should only be used for development and testing purposes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromgd2.php
