# ImagickDraw::pathCurveToAbsolute

Source: https://devdocs.io/php/imagickdraw.pathcurvetoabsolute

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToAbsolute — Draws a cubic Bezier curve

### Description

```
public ImagickDraw::pathCurveToAbsolute(
 float $x1,
 float $y1,
 float $x2,
 float $y2,
 float $x,
 float $y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a cubic Bezier curve from the current point to (x,y) using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve using absolute coordinates. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

### Parameters

x coordinate of the first control point

y coordinate of the first control point

x coordinate of the second control point

y coordinate of the first control point

x coordinate of the curve end

y coordinate of the curve end

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pathcurvetoabsolute.php
