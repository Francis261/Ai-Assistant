# imagecopyresampled

Source: https://devdocs.io/php/function.imagecopyresampled

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagecopyresampled — Copy and resize part of an image with resampling

### Description

```
imagecopyresampled(
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

imagecopyresampled() copies a rectangular portion of one image to another image, smoothly interpolating pixel values so that, in particular, reducing the size of an image still retains a great deal of clarity.

In other words, imagecopyresampled() will take a rectangular area from src_image of width src_width and height src_height at position (src_x,src_y) and place it in a rectangular area of dst_image of width dst_width and height dst_height at position (dst_x,dst_y).

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

Example #1 Simple example

This example will resample an image to half its original size.

```
<?php
// The file
$filename = 'test.jpg';
$percent = 0.5;

// Content type
header('Content-Type: image/jpeg');

// Get new dimensions
list($width, $height) = getimagesize($filename);
$new_width = $width * $percent;
$new_height = $height * $percent;

// Resample
$image_p = imagecreatetruecolor($new_width, $new_height);
$image = imagecreatefromjpeg($filename);
imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

// Output
imagejpeg($image_p, null, 100);
?>
```

The above example will output something similar to:

Example #2 Resampling an image proportionally

This example will display an image with the maximum width, or height, of 200 pixels.

```
<?php
// The file
$filename = 'test.jpg';

// Set a maximum height and width
$width = 200;
$height = 200;

// Content type
header('Content-Type: image/jpeg');

// Get new dimensions
list($width_orig, $height_orig) = getimagesize($filename);

$ratio_orig = $width_orig/$height_orig;

if ($width/$height > $ratio_orig) {
   $width = $height*$ratio_orig;
} else {
   $height = $width/$ratio_orig;
}

// Resample
$image_p = imagecreatetruecolor($width, $height);
$image = imagecreatefromjpeg($filename);
imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);

// Output
imagejpeg($image_p, null, 100);
?>
```

The above example will output something similar to:

### Notes

Note:

There is a problem due to palette image limitations (255+1 colors). Resampling or filtering an image commonly needs more colors than 255, a kind of approximation is used to calculate the new resampled pixel and its color. With a palette image we try to allocate a new color, if that failed, we choose the closest (in theory) computed color. This is not always the closest visual color. That may produce a weird result, like blank (or visually blank) images. To skip this problem, please use a truecolor image as a destination image, such as one created by imagecreatetruecolor().

### See Also

- imagecopyresized() - Copy and resize part of an image
- imagescale() - Scale an image using the given new width and height
- imagecrop() - Crop an image to the given rectangle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecopyresampled.php
