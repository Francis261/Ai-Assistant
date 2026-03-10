# ImagickDraw::pathCurveToSmoothRelative

Source: https://devdocs.io/php/imagickdraw.pathcurvetosmoothrelative

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToSmoothRelative — Draws a cubic Bezier curve

### Description

```
public ImagickDraw::pathCurveToSmoothRelative(
 float $x2,
 float $y2,
 float $x,
 float $y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a cubic Bezier curve from the current point to (x,y) using relative coordinates. The first control point is assumed to be the reflection of the second control point on the previous command relative to the current point. (If there is no previous command or if the previous command was not an DrawPathCurveToAbsolute, DrawPathCurveToRelative, DrawPathCurveToSmoothAbsolute or DrawPathCurveToSmoothRelative, assume the first control point is coincident with the current point.) (x2,y2) is the second control point (i.e., the control point at the end of the curve). At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

### Parameters

x coordinate of the second control point

y coordinate of the second control point

x coordinate of the ending point

y coordinate of the ending point

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pathcurvetosmoothrelative.php
