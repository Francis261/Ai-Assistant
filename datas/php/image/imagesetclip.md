# imagesetclip

Source: https://devdocs.io/php/function.imagesetclip

(PHP 7 >= 7.2.0, PHP 8)

imagesetclip — Set the clipping rectangle

### Description

```
imagesetclip(
 GdImage $image,
 int $x1,
 int $y1,
 int $x2,
 int $y2
): bool
```

imagesetclip() sets the current clipping rectangle, i.e. the area beyond which no pixels will be drawn.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The x-coordinate of the upper left corner.

The y-coordinate of the upper left corner.

The x-coordinate of the lower right corner.

The y-coordinate of the lower right corner.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- imagegetclip() - Get the clipping rectangle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesetclip.php
