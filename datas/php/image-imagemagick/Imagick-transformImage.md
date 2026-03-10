# Imagick::transformImage

Source: https://devdocs.io/php/imagick.transformimage

(PECL imagick 2, PECL imagick 3)

Imagick::transformImage — Convenience method for setting crop size and the image geometry

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::transformImage(string $crop, string $geometry): Imagick
```

A convenience method for setting crop size and the image geometry from strings. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

A crop geometry string. This geometry defines a subregion of the image to crop.

An image geometry string. This geometry defines the final size of the image.

### Return Values

Returns an Imagick object containing the transformed image.

### Examples

Example #1 Using Imagick::transformImage():

The example creates a 100x100 black image.

```
<?php
$image = new Imagick();
$image->newImage(300, 200, "black");
$new_image = $image->transformImage("100x100", "100x100");
$new_image->writeImage('test_out.jpg');
?>
```

### See Also

- Imagick::cropImage() - Extracts a region of the image
- Imagick::resizeImage() - Scales an image
- Imagick::thumbnailImage() - Changes the size of an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.transformimage.php
