# Package quotedprintable

Source: https://devdocs.io/go/mime/quotedprintable/index

- import "mime/quotedprintable"
- Overview
- Index
- Examples

## Overview

Package quotedprintable implements quoted-printable encoding as specified by RFC 2045.

## Index

- type Reader
- func NewReader(r io.Reader) *Reader
- func (r *Reader) Read(p []byte) (n int, err error)
- type Writer
- func NewWriter(w io.Writer) *Writer
- func (w *Writer) Close() error
- func (w *Writer) Write(p []byte) (n int, err error)

### Examples

### Package files

reader.go writer.go

## type Reader 1.5

Reader is a quoted-printable decoder.

```
type Reader struct {
    // contains filtered or unexported fields
}
```

### func NewReader 1.5

```
func NewReader(r io.Reader) *Reader
```

NewReader returns a quoted-printable reader, decoding from r.

#### Example

Code:

```
for _, s := range []string{
    `=48=65=6C=6C=6F=2C=20=47=6F=70=68=65=72=73=21`,
    `invalid escape: <b style="font-size: 200%">hello</b>`,
    "Hello, Gophers! This symbol will be unescaped: =3D and this will be written in =\r\none line.",
} {
    b, err := io.ReadAll(quotedprintable.NewReader(strings.NewReader(s)))
    fmt.Printf("%s %v\n", b, err)
}
```

Output:

```
Hello, Gophers! <nil>
invalid escape: <b style="font-size: 200%">hello</b> <nil>
Hello, Gophers! This symbol will be unescaped: = and this will be written in one line. <nil>
```

### func (*Reader) Read 1.5

```
func (r *Reader) Read(p []byte) (n int, err error)
```

Read reads and decodes quoted-printable data from the underlying reader.

## type Writer 1.5

A Writer is a quoted-printable writer that implements io.WriteCloser.

```
type Writer struct {
    // Binary mode treats the writer's input as pure binary and processes end of
    // line bytes as binary data.
    Binary bool
    // contains filtered or unexported fields
}
```

### func NewWriter 1.5

```
func NewWriter(w io.Writer) *Writer
```

NewWriter returns a new Writer that writes to w.

#### Example

Code:

```
w := quotedprintable.NewWriter(os.Stdout)
w.Write([]byte("These symbols will be escaped: = \t"))
w.Close()
```

Output:

```
These symbols will be escaped: =3D =09
```

### func (*Writer) Close 1.5

```
func (w *Writer) Close() error
```

Close closes the Writer, flushing any unwritten data to the underlying io.Writer, but does not close the underlying io.Writer.

### func (*Writer) Write 1.5

```
func (w *Writer) Write(p []byte) (n int, err error)
```

Write encodes p using quoted-printable encoding and writes it to the underlying io.Writer. It limits line length to 76 characters. The encoded bytes are not necessarily flushed until the Writer is closed.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/mime/quotedprintable/
