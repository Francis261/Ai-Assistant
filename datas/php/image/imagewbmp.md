# imagewbmp

Source: https://devdocs.io/php/function.imagewbmp

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

imagewbmp — Output image to browser or file

### Description

```
imagewbmp(GdImage $image, resource|string|null $file = null, ?int $foreground_color = null): bool
```

imagewbmp() outputs or save a WBMP version of the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or null, the raw image stream will be output directly.

You can set the foreground color with this parameter by setting an identifier obtained from imagecolorallocate(). The default foreground color is black.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Changelog

### Examples

Example #1 Outputting a WBMP image

```
<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// Set the content type header - in this case image/vnd.wap.wbmp
// Hint: see image_type_to_mime_type() for content-types
header('Content-Type: image/vnd.wap.wbmp');

// Output the image
imagewbmp($im);
?>
```

Example #2 Saving the WBMP image

```
<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// Save the image
imagewbmp($im, 'simpletext.wbmp');
?>
```

Example #3 Outputting the image with a different foreground

```
<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// Set the content type header - in this case image/vnd.wap.wbmp
// Hint: see image_type_to_mime_type() for content-types
header('Content-Type: image/vnd.wap.wbmp');

// Set a replacement foreground color
$foreground_color = imagecolorallocate($im, 255, 0, 0);

imagewbmp($im, NULL, $foreground_color);
?>
```

### See Also

- image2wbmp() - Output image to browser or file
- imagepng() - Output a PNG image to either the browser or a file
- imagegif() - Output image to browser or file
- imagejpeg() - Output image to browser or file
- imagetypes() - Return the image types supported by this PHP build

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagewbmp.php
