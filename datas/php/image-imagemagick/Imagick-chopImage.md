# Imagick::chopImage

Source: https://devdocs.io/php/imagick.chopimage

(PECL imagick 2, PECL imagick 3)

Imagick::chopImage — Removes a region of an image and trims

### Description

```
public Imagick::chopImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

Removes a region of an image and collapses the image to occupy the removed portion.

### Parameters

Width of the chopped area

Height of the chopped area

X origo of the chopped area

Y origo of the chopped area

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::chopImage():

Example of using Imagick::chopImage

```
<?php
/* Create some objects */
$image = new Imagick();
$pixel = new ImagickPixel( 'gray' );

/* New image */
$image->newImage(400, 200, $pixel);

/* Chop image */
$image->chopImage(200, 200, 0, 0);

/* Give image a format */
$image->setImageFormat('png');

/* Output the image with headers */
header('Content-type: image/png');
echo $image;

?>
```

### See Also

- Imagick::cropImage() - Extracts a region of the image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.chopimage.php
