# imagecolordeallocate

Source: https://devdocs.io/php/function.imagecolordeallocate

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolordeallocate — De-allocate a color for an image

### Description

```
imagecolordeallocate(GdImage $image, int $color): bool
```

De-allocates a color previously allocated with imagecolorallocate() or imagecolorallocatealpha().

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The color identifier.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Using imagecolordeallocate()

```
<?php
$white = imagecolorallocate($im, 255, 255, 255);
imagecolordeallocate($im, $white);
?>
```

### See Also

- imagecolorallocate() - Allocate a color for an image
- imagecolorallocatealpha() - Allocate a color for an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolordeallocate.php
