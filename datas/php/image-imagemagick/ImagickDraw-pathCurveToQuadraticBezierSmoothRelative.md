# ImagickDraw::pathCurveToQuadraticBezierSmoothRelative

Source: https://devdocs.io/php/imagickdraw.pathcurvetoquadraticbeziersmoothrelative

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathCurveToQuadraticBezierSmoothRelative — Draws a quadratic Bezier curve

### Description

```
public ImagickDraw::pathCurveToQuadraticBezierSmoothRelative(float $x, float $y): bool
```

This function is currently not documented; only its argument list is available.

Draws a quadratic Bezier curve (using relative coordinates) from the current point to (x, y). The control point is assumed to be the reflection of the control point on the previous command relative to the current point. (If there is no previous command or if the previous command was not a DrawPathCurveToQuadraticBezierAbsolute, DrawPathCurveToQuadraticBezierRelative, DrawPathCurveToQuadraticBezierSmoothAbsolut or DrawPathCurveToQuadraticBezierSmoothRelative, assume the control point is coincident with the current point). At the end of the command, the new current point becomes the final (x, y) coordinate pair used in the polybezier.

This function cannot be used to continue a cubic Bezier curve smoothly. It can only continue from a quadratic curve smoothly.

### Parameters

ending x coordinate

ending y coordinate

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::pathCurveToQuadraticBezierSmoothRelative() example

```
<?php
$draw = new \ImagickDraw();

$draw->setStrokeOpacity(1);
$draw->setStrokeColor("black");
$draw->setFillColor("blue");

$draw->setStrokeWidth(2);
$draw->setFontSize(72);

$draw->pathStart();
$draw->pathMoveToAbsolute(50,250);

// This specifies a quadratic bezier curve with the current position as the start
// point, the control point is the first two params, and the end point is the last two params.
$draw->pathCurveToQuadraticBezierAbsolute(
    150,50, 
    250,250
);

// This specifies a quadratic bezier curve with the current position as the start
// point, the control point is mirrored from the previous curves control point
// and the end point is defined by the x, y values.
$draw->pathCurveToQuadraticBezierSmoothAbsolute(
    450,250
);

// This specifies a quadratic bezier curve with the current position as the start
// point, the control point is mirrored from the previous curves control point
// and the end point is defined relative from the current position by the x, y values.
$draw->pathCurveToQuadraticBezierSmoothRelative(
    200,-100
);

$draw->pathFinish();

$imagick = new \Imagick();
$imagick->newImage(700, 500, $backgroundColor);
$imagick->setImageFormat("png");

$imagick->drawImage($draw);

header("Content-Type: image/png");
echo $imagick->getImageBlob();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pathcurvetoquadraticbeziersmoothrelative.php
