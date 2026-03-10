# imageantialias

Source: https://devdocs.io/php/function.imageantialias

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

imageantialias — Should antialias functions be used or not

### Description

```
imageantialias(GdImage $image, bool $enable): bool
```

Activate the fast drawing antialiased methods for lines and wired polygons. It does not support alpha components. It works using a direct blend operation. It works only with truecolor images.

Thickness and styled are not supported.

Using antialiased primitives with transparent background color can end with some unexpected results. The blend method uses the background color as any other colors. The lack of alpha component support does not allow an alpha based antialiasing method.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Whether to enable antialiasing or not.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 A comparison of two lines, one with anti-aliasing switched on

```
<?php
// Setup an anti-aliased image and a normal image
$aa = imagecreatetruecolor(400, 100);
$normal = imagecreatetruecolor(200, 100);

// Switch antialiasing on for one image
imageantialias($aa, true);

// Allocate colors
$red = imagecolorallocate($normal, 255, 0, 0);
$red_aa = imagecolorallocate($aa, 255, 0, 0);

// Draw two lines, one with AA enabled
imageline($normal, 0, 0, 200, 100, $red);
imageline($aa, 0, 0, 200, 100, $red_aa);

// Merge the two images side by side for output (AA: left, Normal: Right)
imagecopymerge($aa, $normal, 200, 0, 0, 0, 200, 100, 100);

// Output image
header('Content-type: image/png');

imagepng($aa);
?>
```

The above example will output something similar to:

### See Also

- imagecreatetruecolor() - Create a new true color image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageantialias.php
