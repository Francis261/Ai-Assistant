# imagecolorat

Source: https://devdocs.io/php/function.imagecolorat

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecolorat — Get the index of the color of a pixel

### Description

```
imagecolorat(GdImage $image, int $x, int $y): int|false
```

Returns the index of the color of the pixel at the specified location in the image specified by image.

If the image is a truecolor image, this function returns the RGB value of that pixel as integer. Use bitshifting and masking to access the distinct red, green and blue component values:

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate of the point.

y-coordinate of the point.

### Return Values

Returns the index of the color or false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### Examples

Example #1 Access distinct RGB values

```
<?php
$im = imagecreatefrompng("php.png");
$rgb = imagecolorat($im, 10, 15);
$r = ($rgb >> 16) & 0xFF;
$g = ($rgb >> 8) & 0xFF;
$b = $rgb & 0xFF;

var_dump($r, $g, $b);
?>
```

The above example will output something similar to:

```
int(119)
int(123)
int(180)
```

Example #2 Human-readable RGB values using imagecolorsforindex()

```
<?php
$im = imagecreatefrompng("php.png");
$rgb = imagecolorat($im, 10, 15);

$colors = imagecolorsforindex($im, $rgb);

var_dump($colors);
?>
```

The above example will output something similar to:

```
array(4) {
  ["red"]=>
  int(119)
  ["green"]=>
  int(123)
  ["blue"]=>
  int(180)
  ["alpha"]=>
  int(127)
}
```

### See Also

- imagecolorset() - Set the color for the specified palette index
- imagecolorsforindex() - Get the colors for an index
- imagesetpixel() - Set a single pixel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecolorat.php
