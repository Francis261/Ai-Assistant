# imageavif

Source: https://devdocs.io/php/function.imageavif

(PHP 8 >= 8.1.0)

imageavif — Output image to browser or file

### Description

```
imageavif(
 GdImage $image,
 resource|string|null $file = null,
 int $quality = -1,
 int $speed = -1
): bool
```

Outputs or saves a AVIF Raster image from the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or null, the raw image stream will be output directly.

quality is optional, and ranges from 0 (worst quality, smaller file) to 100 (best quality, larger file). If -1 is provided, the default value 52 is used.

speed is optional, and ranges from 0 (slow, smaller file) to 10 (fast, larger file). If -1 is provided, the default value 6 is used.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Errors/Exceptions

Throws a ValueError if quality or speed is invalid.

### Changelog

### See Also

- imagepng() - Output a PNG image to either the browser or a file
- imagewbmp() - Output image to browser or file
- imagejpeg() - Output image to browser or file
- imagetypes() - Return the image types supported by this PHP build

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageavif.php
