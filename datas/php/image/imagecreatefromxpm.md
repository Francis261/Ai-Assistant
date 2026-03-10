# imagecreatefromxpm

Source: https://devdocs.io/php/function.imagecreatefromxpm

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

imagecreatefromxpm — Create a new image from file or URL

### Description

```
imagecreatefromxpm(string $filename): GdImage|false
```

imagecreatefromxpm() returns an image identifier representing the image obtained from the given filename.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the XPM image.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 Creating an image instance using imagecreatefromxpm()

```
<?php
// Check for XPM support
if(!(imagetypes() & IMG_XPM))
{
    die('Support for xpm was not found!');
}

// Create the image instance
$xpm = imagecreatefromxpm('./example.xpm');

// Do image operations here

// PHP has no support for writing xpm images
// so in this case we save the image as a 
// jpeg file with 100% quality
imagejpeg($xpm, './example.jpg', 100);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromxpm.php
