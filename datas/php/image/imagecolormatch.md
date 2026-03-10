# imagecolormatch

Source: https://devdocs.io/php/function.imagecolormatch

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

imagecolormatch — Makes the colors of the palette version of an image more closely match the true color version

### Description

```
imagecolormatch(GdImage $image1, GdImage $image2): bool
```

Makes the colors of the palette version of an image more closely match the true color version.

### Parameters

A truecolor image object.

A palette image object pointing to an image that has the same size as image1.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagecolormatch() example

```
<?php
// Setup the true color and palette images
$im1 = imagecreatefrompng('./gdlogo.png');
$im2 = imagecreate(imagesx($im1), imagesy($im1));

// Add some colors to $im2
$colors   = Array();
$colors[] = imagecolorallocate($im2, 255, 36, 74);
$colors[] = imagecolorallocate($im2, 40, 0, 240);
$colors[] = imagecolorallocate($im2, 82, 100, 255);
$colors[] = imagecolorallocate($im2, 84, 63, 44);

// Match these colors with the true color image
imagecolormatch($im1, $im2);
?>
```

### See Also

- imagecreatetruecolor() - Create a new true color image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolormatch.php
