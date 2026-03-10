# imageloadfont

Source: https://devdocs.io/php/function.imageloadfont

(PHP 4, PHP 5, PHP 7, PHP 8)

imageloadfont — Load a new font

### Description

```
imageloadfont(string $filename): GdFont|false
```

imageloadfont() loads a user-defined bitmap and returns its identifier.

### Parameters

The font file format is currently binary and architecture dependent. This means you should generate the font files on the same type of CPU as the machine you are running PHP on.

### Return Values

Returns an GdFont instance, or false on failure.

### Changelog

### Examples

Example #1 imageloadfont() usage example

```
<?php
// Create a new image instance
$im = imagecreatetruecolor(50, 20);
$black = imagecolorallocate($im, 0, 0, 0);
$white = imagecolorallocate($im, 255, 255, 255);

// Make the background white
imagefilledrectangle($im, 0, 0, 49, 19, $white);

// Load the gd font and write 'Hello'
$font = imageloadfont('./04b.gdf');
imagestring($im, $font, 0, 0, 'Hello', $black);

// Output to browser
header('Content-type: image/png');

imagepng($im);
?>
```

### See Also

- imagefontwidth() - Get font width
- imagefontheight() - Get font height
- imagestring() - Draw a string horizontally

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageloadfont.php
