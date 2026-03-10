# GmagickPixel::getcolor

Source: https://devdocs.io/php/gmagickpixel.getcolor

(PECL gmagick >= Unknown)

GmagickPixel::getcolor — Returns the color

### Description

```
public GmagickPixel::getcolor(bool $as_array = false, bool $normalize_array = false): mixed
```

Returns the color described by the GmagickPixel object, as a string or an array. If the color has an opacity channel set, this is provided as a fourth value in the list.

### Parameters

true to indicate return of array instead of string.

true to normalize the color values.

### Return Values

A string or an array of channel values, each normalized if true is given as normalize_array. Throws GmagickPixelException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagickpixel.getcolor.php
