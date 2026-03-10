# imagepalettecopy

Source: https://devdocs.io/php/function.imagepalettecopy

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

imagepalettecopy — Copy the palette from one image to another

### Description

```
imagepalettecopy(GdImage $dst, GdImage $src): void
```

imagepalettecopy() copies the palette from the src image to the dst image.

### Parameters

The destination image object.

The source image object.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 imagepalettecopy() example

```
<?php
// Create two palette images
$palette1 = imagecreate(100, 100);
$palette2 = imagecreate(100, 100);

// Allocate the background to be 
// green in the first palette image
$green = imagecolorallocate($palette1, 0, 255, 0);

// Copy the palette from image 1 to image 2
imagepalettecopy($palette2, $palette1);

// Since the palette is now copied we can use the 
// green color allocated to image 1 without using 
// imagecolorallocate() twice
imagefilledrectangle($palette2, 0, 0, 99, 99, $green);

// Output image to the browser
header('Content-type: image/png');

imagepng($palette2);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagepalettecopy.php
