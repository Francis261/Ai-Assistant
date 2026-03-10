# imagecreatetruecolor

Source: https://devdocs.io/php/function.imagecreatetruecolor

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagecreatetruecolor — Create a new true color image

### Description

```
imagecreatetruecolor(int $width, int $height): GdImage|false
```

imagecreatetruecolor() returns an image object representing a black image of the specified size.

### Parameters

Image width.

Image height.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 Creating a new GD image stream and outputting an image.

```
<?php
header ('Content-Type: image/png');
$im = @imagecreatetruecolor(120, 20)
      or die('Cannot Initialize new GD image stream');
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);
imagepng($im);
?>
```

The above example will output something similar to:

### See Also

- imagecreate() - Create a new palette based image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatetruecolor.php
