# The GmagickDraw class

Source: https://devdocs.io/php/class.gmagickdraw

## Introduction

(PECL gmagick >= Unknown)

## Class synopsis

```
public annotate(float $x, float $y, string $text): GmagickDraw
```

```
public arc(
 float $sx,
 float $sy,
 float $ex,
 float $ey,
 float $sd,
 float $ed
): GmagickDraw
```

```
public bezier(array $coordinate_array): GmagickDraw
```

```
public ellipse(
 float $ox,
 float $oy,
 float $rx,
 float $ry,
 float $start,
 float $end
): GmagickDraw
```

```
public getfillcolor(): GmagickPixel
```

```
public getfillopacity(): float
```

```
public getfont(): mixed
```

```
public getfontsize(): float
```

```
public getfontstyle(): int
```

```
public getfontweight(): int
```

```
public getstrokecolor(): GmagickPixel
```

```
public getstrokeopacity(): float
```

```
public getstrokewidth(): float
```

```
public gettextdecoration(): int
```

```
public gettextencoding(): mixed
```

```
public line(
 float $sx,
 float $sy,
 float $ex,
 float $ey
): GmagickDraw
```

```
public point(float $x, float $y): GmagickDraw
```

```
public polygon(array $coordinates): GmagickDraw
```

```
public polyline(array $coordinate_array): GmagickDraw
```

```
public rectangle(
 float $x1,
 float $y1,
 float $x2,
 float $y2
): GmagickDraw
```

```
public rotate(float $degrees): GmagickDraw
```

```
public roundrectangle(
 float $x1,
 float $y1,
 float $x2,
 float $y2,
 float $rx,
 float $ry
): GmagickDraw
```

```
public scale(float $x, float $y): GmagickDraw
```

```
public setfillcolor(mixed $color): GmagickDraw
```

```
public setfillopacity(float $fill_opacity): GmagickDraw
```

```
public setfont(string $font): GmagickDraw
```

```
public setfontsize(float $pointsize): GmagickDraw
```

```
public setfontstyle(int $style): GmagickDraw
```

```
public setfontweight(int $weight): GmagickDraw
```

```
public setstrokecolor(mixed $color): GmagickDraw
```

```
public setstrokeopacity(float $stroke_opacity): GmagickDraw
```

```
public setstrokewidth(float $width): GmagickDraw
```

```
public settextdecoration(int $decoration): GmagickDraw
```

```
public settextencoding(string $encoding): GmagickDraw
```

## Table of Contents

- GmagickDraw::annotate — Draws text on the image
- GmagickDraw::arc — Draws an arc
- GmagickDraw::bezier — Draws a bezier curve
- GmagickDraw::ellipse — Draws an ellipse on the image
- GmagickDraw::getfillcolor — Returns the fill color
- GmagickDraw::getfillopacity — Returns the opacity used when drawing
- GmagickDraw::getfont — Returns the font
- GmagickDraw::getfontsize — Returns the font pointsize
- GmagickDraw::getfontstyle — Returns the font style
- GmagickDraw::getfontweight — Returns the font weight
- GmagickDraw::getstrokecolor — Returns the color used for stroking object outlines
- GmagickDraw::getstrokeopacity — Returns the opacity of stroked object outlines
- GmagickDraw::getstrokewidth — Returns the width of the stroke used to draw object outlines
- GmagickDraw::gettextdecoration — Returns the text decoration
- GmagickDraw::gettextencoding — Returns the code set used for text annotations
- GmagickDraw::line — Draws a line
- GmagickDraw::point — Draws a point
- GmagickDraw::polygon — Draws a polygon
- GmagickDraw::polyline — Draws a polyline
- GmagickDraw::rectangle — Draws a rectangle
- GmagickDraw::rotate — Applies the specified rotation to the current coordinate space
- GmagickDraw::roundrectangle — Draws a rounded rectangle
- GmagickDraw::scale — Adjusts the scaling factor
- GmagickDraw::setfillcolor — Sets the fill color to be used for drawing filled objects
- GmagickDraw::setfillopacity — The setfillopacity purpose
- GmagickDraw::setfont — Sets the fully-specified font to use when annotating with text
- GmagickDraw::setfontsize — Sets the font pointsize to use when annotating with text
- GmagickDraw::setfontstyle — Sets the font style to use when annotating with text
- GmagickDraw::setfontweight — Sets the font weight
- GmagickDraw::setstrokecolor — Sets the color used for stroking object outlines
- GmagickDraw::setstrokeopacity — Specifies the opacity of stroked object outlines
- GmagickDraw::setstrokewidth — Sets the width of the stroke used to draw object outlines
- GmagickDraw::settextdecoration — Specifies a decoration
- GmagickDraw::settextencoding — Specifies the text code set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.gmagickdraw.php
