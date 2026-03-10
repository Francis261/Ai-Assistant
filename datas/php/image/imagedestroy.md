# imagedestroy

Source: https://devdocs.io/php/function.imagedestroy

(PHP 4, PHP 5, PHP 7, PHP 8)

imagedestroy — Destroy an image

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 imagedestroy(GdImage $image): bool
```

Note:

This function has no effect. Prior to PHP 8.0.0, this function was used to close the resource.

Prior to PHP 8.0.0, imagedestroy() freed any memory associated with the image resource. As of 8.0.0, the GD extension uses objects instead of resources, and objects cannot be explicitly closed.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Using imagedestroy() prior to PHP 8.0.0

```
<?php
// create a 100 x 100 image
$im = imagecreatetruecolor(100, 100);

// alter or save the image

// frees image from memory
imagedestroy($im);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagedestroy.php
