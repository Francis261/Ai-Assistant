# ImagickDraw::pathCurveToRelative

Source: https://devdocs.io/php/imagickdraw.pathcurvetorelative

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToRelative — Draws a cubic Bezier curve

### Description

```
public ImagickDraw::pathCurveToRelative(
 float $x1,
 float $y1,
 float $x2,
 float $y2,
 float $x,
 float $y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a cubic Bezier curve from the current point to (x,y) using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve using relative coordinates. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

### Parameters

x coordinate of starting control point

y coordinate of starting control point

x coordinate of ending control point

y coordinate of ending control point

ending x coordinate

ending y coordinate

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pathcurvetorelative.php
