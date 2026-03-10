# imagecopyresized

Source: https://devdocs.io/php/function.imagecopyresized

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecopyresized — Copy and resize part of an image

### Description

```
imagecopyresized(
 GdImage $dst_image,
 GdImage $src_image,
 int $dst_x,
 int $dst_y,
 int $src_x,
 int $src_y,
 int $dst_width,
 int $dst_height,
 int $src_width,
 int $src_height
): bool
```

imagecopyresized() copies a rectangular portion of one image to another image. dst_image is the destination image, src_image is the source image identifier.

In other words, imagecopyresized() will take a rectangular area from src_image of width src_width and height src_height at position (src_x,src_y) and place it in a rectangular area of dst_image of width dst_width and height dst_height at position (dst_x,dst_y).

If the source and destination coordinates and width and heights differ, appropriate stretching or shrinking of the image fragment will be performed. The coordinates refer to the upper left corner. This function can be used to copy regions within the same image (if dst_image is the same as src_image) but if the regions overlap the results will be unpredictable.

### Parameters

Destination image resource.

Source image resource.

x-coordinate of destination point.

y-coordinate of destination point.

x-coordinate of source point.

y-coordinate of source point.

Destination width.

Destination height.

Source width.

Source height.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Resizing an image

This example will display the image at half size.

```
<?php
// File and new size
$filename = 'test.jpg';
$percent = 0.5;

// Content type
header('Content-Type: image/jpeg');

// Get new sizes
list($width, $height) = getimagesize($filename);
$newwidth = $width * $percent;
$newheight = $height * $percent;

// Load
$thumb = imagecreatetruecolor($newwidth, $newheight);
$source = imagecreatefromjpeg($filename);

// Resize
imagecopyresized($thumb, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);

// Output
imagejpeg($thumb);
?>
```

The above example will output something similar to:

The image will be output at half size, though better quality could be obtained using imagecopyresampled().

### Notes

Note:

There is a problem due to palette image limitations (255+1 colors). Resampling or filtering an image commonly needs more colors than 255, a kind of approximation is used to calculate the new resampled pixel and its color. With a palette image we try to allocate a new color, if that failed, we choose the closest (in theory) computed color. This is not always the closest visual color. That may produce a weird result, like blank (or visually blank) images. To skip this problem, please use a truecolor image as a destination image, such as one created by imagecreatetruecolor().

### See Also

- imagecopyresampled() - Copy and resize part of an image with resampling
- imagescale() - Scale an image using the given new width and height
- imagecrop() - Crop an image to the given rectangle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecopyresized.php
