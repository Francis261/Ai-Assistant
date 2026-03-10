# imagegetclip

Source: https://devdocs.io/php/function.imagegetclip

(PHP 7 >= 7.2.0, PHP 8)

imagegetclip — Get the clipping rectangle

### Description

```
imagegetclip(GdImage $image): array
```

imagegetclip() retrieves the current clipping rectangle, i.e. the area beyond which no pixels will be drawn.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

### Return Values

The function returns an indexed array with the coordinates of the clipping rectangle which has the following entries:

- x-coordinate of the upper left corner
- y-coordinate of the upper left corner
- x-coordinate of the lower right corner
- y-coordinate of the lower right corner

### Changelog

### Examples

Example #1 imagegetclip() example

Setting and retrieving the clipping rectangle.

```
<?php
$im = imagecreate(100, 100);
imagesetclip($im, 10,10, 89,89);
print_r(imagegetclip($im));
```

The above example will output:

```
Array
(
    [0] => 10
    [1] => 10
    [2] => 89
    [3] => 89
)
```

### See Also

- imagesetclip() - Set the clipping rectangle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagegetclip.php
