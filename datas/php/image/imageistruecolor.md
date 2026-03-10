# imageistruecolor

Source: https://devdocs.io/php/function.imageistruecolor

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

imageistruecolor — Finds whether an image is a truecolor image

### Description

```
imageistruecolor(GdImage $image): bool
```

imageistruecolor() finds whether the image image is a truecolor image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

### Return Values

Returns true if the image is truecolor, false otherwise.

### Changelog

### Examples

Example #1 Simple detection of true color image instances using imageistruecolor()

```
<?php
// $im is an image instance

// Check if image is a true color image or not
if(!imageistruecolor($im))
{
    // Create a new true color image instance
    $tc = imagecreatetruecolor(imagesx($im), imagesy($im));

    // Copy over the pixels
    imagecopy($tc, $im, 0, 0, 0, 0, imagesx($im), imagesy($im));

    $im = $tc;
    $tc = NULL;

    // OR use imagepalettetotruecolor()
}

// Continue working with image instance
?>
```

### See Also

- imagecreatetruecolor() - Create a new true color image
- imagepalettetotruecolor() - Converts a palette based image to true color

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageistruecolor.php
