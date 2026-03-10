# imagecreatefromgd

Source: https://devdocs.io/php/function.imagecreatefromgd

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

imagecreatefromgd — Create a new image from GD file or URL

### Description

```
imagecreatefromgd(string $filename): GdImage|false
```

Create a new image from GD file or URL.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the GD file.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 imagecreatefromgd() example

```
<?php
// Load the gd image
$im = @imagecreatefromgd('./test.gd');

// Test if the image was loaded
if(!$im)
{
     die('Unable to load gd image!');
}

// Do image operations here

// Save the image
imagegd($im, './test_updated.gd');
?>
```

### Notes

The GD and GD2 image formats are proprietary image formats of libgd. They have to be regarded obsolete, and should only be used for development and testing purposes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromgd.php
