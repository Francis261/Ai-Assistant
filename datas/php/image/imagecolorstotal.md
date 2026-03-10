# imagecolorstotal

Source: https://devdocs.io/php/function.imagecolorstotal

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorstotal — Find out the number of colors in an image's palette

### Description

```
imagecolorstotal(GdImage $image): int
```

Returns the number of colors in an image palette.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

### Return Values

Returns the number of colors in the specified image's palette or 0 for truecolor images.

### Changelog

### Examples

Example #1 Getting total number of colors in an image using imagecolorstotal()

```
<?php
// Create image instance
$im = imagecreatefromgif('php.gif');

echo 'Total colors in image: ' . imagecolorstotal($im);
?>
```

The above example will output something similar to:

```
Total colors in image: 128
```

### See Also

- imagecolorat() - Get the index of the color of a pixel
- imagecolorsforindex() - Get the colors for an index
- imageistruecolor() - Finds whether an image is a truecolor image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorstotal.php
