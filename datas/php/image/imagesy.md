# imagesy

Source: https://devdocs.io/php/function.imagesy

(PHP 4, PHP 5, PHP 7, PHP 8)

imagesy — Get image height

### Description

```
imagesy(GdImage $image): int
```

Returns the height of the given image object.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

### Return Values

Return the height of the image.

### Changelog

### Examples

Example #1 Using imagesy()

```
<?php

// create a 300*200 image
$img = imagecreatetruecolor(300, 200);

echo imagesy($img); // 200

?>
```

### See Also

- imagecreatetruecolor() - Create a new true color image
- getimagesize() - Get the size of an image
- imagesx() - Get image width

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesy.php
