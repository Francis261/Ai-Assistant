# imagecreatefromwebp

Source: https://devdocs.io/php/function.imagecreatefromwebp

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

imagecreatefromwebp — Create a new image from file or URL

### Description

```
imagecreatefromwebp(string $filename): GdImage|false
```

imagecreatefromwebp() returns an image identifier representing the image obtained from the given filename. Note that animated WebP files cannot be read.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the WebP image.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 Convert an WebP image to a jpeg image using imagecreatefromwebp()

```
<?php
// Load the WebP file
$im = imagecreatefromwebp('./example.webp');

// Convert it to a jpeg file with 100% quality
imagejpeg($im, './example.jpeg', 100);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromwebp.php
