# ImagickDraw::pathEllipticArcAbsolute

Source: https://devdocs.io/php/imagickdraw.pathellipticarcabsolute

(PECL imagick 2, PECL imagick 3)

ImagickDraw::pathEllipticArcAbsolute — Draws an elliptical arc

### Description

```
public ImagickDraw::pathEllipticArcAbsolute(
 float $rx,
 float $ry,
 float $x_axis_rotation,
 bool $large_arc,
 bool $sweep,
 float $x,
 float $y
): bool
```

This function is currently not documented; only its argument list is available.

Draws an elliptical arc from the current point to (x, y) using absolute coordinates. The size and orientation of the ellipse are defined by two radii (rx, ry) and an xAxisRotation, which indicates how the ellipse as a whole is rotated relative to the current coordinate system. The center (cx, cy) of the ellipse is calculated automatically to satisfy the constraints imposed by the other parameters. largeArcFlag and sweepFlag contribute to the automatic calculations and help determine how the arc is drawn. If large_arc is true then draw the larger of the available arcs. If sweep is true, then draw the arc matching a clock-wise rotation.

### Parameters

x radius

y radius

x axis rotation

large arc flag

sweep flag

x coordinate

y coordinate

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.pathellipticarcabsolute.php
