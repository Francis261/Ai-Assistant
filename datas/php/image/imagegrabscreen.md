# imagegrabscreen

Source: https://devdocs.io/php/function.imagegrabscreen

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

imagegrabscreen — Captures the whole screen

### Description

```
imagegrabscreen(): GdImage|false
```

Grabs a screenshot of the whole screen.

Note:

This function is only available on Windows.

### Parameters

This function has no parameters.

### Return Values

Returns an image object on success, false on failure.

### Changelog

### Examples

Example #1 imagegrabscreen() example

This example demonstrates how to take a screenshot of the current screen and save it as a png image.

```
<?php
$im = imagegrabscreen();
imagepng($im, "myscreenshot.png");
?>
```

### See Also

- imagegrabwindow() - Captures a window

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagegrabscreen.php
