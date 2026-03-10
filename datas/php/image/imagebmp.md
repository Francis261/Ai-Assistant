# imagebmp

Source: https://devdocs.io/php/function.imagebmp

(PHP 7 >= 7.2.0, PHP 8)

imagebmp — Output a BMP image to browser or file

### Description

```
imagebmp(GdImage $image, resource|string|null $file = null, bool $compressed = true): bool
```

Outputs or saves a BMP version of the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or null, the raw image stream will be output directly.

Note:

null is invalid if the compressed arguments is not used.

Whether the BMP should be compressed with run-length encoding (RLE), or not.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Changelog

### Examples

Example #1 Saving a BMP file

```
<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);

imagestring($im, 1, 5, 5,  'BMP with PHP', $text_color);

// Save the image
imagebmp($im, 'php.bmp');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagebmp.php
