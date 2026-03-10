# imagesetpixel

Source: https://devdocs.io/php/function.imagesetpixel

(PHP 4, PHP 5, PHP 7, PHP 8)

imagesetpixel — Set a single pixel

### Description

```
imagesetpixel(
 GdImage $image,
 int $x,
 int $y,
 int $color
): bool
```

imagesetpixel() draws a pixel at the specified coordinate.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate.

y-coordinate.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagesetpixel() example

A random drawing that ends with a regular picture.

```
<?php

$x = 200;
$y = 200;

$gd = imagecreatetruecolor($x, $y);
 
$corners[0] = array('x' => 100, 'y' =>  10);
$corners[1] = array('x' =>   0, 'y' => 190);
$corners[2] = array('x' => 200, 'y' => 190);

$red = imagecolorallocate($gd, 255, 0, 0); 

for ($i = 0; $i < 100000; $i++) {
  imagesetpixel($gd, round($x), round($y), $red);
  $a = rand(0, 2);
  $x = ($x + $corners[$a]['x']) / 2;
  $y = ($y + $corners[$a]['y']) / 2;
}
 
header('Content-Type: image/png');
imagepng($gd);

?>
```

The above example will output something similar to:

### See Also

- imagecreatetruecolor() - Create a new true color image
- imagecolorallocate() - Allocate a color for an image
- imagecolorat() - Get the index of the color of a pixel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesetpixel.php
