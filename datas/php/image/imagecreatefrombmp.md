# imagecreatefrombmp

Source: https://devdocs.io/php/function.imagecreatefrombmp

(PHP 7 >= 7.2.0, PHP 8)

imagecreatefrombmp — Create a new image from file or URL

### Description

```
imagecreatefrombmp(string $filename): GdImage|false
```

imagecreatefrombmp() returns an image identifier representing the image obtained from the given filename.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the BMP image.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 Convert an BMP image to a PNG image using imagecreatefrombmp()

```
<?php
// Load the BMP file
$im = imagecreatefrombmp('./example.bmp');

// Convert it to a PNG file with default settings
imagepng($im, './example.png');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefrombmp.php
