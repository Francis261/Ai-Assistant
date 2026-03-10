# ImagickDraw::pushDefs

Source: https://devdocs.io/php/imagickdraw.pushdefs

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pushDefs — Indicates that following commands create named elements for early processing

### Description

```
public ImagickDraw::pushDefs(): bool
```

This function is currently not documented; only its argument list is available.

Indicates that commands up to a terminating ImagickDraw::popDefs() command create named elements (e.g. clip-paths, textures, etc.) which may safely be processed earlier for the sake of efficiency.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pushdefs.php
