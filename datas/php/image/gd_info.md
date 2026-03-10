# gd_info

Source: https://devdocs.io/php/function.gd-info

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

gd_info — Retrieve information about the currently installed GD library

### Description

```
gd_info(): array
```

Gets information about the version and capabilities of the installed GD library.

### Parameters

This function has no parameters.

### Return Values

Returns an associative array.

### Examples

Example #1 Using gd_info()

```
<?php
var_dump(gd_info());
?>
```

The above example will output something similar to:

```
array(10) {
  ["GD Version"]=>
  string(24) "bundled (2.1.0 compatible)"
  ["FreeType Support"]=>
  bool(false)
  ["GIF Read Support"]=>
  bool(true)
  ["GIF Create Support"]=>
  bool(false)
  ["JPEG Support"]=>
  bool(false)
  ["PNG Support"]=>
  bool(true)
  ["WBMP Support"]=>
  bool(true)
  ["XBM Support"]=>
  bool(false)
  ["WebP Support"]=>
  bool(false)
  ["AVIF Support"]=>
  bool(false)
}
```

### See Also

- imagepng() - Output a PNG image to either the browser or a file
- imagejpeg() - Output image to browser or file
- imagegif() - Output image to browser or file
- imagewbmp() - Output image to browser or file
- imagewebp() - Output a WebP image to browser or file
- imageavif() - Output image to browser or file
- imagetypes() - Return the image types supported by this PHP build

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gd-info.php
