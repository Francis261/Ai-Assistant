# imagecopymergegray

Source: https://devdocs.io/php/function.imagecopymergegray

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagecopymergegray — Copy and merge part of an image with gray scale

### Description

```
imagecopymergegray(
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

imagecopymergegray() copy a part of src_image onto dst_image starting at the x,y coordinates src_x, src_y with a width of src_width and a height of src_height. The portion defined will be copied onto the x,y coordinates, dst_x and dst_y.

This function is identical to imagecopymerge() except that when merging it preserves the hue of the source by converting the destination pixels to gray scale before the copy operation.

### Parameters

Destination image resource.

Source image resource.

x-coordinate of destination point.

y-coordinate of destination point.

x-coordinate of source point.

y-coordinate of source point.

Source width.

Source height.

The src_image will be changed to grayscale according to pct where 0 is fully grayscale and 100 is unchanged. When pct = 100 this function behaves identically to imagecopy() for pallete images, except for ignoring alpha components, while it implements alpha transparency for true colour images.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagecopymergegray() usage

```
<?php
// Create image instances
$dest = imagecreatefromgif('php.gif');
$src = imagecreatefromgif('php.gif');

// Copy and merge - Gray = 20%
imagecopymergegray($dest, $src, 10, 10, 0, 0, 100, 47, 20);

// Output
header('Content-Type: image/gif');
imagegif($dest);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecopymergegray.php
