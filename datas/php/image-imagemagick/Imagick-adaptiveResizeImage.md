# Imagick::adaptiveResizeImage

Source: https://devdocs.io/php/imagick.adaptiveresizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveResizeImage — Adaptively resize image with data dependent triangulation

### Description

```
public Imagick::adaptiveResizeImage(
 int $columns,
 int $rows,
 bool $bestfit = false,
 bool $legacy = false
): bool
```

Adaptively resize image with data-dependent triangulation. Avoids blurring across sharp color changes. Most useful when used to shrink images slightly to a slightly smaller "web size"; may not look good when a full-sized image is adaptively resized to a thumbnail. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

Note: The behavior of the parameter bestfit changed in Imagick 3.0.0. Before this version given dimensions 400x400 an image of dimensions 200x150 would be left untouched. In Imagick 3.0.0 and later the image would be scaled up to size 400x300 as this is the "best fit" for the given dimensions. If bestfit parameter is used both width and height must be given.

### Parameters

The number of columns in the scaled image.

The number of rows in the scaled image.

Whether to fit the image inside a bounding box.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

### Examples

Example #1 Using Imagick::adaptiveResizeImage()

Resize an image to a standard size for the web. This method works best when resizing to a size only slightly smaller than the previous image size.

```
<?php
header('Content-type: image/jpeg');

$image = new Imagick('image.jpg');
$image->adaptiveResizeImage(1024,768);

echo $image;
?>
```

### See Also

- Imagick::chopImage() - Removes a region of an image and trims
- Imagick::cropImage() - Extracts a region of the image
- Imagick::magnifyImage() - Scales an image proportionally 2x
- Imagick::minifyImage() - Scales an image proportionally to half its size
- Imagick::resizeImage() - Scales an image
- Imagick::scaleImage() - Scales the size of an image
- Imagick::shaveImage() - Shaves pixels from the image edges
- Imagick::thumbnailImage() - Changes the size of an image
- Imagick::trimImage() - Remove edges from the image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.adaptiveresizeimage.php
