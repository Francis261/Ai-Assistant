# The ImagickDraw class

Source: https://devdocs.io/php/class.imagickdraw

## Class synopsis

(PECL imagick 2, PECL imagick 3)

```
public affine(array $affine): bool
```

```
public annotation(float $x, float $y, string $text): bool
```

```
public arc(
 float $start_x,
 float $start_y,
 float $end_x,
 float $end_y,
 float $start_angle,
 float $end_angle
): bool
```

```
public bezier(array $coordinates): bool
```

```
public circle(
 float $origin_x,
 float $origin_y,
 float $perimeter_x,
 float $perimeter_y
): bool
```

```
public clear(): bool
```

```
public clone(): ImagickDraw
```

```
public color(float $x, float $y, int $paint): bool
```

```
public comment(string $comment): bool
```

```
public composite(
 int $composite,
 float $x,
 float $y,
 float $width,
 float $height,
 Imagick $image
): bool
```

```
public destroy(): bool
```

```
public ellipse(
 float $origin_x,
 float $origin_y,
 float $radius_x,
 float $radius_y,
 float $angle_start,
 float $angle_end
): bool
```

```
public getClipPath(): false|string
```

```
public getClipRule(): int
```

```
public getClipUnits(): int
```

```
public getFillColor(): ImagickPixel
```

```
public getFillOpacity(): float
```

```
public getFillRule(): int
```

```
public getFont(): string
```

```
public getFontFamily(): string
```

```
public getFontSize(): float
```

```
public getFontStretch(): int
```

```
public getFontStyle(): int
```

```
public getFontWeight(): int
```

```
public getGravity(): int
```

```
public getStrokeAntialias(): bool
```

```
public getStrokeColor(): ImagickPixel
```

```
public getStrokeDashArray(): array
```

```
public getStrokeDashOffset(): float
```

```
public getStrokeLineCap(): int
```

```
public getStrokeLineJoin(): int
```

```
public getStrokeMiterLimit(): int
```

```
public getStrokeOpacity(): float
```

```
public getStrokeWidth(): float
```

```
public getTextAlignment(): int
```

```
public getTextAntialias(): bool
```

```
public getTextDecoration(): int
```

```
public getTextEncoding(): false|string
```

```
public getTextInterlineSpacing(): float
```

```
public getTextInterwordSpacing(): float
```

```
public getTextKerning(): float
```

```
public getTextUnderColor(): ImagickPixel
```

```
public getVectorGraphics(): string
```

```
public line(
 float $start_x,
 float $start_y,
 float $end_x,
 float $end_y
): bool
```

```
public matte(float $x, float $y, int $paint): bool
```

```
public pathClose(): bool
```

```
public pathCurveToAbsolute(
 float $x1,
 float $y1,
 float $x2,
 float $y2,
 float $x,
 float $y
): bool
```

```
public pathCurveToQuadraticBezierAbsolute(
 float $x1,
 float $y1,
 float $x_end,
 float $y
): bool
```

```
public pathCurveToQuadraticBezierRelative(
 float $x1,
 float $y1,
 float $x_end,
 float $y
): bool
```

```
public pathCurveToQuadraticBezierSmoothAbsolute(float $x, float $y): bool
```

```
public pathCurveToQuadraticBezierSmoothRelative(float $x, float $y): bool
```

```
public pathCurveToRelative(
 float $x1,
 float $y1,
 float $x2,
 float $y2,
 float $x,
 float $y
): bool
```

```
public pathCurveToSmoothAbsolute(
 float $x2,
 float $y2,
 float $x,
 float $y
): bool
```

```
public pathCurveToSmoothRelative(
 float $x2,
 float $y2,
 float $x,
 float $y
): bool
```

```
public pathEllipticArcAbsolute(
 float $rx,
 float $ry,
 float $x_axis_rotation,
 bool $large_arc,
 bool $sweep,
 float $x,
 float $y
): bool
```

```
public pathEllipticArcRelative(
 float $rx,
 float $ry,
 float $x_axis_rotation,
 bool $large_arc,
 bool $sweep,
 float $x,
 float $y
): bool
```

```
public pathFinish(): bool
```

```
public pathLineToAbsolute(float $x, float $y): bool
```

```
public pathLineToHorizontalAbsolute(float $x): bool
```

```
public pathLineToHorizontalRelative(float $x): bool
```

```
public pathLineToRelative(float $x, float $y): bool
```

```
public pathLineToVerticalAbsolute(float $y): bool
```

```
public pathLineToVerticalRelative(float $y): bool
```

```
public pathMoveToAbsolute(float $x, float $y): bool
```

```
public pathMoveToRelative(float $x, float $y): bool
```

```
public pathStart(): bool
```

```
public point(float $x, float $y): bool
```

```
public polygon(array $coordinates): bool
```

```
public polyline(array $coordinates): bool
```

```
public pop(): bool
```

```
public popClipPath(): bool
```

```
public popDefs(): bool
```

```
public popPattern(): bool
```

```
public push(): bool
```

```
public pushClipPath(string $clip_mask_id): bool
```

```
public pushDefs(): bool
```

```
public pushPattern(
 string $pattern_id,
 float $x,
 float $y,
 float $width,
 float $height
): bool
```

```
public rectangle(
 float $top_left_x,
 float $top_left_y,
 float $bottom_right_x,
 float $bottom_right_y
): bool
```

```
public render(): bool
```

```
public resetVectorGraphics(): bool
```

```
public rotate(float $degrees): bool
```

```
public roundRectangle(
 float $top_left_x,
 float $top_left_y,
 float $bottom_right_x,
 float $bottom_right_y,
 float $rounding_x,
 float $rounding_y
): bool
```

```
public scale(float $x, float $y): bool
```

```
public setClipPath(string $clip_mask): bool
```

```
public setClipRule(int $fillrule): bool
```

```
public setClipUnits(int $pathunits): bool
```

```
public setFillAlpha(float $alpha): bool
```

```
public setFillColor(ImagickPixel|string $fill_color): bool
```

```
public setFillOpacity(float $opacity): bool
```

```
public setFillPatternURL(string $fill_url): bool
```

```
public setFillRule(int $fillrule): bool
```

```
public setFont(string $font_name): bool
```

```
public setFontFamily(string $font_family): bool
```

```
public setFontSize(float $point_size): bool
```

```
public setFontStretch(int $stretch): bool
```

```
public setFontStyle(int $style): bool
```

```
public setFontWeight(int $weight): bool
```

```
public setGravity(int $gravity): bool
```

```
public setResolution(float $resolution_x, float $resolution_y): bool
```

```
public setStrokeAlpha(float $alpha): bool
```

```
public setStrokeAntialias(bool $enabled): bool
```

```
public setStrokeColor(ImagickPixel|string $color): bool
```

```
public setStrokeDashArray(?array $dashes): bool
```

```
public setStrokeDashOffset(float $dash_offset): bool
```

```
public setStrokeLineCap(int $linecap): bool
```

```
public setStrokeLineJoin(int $linejoin): bool
```

```
public setStrokeMiterLimit(int $miterlimit): bool
```

```
public setStrokeOpacity(float $opacity): bool
```

```
public setStrokePatternURL(string $stroke_url): bool
```

```
public setStrokeWidth(float $width): bool
```

```
public setTextAlignment(int $align): bool
```

```
public setTextAntialias(bool $antialias): bool
```

```
public setTextDecoration(int $decoration): bool
```

```
public setTextEncoding(string $encoding): bool
```

```
public setTextInterlineSpacing(float $spacing): bool
```

```
public setTextInterwordSpacing(float $spacing): bool
```

```
public setTextKerning(float $kerning): bool
```

```
public setTextUnderColor(ImagickPixel|string $under_color): bool
```

```
public setVectorGraphics(string $xml): bool
```

```
public setViewbox(
 int $left_x,
 int $top_y,
 int $right_x,
 int $bottom_y
): bool
```

```
public skewX(float $degrees): bool
```

```
public skewY(float $degrees): bool
```

```
public translate(float $x, float $y): bool
```

## Table of Contents

- ImagickDraw::affine — Adjusts the current affine transformation matrix
- ImagickDraw::annotation — Draws text on the image
- ImagickDraw::arc — Draws an arc
- ImagickDraw::bezier — Draws a bezier curve
- ImagickDraw::circle — Draws a circle
- ImagickDraw::clear — Clears the ImagickDraw
- ImagickDraw::clone — Makes an exact copy of the specified ImagickDraw object
- ImagickDraw::color — Draws color on image
- ImagickDraw::comment — Adds a comment
- ImagickDraw::composite — Composites an image onto the current image
- ImagickDraw::__construct — The ImagickDraw constructor
- ImagickDraw::destroy — Frees all associated resources
- ImagickDraw::ellipse — Draws an ellipse on the image
- ImagickDraw::getClipPath — Obtains the current clipping path ID
- ImagickDraw::getClipRule — Returns the current polygon fill rule
- ImagickDraw::getClipUnits — Returns the interpretation of clip path units
- ImagickDraw::getFillColor — Returns the fill color
- ImagickDraw::getFillOpacity — Returns the opacity used when drawing
- ImagickDraw::getFillRule — Returns the fill rule
- ImagickDraw::getFont — Returns the font
- ImagickDraw::getFontFamily — Returns the font family
- ImagickDraw::getFontSize — Returns the font pointsize
- ImagickDraw::getFontStretch — Gets the font stretch to use when annotating with text
- ImagickDraw::getFontStyle — Returns the font style
- ImagickDraw::getFontWeight — Returns the font weight
- ImagickDraw::getGravity — Returns the text placement gravity
- ImagickDraw::getStrokeAntialias — Returns the current stroke antialias setting
- ImagickDraw::getStrokeColor — Returns the color used for stroking object outlines
- ImagickDraw::getStrokeDashArray — Returns an array representing the pattern of dashes and gaps used to stroke paths
- ImagickDraw::getStrokeDashOffset — Returns the offset into the dash pattern to start the dash
- ImagickDraw::getStrokeLineCap — Returns the shape to be used at the end of open subpaths when they are stroked
- ImagickDraw::getStrokeLineJoin — Returns the shape to be used at the corners of paths when they are stroked
- ImagickDraw::getStrokeMiterLimit — Returns the stroke miter limit
- ImagickDraw::getStrokeOpacity — Returns the opacity of stroked object outlines
- ImagickDraw::getStrokeWidth — Returns the width of the stroke used to draw object outlines
- ImagickDraw::getTextAlignment — Returns the text alignment
- ImagickDraw::getTextAntialias — Returns the current text antialias setting
- ImagickDraw::getTextDecoration — Returns the text decoration
- ImagickDraw::getTextEncoding — Returns the code set used for text annotations
- ImagickDraw::getTextInterlineSpacing — Gets the text interword spacing
- ImagickDraw::getTextInterwordSpacing — Gets the text interword spacing
- ImagickDraw::getTextKerning — Gets the text kerning
- ImagickDraw::getTextUnderColor — Returns the text under color
- ImagickDraw::getVectorGraphics — Returns a string containing vector graphics
- ImagickDraw::line — Draws a line
- ImagickDraw::matte — Paints on the image's opacity channel
- ImagickDraw::pathClose — Adds a path element to the current path
- ImagickDraw::pathCurveToAbsolute — Draws a cubic Bezier curve
- ImagickDraw::pathCurveToQuadraticBezierAbsolute — Draws a quadratic Bezier curve
- ImagickDraw::pathCurveToQuadraticBezierRelative — Draws a quadratic Bezier curve
- ImagickDraw::pathCurveToQuadraticBezierSmoothAbsolute — Draws a quadratic Bezier curve
- ImagickDraw::pathCurveToQuadraticBezierSmoothRelative — Draws a quadratic Bezier curve
- ImagickDraw::pathCurveToRelative — Draws a cubic Bezier curve
- ImagickDraw::pathCurveToSmoothAbsolute — Draws a cubic Bezier curve
- ImagickDraw::pathCurveToSmoothRelative — Draws a cubic Bezier curve
- ImagickDraw::pathEllipticArcAbsolute — Draws an elliptical arc
- ImagickDraw::pathEllipticArcRelative — Draws an elliptical arc
- ImagickDraw::pathFinish — Terminates the current path
- ImagickDraw::pathLineToAbsolute — Draws a line path
- ImagickDraw::pathLineToHorizontalAbsolute — Draws a horizontal line path
- ImagickDraw::pathLineToHorizontalRelative — Draws a horizontal line
- ImagickDraw::pathLineToRelative — Draws a line path
- ImagickDraw::pathLineToVerticalAbsolute — Draws a vertical line
- ImagickDraw::pathLineToVerticalRelative — Draws a vertical line path
- ImagickDraw::pathMoveToAbsolute — Starts a new sub-path
- ImagickDraw::pathMoveToRelative — Starts a new sub-path
- ImagickDraw::pathStart — Declares the start of a path drawing list
- ImagickDraw::point — Draws a point
- ImagickDraw::polygon — Draws a polygon
- ImagickDraw::polyline — Draws a polyline
- ImagickDraw::pop — Destroys the current ImagickDraw in the stack, and returns to the previously pushed ImagickDraw
- ImagickDraw::popClipPath — Terminates a clip path definition
- ImagickDraw::popDefs — Terminates a definition list
- ImagickDraw::popPattern — Terminates a pattern definition
- ImagickDraw::push — Clones the current ImagickDraw and pushes it to the stack
- ImagickDraw::pushClipPath — Starts a clip path definition
- ImagickDraw::pushDefs — Indicates that following commands create named elements for early processing
- ImagickDraw::pushPattern — Indicates that subsequent commands up to a ImagickDraw::opPattern() command comprise the definition of a named pattern
- ImagickDraw::rectangle — Draws a rectangle
- ImagickDraw::render — Renders all preceding drawing commands onto the image
- ImagickDraw::resetVectorGraphics — Resets the vector graphics
- ImagickDraw::rotate — Applies the specified rotation to the current coordinate space
- ImagickDraw::roundRectangle — Draws a rounded rectangle
- ImagickDraw::scale — Adjusts the scaling factor
- ImagickDraw::setClipPath — Associates a named clipping path with the image
- ImagickDraw::setClipRule — Set the polygon fill rule to be used by the clipping path
- ImagickDraw::setClipUnits — Sets the interpretation of clip path units
- ImagickDraw::setFillAlpha — Sets the opacity to use when drawing using the fill color or fill texture
- ImagickDraw::setFillColor — Sets the fill color to be used for drawing filled objects
- ImagickDraw::setFillOpacity — Sets the opacity to use when drawing using the fill color or fill texture
- ImagickDraw::setFillPatternURL — Sets the URL to use as a fill pattern for filling objects
- ImagickDraw::setFillRule — Sets the fill rule to use while drawing polygons
- ImagickDraw::setFont — Sets the fully-specified font to use when annotating with text
- ImagickDraw::setFontFamily — Sets the font family to use when annotating with text
- ImagickDraw::setFontSize — Sets the font pointsize to use when annotating with text
- ImagickDraw::setFontStretch — Sets the font stretch to use when annotating with text
- ImagickDraw::setFontStyle — Sets the font style to use when annotating with text
- ImagickDraw::setFontWeight — Sets the font weight
- ImagickDraw::setGravity — Sets the text placement gravity
- ImagickDraw::setResolution — Sets the resolution
- ImagickDraw::setStrokeAlpha — Specifies the opacity of stroked object outlines
- ImagickDraw::setStrokeAntialias — Controls whether stroked outlines are antialiased
- ImagickDraw::setStrokeColor — Sets the color used for stroking object outlines
- ImagickDraw::setStrokeDashArray — Specifies the pattern of dashes and gaps used to stroke paths
- ImagickDraw::setStrokeDashOffset — Specifies the offset into the dash pattern to start the dash
- ImagickDraw::setStrokeLineCap — Specifies the shape to be used at the end of open subpaths when they are stroked
- ImagickDraw::setStrokeLineJoin — Specifies the shape to be used at the corners of paths when they are stroked
- ImagickDraw::setStrokeMiterLimit — Specifies the miter limit
- ImagickDraw::setStrokeOpacity — Specifies the opacity of stroked object outlines
- ImagickDraw::setStrokePatternURL — Sets the pattern used for stroking object outlines
- ImagickDraw::setStrokeWidth — Sets the width of the stroke used to draw object outlines
- ImagickDraw::setTextAlignment — Specifies a text alignment
- ImagickDraw::setTextAntialias — Controls whether text is antialiased
- ImagickDraw::setTextDecoration — Specifies a decoration
- ImagickDraw::setTextEncoding — Specifies the text code set
- ImagickDraw::setTextInterlineSpacing — Sets the text interline spacing
- ImagickDraw::setTextInterwordSpacing — Sets the text interword spacing
- ImagickDraw::setTextKerning — Sets the text kerning
- ImagickDraw::setTextUnderColor — Specifies the color of a background rectangle
- ImagickDraw::setVectorGraphics — Sets the vector graphics
- ImagickDraw::setViewbox — Sets the overall canvas size
- ImagickDraw::skewX — Skews the current coordinate system in the horizontal direction
- ImagickDraw::skewY — Skews the current coordinate system in the vertical direction
- ImagickDraw::translate — Applies a translation to the current coordinate system

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.imagickdraw.php
