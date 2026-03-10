# ImagickDraw::pop

Source: https://devdocs.io/php/imagickdraw.pop

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pop — Destroys the current ImagickDraw in the stack, and returns to the previously pushed ImagickDraw

### Description

```
public ImagickDraw::pop(): bool
```

This function is currently not documented; only its argument list is available.

Destroys the current ImagickDraw in the stack, and returns to the previously pushed ImagickDraw. Multiple ImagickDraws may exist. It is an error to attempt to pop more ImagickDraws than have been pushed, and it is proper form to pop all ImagickDraws which have been pushed.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pop.php
