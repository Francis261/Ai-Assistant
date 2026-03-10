# exif_thumbnail

Source: https://devdocs.io/php/function.exif-thumbnail

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

exif_thumbnail — Retrieve the embedded thumbnail of an image

### Description

```
exif_thumbnail(
 resource|string $file,
 int &$width = null,
 int &$height = null,
 int &$image_type = null
): string|false
```

exif_thumbnail() reads the embedded thumbnail of an image.

If you want to deliver thumbnails through this function, you should send the mimetype information using the header() function.

It is possible that exif_thumbnail() cannot create an image but can determine its size. In this case, the return value is false but width and height are set.

### Parameters

The location of the image file. This can either be a path to the file or a stream resource.

The return width of the returned thumbnail.

The returned height of the returned thumbnail.

The returned image type of the returned thumbnail. This is either TIFF or JPEG.

### Return Values

Returns the embedded thumbnail, or false if the image contains no thumbnail.

### Changelog

### Examples

Example #1 exif_thumbnail() example

```
<?php
$image = exif_thumbnail('/path/to/image.jpg', $width, $height, $type);

if ($image!==false) {
    header('Content-type: ' .image_type_to_mime_type($type));
    echo $image;
    exit;
} else {
    // no thumbnail available, handle the error here
    echo 'No thumbnail available';
}
?>
```

### Notes

Note:

If the file is used to pass a stream to this function, then the stream must be seekable. Note that the file pointer position is not changed after this function returns.

### See Also

- exif_read_data() - Reads the EXIF headers from an image file
- image_type_to_mime_type() - Get Mime-Type for image-type returned by getimagesize, exif_read_data, exif_thumbnail, exif_imagetype

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.exif-thumbnail.php
