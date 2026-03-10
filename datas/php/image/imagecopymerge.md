# imagecopymerge

Source: https://devdocs.io/php/function.imagecopymerge

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

imagecopymerge — Copy and merge part of an image

### Description

```
imagecopymerge(
 GdImage $dst_image,
 GdImage $src_image,
 int $dst_x,
 int $dst_y,
 int $src_x,
 int $src_y,
 int $src_width,
 int $src_height,
 int $pct
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

The two images will be merged according to pct which can range from 0 to 100. When pct = 0, no action is taken, when 100 this function behaves identically to imagecopy() for pallete images, except for ignoring alpha components, while it implements alpha transparency for true colour images.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Merging two copies of the PHP.net logo with 75% transparency

```
<?php
// Create image instances
$dest = imagecreatefromgif('php.gif');
$src = imagecreatefromgif('php.gif');

// Copy and merge
imagecopymerge($dest, $src, 10, 10, 0, 0, 100, 47, 75);

// Output
header('Content-Type: image/gif');
imagegif($dest);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecopymerge.php
