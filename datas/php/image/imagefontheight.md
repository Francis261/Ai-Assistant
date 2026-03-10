# imagefontheight

Source: https://devdocs.io/php/function.imagefontheight

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefontheight — Get font height

### Description

```
imagefontheight(GdFont|int $font): int
```

Returns the pixel height of a character in the specified font.

### Parameters

Can be 1, 2, 3, 4, 5 for built-in fonts in latin2 encoding (where higher numbers corresponding to larger fonts) or GdFont instance, returned by imageloadfont().

### Return Values

Returns the pixel height of the font.

### Changelog

### Examples

Example #1 Using imagefontheight() on built-in fonts

```
<?php
echo 'Font height: ' . imagefontheight(4);
?>
```

The above example will output something similar to:

```
Font height: 16
```

Example #2 Using imagefontheight() together with imageloadfont()

```
<?php
// Load a .gdf font
$font = imageloadfont('anonymous.gdf');

echo 'Font height: ' . imagefontheight($font);
?>
```

The above example will output something similar to:

```
Font height: 43
```

### See Also

- imagefontwidth() - Get font width
- imageloadfont() - Load a new font

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefontheight.php
