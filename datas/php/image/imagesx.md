# imagesx

Source: https://devdocs.io/php/function.imagesx

(PHP 4, PHP 5, PHP 7, PHP 8)

imagesx — Get image width

### Description

```
imagesx(GdImage $image): int
```

Returns the width of the given image object.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

### Return Values

Return the width of the image.

### Changelog

### Examples

Example #1 Using imagesx()

```
<?php

// create a 300*200 image
$img = imagecreatetruecolor(300, 200);

echo imagesx($img); // 300

?>
```

### See Also

- imagecreatetruecolor() - Create a new true color image
- getimagesize() - Get the size of an image
- imagesy() - Get image height

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesx.php
