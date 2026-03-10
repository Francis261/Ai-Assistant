# imagewebp

Source: https://devdocs.io/php/function.imagewebp

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

imagewebp — Output a WebP image to browser or file

### Description

```
imagewebp(GdImage $image, resource|string|null $file = null, int $quality = -1): bool
```

Outputs or saves a WebP version of the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or null, the raw image stream will be output directly.

quality ranges from 0 (worst quality, smaller file) to 100 (best quality, biggest file). If -1 is provided, the default value 80 is used.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Errors/Exceptions

Throws a ValueError if quality is invalid.

### Changelog

### Examples

Example #1 Saving an WebP file

```
<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);

imagestring($im, 1, 5, 5,  'WebP with PHP', $text_color);

// Save the image
imagewebp($im, 'php.webp');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagewebp.php
