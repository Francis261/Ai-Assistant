# ImagickDraw::pathCurveToQuadraticBezierRelative

Source: https://devdocs.io/php/imagickdraw.pathcurvetoquadraticbezierrelative

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToQuadraticBezierRelative — Draws a quadratic Bezier curve

### Description

```
public ImagickDraw::pathCurveToQuadraticBezierRelative(
 float $x1,
 float $y1,
 float $x_end,
 float $y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a quadratic Bezier curve from the current point to (x,y) using (x1,y1) as the control point using relative coordinates. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

### Parameters

starting x coordinate

starting y coordinate

ending x coordinate

ending y coordinate

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pathcurvetoquadraticbezierrelative.php
