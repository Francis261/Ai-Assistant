# imagegd

Source: https://devdocs.io/php/function.imagegd

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

imagegd — Output GD image to browser or file

### Description

```
imagegd(GdImage $image, ?string $file = null): bool
```

Outputs or saves the given image in GD format.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or null, the raw image stream will be output directly.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Changelog

### Examples

Example #1 Outputting a GD image

```
<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  "A Simple Text String", $text_color);

// Output the image
imagegd($im);
?>
```

Example #2 Saving a GD image

```
<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  "A Simple Text String", $text_color);

// Save the gd image
// The file format for GD images is .gd, see http://www.libgd.org/GdFileFormats
imagegd($im, 'simple.gd');
?>
```

### Notes

Note:

The GD format is commonly used to allow fast loading of parts of images. Note that the GD format is only usable in GD-compatible applications.

The GD and GD2 image formats are proprietary image formats of libgd. They have to be regarded obsolete, and should only be used for development and testing purposes.

### See Also

- imagegd2() - Output GD2 image to browser or file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagegd.php
