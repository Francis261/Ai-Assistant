# imagefontwidth

Source: https://devdocs.io/php/function.imagefontwidth

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefontwidth — Get font width

### Description

```
imagefontwidth(GdFont|int $font): int
```

Returns the pixel width of a character in font.

### Parameters

Can be 1, 2, 3, 4, 5 for built-in fonts in latin2 encoding (where higher numbers corresponding to larger fonts) or GdFont instance, returned by imageloadfont().

### Return Values

Returns the pixel width of the font.

### Changelog

### Examples

Example #1 Using imagefontwidth() on built-in fonts

```
<?php
echo 'Font width: ' . imagefontwidth(4);
?>
```

The above example will output something similar to:

```
Font width: 8
```

Example #2 Using imagefontwidth() together with imageloadfont()

```
<?php
// Load a .gdf font
$font = imageloadfont('anonymous.gdf');

echo 'Font width: ' . imagefontwidth($font);
?>
```

The above example will output something similar to:

```
Font width: 23
```

### See Also

- imagefontheight() - Get font height
- imageloadfont() - Load a new font

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefontwidth.php
