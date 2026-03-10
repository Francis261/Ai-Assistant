# Package png

Source: https://devdocs.io/go/image/png/index

- import "image/png"
- Overview
- Index
- Examples

## Overview

Package png implements a PNG image decoder and encoder.

The PNG specification is at https://www.w3.org/TR/PNG/.

## Index

- func Decode(r io.Reader) (image.Image, error)
- func DecodeConfig(r io.Reader) (image.Config, error)
- func Encode(w io.Writer, m image.Image) error
- type CompressionLevel
- type Encoder
- func (enc *Encoder) Encode(w io.Writer, m image.Image) error
- type EncoderBuffer
- type EncoderBufferPool
- type FormatError
- func (e FormatError) Error() string
- type UnsupportedError
- func (e UnsupportedError) Error() string

### Examples

### Package files

paeth.go reader.go writer.go

## func Decode

```
func Decode(r io.Reader) (image.Image, error)
```

Decode reads a PNG image from r and returns it as an image.Image. The type of Image returned depends on the PNG contents.

#### Example

Code:

```
// This example uses png.Decode which can only decode PNG images.
// Consider using the general image.Decode as it can sniff and decode any registered image format.
img, err := png.Decode(gopherPNG())
if err != nil {
    log.Fatal(err)
}

levels := []string{" ", "░", "▒", "▓", "█"}

for y := img.Bounds().Min.Y; y < img.Bounds().Max.Y; y++ {
    for x := img.Bounds().Min.X; x < img.Bounds().Max.X; x++ {
        c := color.GrayModel.Convert(img.At(x, y)).(color.Gray)
        level := c.Y / 51 // 51 * 5 = 255
        if level == 5 {
            level--
        }
        fmt.Print(levels[level])
    }
    fmt.Print("\n")
}
```

## func DecodeConfig

```
func DecodeConfig(r io.Reader) (image.Config, error)
```

DecodeConfig returns the color model and dimensions of a PNG image without decoding the entire image.

## func Encode

```
func Encode(w io.Writer, m image.Image) error
```

Encode writes the Image m to w in PNG format. Any Image may be encoded, but images that are not image.NRGBA might be encoded lossily.

#### Example

Code:

```
const width, height = 256, 256

// Create a colored image of the given width and height.
img := image.NewNRGBA(image.Rect(0, 0, width, height))

for y := 0; y < height; y++ {
    for x := 0; x < width; x++ {
        img.Set(x, y, color.NRGBA{
            R: uint8((x + y) & 255),
            G: uint8((x + y) << 1 & 255),
            B: uint8((x + y) << 2 & 255),
            A: 255,
        })
    }
}

f, err := os.Create("image.png")
if err != nil {
    log.Fatal(err)
}

if err := png.Encode(f, img); err != nil {
    f.Close()
    log.Fatal(err)
}

if err := f.Close(); err != nil {
    log.Fatal(err)
}
```

## type CompressionLevel 1.4

CompressionLevel indicates the compression level.

```
type CompressionLevel int
```

```
const (
    DefaultCompression CompressionLevel = 0
    NoCompression      CompressionLevel = -1
    BestSpeed          CompressionLevel = -2
    BestCompression    CompressionLevel = -3
)
```

## type Encoder 1.4

Encoder configures encoding PNG images.

```
type Encoder struct {
    CompressionLevel CompressionLevel

    // BufferPool optionally specifies a buffer pool to get temporary
    // EncoderBuffers when encoding an image.
    BufferPool EncoderBufferPool // Go 1.9
}
```

### func (*Encoder) Encode 1.4

```
func (enc *Encoder) Encode(w io.Writer, m image.Image) error
```

Encode writes the Image m to w in PNG format.

## type EncoderBuffer 1.9

EncoderBuffer holds the buffers used for encoding PNG images.

```
type EncoderBuffer encoder
```

## type EncoderBufferPool 1.9

EncoderBufferPool is an interface for getting and returning temporary instances of the EncoderBuffer struct. This can be used to reuse buffers when encoding multiple images.

```
type EncoderBufferPool interface {
    Get() *EncoderBuffer
    Put(*EncoderBuffer)
}
```

## type FormatError

A FormatError reports that the input is not a valid PNG.

```
type FormatError string
```

### func (FormatError) Error

```
func (e FormatError) Error() string
```

## type UnsupportedError

An UnsupportedError reports that the input uses a valid but unimplemented PNG feature.

```
type UnsupportedError string
```

### func (UnsupportedError) Error

```
func (e UnsupportedError) Error() string
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/image/png/
