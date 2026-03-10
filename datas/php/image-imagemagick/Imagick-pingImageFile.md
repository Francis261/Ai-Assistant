# Imagick::pingImageFile

Source: https://devdocs.io/php/imagick.pingimagefile

(PECL imagick 2, PECL imagick 3)

Imagick::pingImageFile — Get basic image attributes in a lightweight manner

### Description

```
public Imagick::pingImageFile(resource $filehandle, string $fileName = ?): bool
```

This method can be used to query image width, height, size, and format without reading the whole image to memory. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

An open filehandle to the image.

Optional filename for this image.

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::pingImageFile()

Opening a remote location

```
<?php
/* fopen a remote location */
$fp = fopen("http://example.com/test.jpg");

/* create new imagick object */
$im = new Imagick();

/* pass the handle to imagick */
$im->pingImageFile($fp);
?>
```

### See Also

- Imagick::pingImage() - Fetch basic attributes about the image
- Imagick::pingImageBlob() - Quickly fetch attributes
- Imagick::readImage() - Reads image from filename
- Imagick::readImageBlob() - Reads image from a binary string
- Imagick::readImageFile() - Reads image from open filehandle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.pingimagefile.php
