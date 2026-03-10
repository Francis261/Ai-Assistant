# imagecopy

Source: https://devdocs.io/php/function.imagecopy

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecopy — Copy part of an image

### Description

```
imagecopy(
 GdImage $dst_image,
 GdImage $src_image,
 int $dst_x,
 int $dst_y,
 int $src_x,
 int $src_y,
 int $src_width,
 int $src_height
): bool
```

Copy a part of src_image onto dst_image starting at the x,y coordinates src_x, src_y with a width of src_width and a height of src_height. The portion defined will be copied onto the x,y coordinates, dst_x and dst_y.

### Parameters

Destination image resource.

Source image resource.

x-coordinate of destination point.

y-coordinate of destination point.

x-coordinate of source point.

y-coordinate of source point.

Source width.

Source height.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Cropping the PHP.net logo

```
<?php
// Create image instances
$src = imagecreatefromgif('php.gif');
$dest = imagecreatetruecolor(80, 40);

// Copy
imagecopy($dest, $src, 0, 0, 20, 13, 80, 40);

// Output and free from memory
header('Content-Type: image/gif');
imagegif($dest);
?>
```

The above example will output something similar to:

### See Also

- imagecrop() - Crop an image to the given rectangle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecopy.php
