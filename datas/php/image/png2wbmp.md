# png2wbmp

Source: https://devdocs.io/php/function.png2wbmp

(PHP 4 >= 4.0.5, PHP 5, PHP 7)

png2wbmp — Convert PNG image file to WBMP image file

This function has been DEPRECATED as of PHP 7.2.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
png2wbmp(
 string $pngname,
 string $wbmpname,
 int $dest_height,
 int $dest_width,
 int $threshold
): bool
```

Converts a PNG file into a WBMP file.

### Parameters

Path to PNG file.

Path to destination WBMP file.

Destination image height.

Destination image width.

Threshold value, between 0 and 8 (inclusive).

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Examples

Example #1 png2wbmp() example

```
<?php
// Path to the target png
$path = './test.png';

// Get the image sizes
$image = getimagesize($path);

// Convert image
png2wbmp($path, './test.wbmp', $image[1], $image[0], 7);
?>
```

### See Also

- jpeg2wbmp() - Convert JPEG image file to WBMP image file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.png2wbmp.php
