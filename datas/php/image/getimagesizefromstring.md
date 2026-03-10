# getimagesizefromstring

Source: https://devdocs.io/php/function.getimagesizefromstring

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

getimagesizefromstring — Get the size of an image from a string

### Description

```
getimagesizefromstring(string $string, array &$image_info = null): array|false
```

Identical to getimagesize() except that getimagesizefromstring() accepts a string instead of a file name as the first parameter.

See the getimagesize() documentation for details on how this function works.

### Parameters

The image data, as a string.

See getimagesize().

### Return Values

See getimagesize().

### Examples

Example #1 getimagesizefromstring() example

```
<?php
$img = '/path/to/test.png';

// Open as a file
$size_info1 = getimagesize($img);

// Or open as a string
$data       = file_get_contents($img);
$size_info2 = getimagesizefromstring($data);
?>
```

### See Also

- getimagesize() - Get the size of an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getimagesizefromstring.php
