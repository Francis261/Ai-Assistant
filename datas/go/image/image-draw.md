# Package draw

Source: https://devdocs.io/go/image/draw/index

- import "image/draw"
- Overview
- Index
- Examples

## Overview

Package draw provides image composition functions.

See "The Go image/draw package" for an introduction to this package: https://golang.org/doc/articles/image_draw.html

## Index

- func Draw(dst Image, r image.Rectangle, src image.Image, sp image.Point, op Op)
- func DrawMask(dst Image, r image.Rectangle, src image.Image, sp image.Point, mask image.Image, mp image.Point, op Op)
- type Drawer
- type Image
- type Op
- func (op Op) Draw(dst Image, r image.Rectangle, src image.Image, sp image.Point)
- type Quantizer
- type RGBA64Image

### Examples

### Package files

draw.go

## func Draw

```
func Draw(dst Image, r image.Rectangle, src image.Image, sp image.Point, op Op)
```

Draw calls DrawMask with a nil mask.

## func DrawMask

```
func DrawMask(dst Image, r image.Rectangle, src image.Image, sp image.Point, mask image.Image, mp image.Point, op Op)
```

DrawMask aligns r.Min in dst with sp in src and mp in mask and then replaces the rectangle r in dst with the result of a Porter-Duff composition. A nil mask is treated as opaque.

## type Drawer 1.2

Drawer contains the Draw method.

```
type Drawer interface {
    // Draw aligns r.Min in dst with sp in src and then replaces the
    // rectangle r in dst with the result of drawing src on dst.
    Draw(dst Image, r image.Rectangle, src image.Image, sp image.Point)
}
```

FloydSteinberg is a Drawer that is the Src Op with Floyd-Steinberg error diffusion.

```
var FloydSteinberg Drawer = floydSteinberg{}
```

#### Example (FloydSteinberg)

Code:

```
const width = 130
const height = 50

im := image.NewGray(image.Rectangle{Max: image.Point{X: width, Y: height}})
for x := 0; x < width; x++ {
    for y := 0; y < height; y++ {
        dist := math.Sqrt(math.Pow(float64(x-width/2), 2)/3+math.Pow(float64(y-height/2), 2)) / (height / 1.5) * 255
        var gray uint8
        if dist > 255 {
            gray = 255
        } else {
            gray = uint8(dist)
        }
        im.SetGray(x, y, color.Gray{Y: 255 - gray})
    }
}
pi := image.NewPaletted(im.Bounds(), []color.Color{
    color.Gray{Y: 255},
    color.Gray{Y: 160},
    color.Gray{Y: 70},
    color.Gray{Y: 35},
    color.Gray{Y: 0},
})

draw.FloydSteinberg.Draw(pi, im.Bounds(), im, image.Point{})
shade := []string{" ", "░", "▒", "▓", "█"}
for i, p := range pi.Pix {
    fmt.Print(shade[p])
    if (i+1)%width == 0 {
        fmt.Print("\n")
    }
}
```

## type Image

Image is an image.Image with a Set method to change a single pixel.

```
type Image interface {
    image.Image
    Set(x, y int, c color.Color)
}
```

## type Op

Op is a Porter-Duff compositing operator.

```
type Op int
```

```
const (
    // Over specifies ``(src in mask) over dst''.
    Over Op = iota
    // Src specifies ``src in mask''.
    Src
)
```

### func (Op) Draw 1.2

```
func (op Op) Draw(dst Image, r image.Rectangle, src image.Image, sp image.Point)
```

Draw implements the Drawer interface by calling the Draw function with this Op.

## type Quantizer 1.2

Quantizer produces a palette for an image.

```
type Quantizer interface {
    // Quantize appends up to cap(p) - len(p) colors to p and returns the
    // updated palette suitable for converting m to a paletted image.
    Quantize(p color.Palette, m image.Image) color.Palette
}
```

## type RGBA64Image 1.17

RGBA64Image extends both the Image and image.RGBA64Image interfaces with a SetRGBA64 method to change a single pixel. SetRGBA64 is equivalent to calling Set, but it can avoid allocations from converting concrete color types to the color.Color interface type.

```
type RGBA64Image interface {
    image.RGBA64Image
    Set(x, y int, c color.Color)
    SetRGBA64(x, y int, c color.RGBA64)
}
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/image/draw/
