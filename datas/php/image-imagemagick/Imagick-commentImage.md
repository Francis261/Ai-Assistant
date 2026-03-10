# Imagick::commentImage

Source: https://devdocs.io/php/imagick.commentimage

(PECL imagick 2, PECL imagick 3)

Imagick::commentImage — Adds a comment to your image

### Description

```
public Imagick::commentImage(string $comment): bool
```

Adds a comment to your image.

### Parameters

The comment to add

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::commentImage():

Commenting an image and retrieving the comment:

```
<?php

/* Create new Imagick object */
$im = new imagick();

/* Create an empty image */
$im->newImage(100, 100, new ImagickPixel("red"));

/* Add comment to the image */
$im->commentImage("Hello World!");

/* Display the comment */
echo $im->getImageProperty("comment");

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.commentimage.php
