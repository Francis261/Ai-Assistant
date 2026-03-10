# ImagickDraw::getStrokeMiterLimit

Source: https://devdocs.io/php/imagickdraw.getstrokemiterlimit

(PECL imagick 2, PECL imagick 3)

ImagickDraw::getStrokeMiterLimit — Returns the stroke miter limit

### Description

```
public ImagickDraw::getStrokeMiterLimit(): int
```

This function is currently not documented; only its argument list is available.

Returns the miter limit. When two line segments meet at a sharp angle and miter joins have been specified for 'lineJoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path. The 'miterLimit' imposes a limit on the ratio of the miter length to the 'lineWidth'.

### Return Values

Returns an int describing the miter limit and 0 if no miter limit is set.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.getstrokemiterlimit.php
