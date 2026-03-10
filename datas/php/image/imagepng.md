# imagepng

Source: https://devdocs.io/php/function.imagepng

(PHP 4, PHP 5, PHP 7, PHP 8)

imagepng — Output a PNG image to either the browser or a file

### Description

```
imagepng(
 GdImage $image,
 resource|string|null $file = null,
 int $quality = -1,
 int $filters = -1
): bool
```

Outputs or saves a PNG image from the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or null, the raw image stream will be output directly.

Note:

null is invalid if the quality and filters arguments are not used.

Compression level: from 0 (no compression) to 9. The default (-1) uses the zlib compression default. For more information see the » zlib manual.

Allows reducing the PNG file size. It is a bitmask field which may be set to any combination of the PNG_FILTER_* constants. PNG_NO_FILTER or PNG_ALL_FILTERS may also be used to respectively disable or activate all filters. The default value (-1) disables filtering.

The filters parameter is ignored by system libgd.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Errors/Exceptions

Throws a ValueError if quality is invalid.

### Changelog

### Examples

```
<?php
$im = imagecreatefrompng("test.png");

header('Content-Type: image/png');

imagepng($im);
?>
```

### See Also

- imagegif() - Output image to browser or file
- imagewbmp() - Output image to browser or file
- imagejpeg() - Output image to browser or file
- imagetypes() - Return the image types supported by this PHP build
- imagesavealpha() - Whether to retain full alpha channel information when saving images

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagepng.php
