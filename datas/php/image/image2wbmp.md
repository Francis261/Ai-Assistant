# image2wbmp

Source: https://devdocs.io/php/function.image2wbmp

(PHP 4 >= 4.0.5, PHP 5, PHP 7)

image2wbmp — Output image to browser or file

This function has been DEPRECATED as of PHP 7.3.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
image2wbmp(resource $image, string $filename = ?, int $foreground = ?): bool
```

image2wbmp() outputs or save a WBMP version of the given image.

### Parameters

An image resource, returned by one of the image creation functions, such as imagecreatetruecolor().

Path to the saved file. If not given, the raw image stream will be output directly.

You can set the foreground color with this parameter by setting an identifier obtained from imagecolorallocate(). The default foreground color is black.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Examples

Example #1 image2wbmp() example

```
<?php
$file = 'php.png';
$image = imagecreatefrompng($file);

header('Content-Type: ' . image_type_to_mime_type(IMAGETYPE_WBMP));
image2wbmp($image); // output the stream directly
?>
```

### See Also

- imagewbmp() - Output image to browser or file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.image2wbmp.php
