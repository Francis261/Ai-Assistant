# Imagick::pingImageBlob

Source: https://devdocs.io/php/imagick.pingimageblob

(PECL imagick 2, PECL imagick 3)

Imagick::pingImageBlob — Quickly fetch attributes

### Description

```
public Imagick::pingImageBlob(string $image): bool
```

This method can be used to query image width, height, size, and format without reading the whole image to memory. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

A string containing the image.

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::pingImageBlob()

Pinging an image from a string

```
<?php
/* read image contents */
$image = file_get_contents("test.jpg");

/* create new imagick object */
$im = new Imagick();

/* pass the string to the imagick object */
$im->pingImageBlob($image);

/* output image width and height */
echo $im->getImageWidth() . 'x' . $im->getImageHeight();
?>
```

### See Also

- Imagick::pingImage() - Fetch basic attributes about the image
- Imagick::pingImageFile() - Get basic image attributes in a lightweight manner
- Imagick::readImage() - Reads image from filename
- Imagick::readImageBlob() - Reads image from a binary string
- Imagick::readImageFile() - Reads image from open filehandle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.pingimageblob.php
