# image_type_to_mime_type

Source: https://devdocs.io/php/function.image-type-to-mime-type

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

image_type_to_mime_type — Get Mime-Type for image-type returned by getimagesize, exif_read_data, exif_thumbnail, exif_imagetype

### Description

```
image_type_to_mime_type(int $image_type): string
```

The image_type_to_mime_type() function will determine the Mime-Type for an IMAGETYPE constant.

### Parameters

One of the IMAGETYPE_* constants.

### Return Values

The returned values are as follows

### Examples

Example #1 image_type_to_mime_type() example

```
<?php
header("Content-type: " . image_type_to_mime_type(IMAGETYPE_PNG));
?>
```

### Notes

Note:

This function does not require the GD image library.

### See Also

- getimagesize() - Get the size of an image
- exif_imagetype() - Determine the type of an image
- exif_read_data() - Reads the EXIF headers from an image file
- exif_thumbnail() - Retrieve the embedded thumbnail of an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.image-type-to-mime-type.php
