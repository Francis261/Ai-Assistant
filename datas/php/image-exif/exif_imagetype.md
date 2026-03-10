# exif_imagetype

Source: https://devdocs.io/php/function.exif-imagetype

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

exif_imagetype — Determine the type of an image

### Description

```
exif_imagetype(string $filename): int|false
```

exif_imagetype() reads the first bytes of an image and checks its signature.

exif_imagetype() can be used to avoid calls to other exif functions with unsupported file types or in conjunction with $_SERVER['HTTP_ACCEPT'] to check whether or not the viewer is able to see a specific image in the browser.

### Parameters

### Return Values

When a correct signature is found, the appropriate constant value will be returned otherwise the return value is false. The return value is the same value that getimagesize() returns in index 2 but exif_imagetype() is much faster.

The following constants are defined, and represent possible exif_imagetype() return values:

Note:

exif_imagetype() will emit an E_NOTICE and return false if it is unable to read enough bytes from the file to determine the image type.

### Changelog

### Examples

Example #1 exif_imagetype() example

```
<?php
if (exif_imagetype('image.gif') != IMAGETYPE_GIF) {
    echo 'The picture is not a gif';
}
?>
```

### See Also

- image_type_to_mime_type() - Get Mime-Type for image-type returned by getimagesize, exif_read_data, exif_thumbnail, exif_imagetype
- getimagesize() - Get the size of an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.exif-imagetype.php
