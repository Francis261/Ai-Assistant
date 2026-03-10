# Package iotest

Source: https://devdocs.io/go/testing/iotest/index

- import "testing/iotest"
- Overview
- Index
- Examples

## Overview

Package iotest implements Readers and Writers useful mainly for testing.

## Index

- Variables
- func DataErrReader(r io.Reader) io.Reader
- func ErrReader(err error) io.Reader
- func HalfReader(r io.Reader) io.Reader
- func NewReadLogger(prefix string, r io.Reader) io.Reader
- func NewWriteLogger(prefix string, w io.Writer) io.Writer
- func OneByteReader(r io.Reader) io.Reader
- func TestReader(r io.Reader, content []byte) error
- func TimeoutReader(r io.Reader) io.Reader
- func TruncateWriter(w io.Writer, n int64) io.Writer

### Examples

### Package files

logger.go reader.go writer.go

## Variables

ErrTimeout is a fake timeout error.

```
var ErrTimeout = errors.New("timeout")
```

## func DataErrReader

```
func DataErrReader(r io.Reader) io.Reader
```

DataErrReader changes the way errors are handled by a Reader. Normally, a Reader returns an error (typically EOF) from the first Read call after the last piece of data is read. DataErrReader wraps a Reader and changes its behavior so the final error is returned along with the final data, instead of in the first call after the final data.

## func ErrReader 1.16

```
func ErrReader(err error) io.Reader
```

ErrReader returns an io.Reader that returns 0, err from all Read calls.

#### Example

Code:

```
// A reader that always returns a custom error.
r := iotest.ErrReader(errors.New("custom error"))
n, err := r.Read(nil)
fmt.Printf("n:   %d\nerr: %q\n", n, err)
```

Output:

```
n:   0
err: "custom error"
```

## func HalfReader

```
func HalfReader(r io.Reader) io.Reader
```

HalfReader returns a Reader that implements Read by reading half as many requested bytes from r.

## func NewReadLogger

```
func NewReadLogger(prefix string, r io.Reader) io.Reader
```

NewReadLogger returns a reader that behaves like r except that it logs (using log.Printf) each read to standard error, printing the prefix and the hexadecimal data read.

## func NewWriteLogger

```
func NewWriteLogger(prefix string, w io.Writer) io.Writer
```

NewWriteLogger returns a writer that behaves like w except that it logs (using log.Printf) each write to standard error, printing the prefix and the hexadecimal data written.

## func OneByteReader

```
func OneByteReader(r io.Reader) io.Reader
```

OneByteReader returns a Reader that implements each non-empty Read by reading one byte from r.

## func TestReader 1.16

```
func TestReader(r io.Reader, content []byte) error
```

TestReader tests that reading from r returns the expected file content. It does reads of different sizes, until EOF. If r implements io.ReaderAt or io.Seeker, TestReader also checks that those operations behave as they should.

If TestReader finds any misbehaviors, it returns an error reporting them. The error text may span multiple lines.

## func TimeoutReader

```
func TimeoutReader(r io.Reader) io.Reader
```

TimeoutReader returns ErrTimeout on the second read with no data. Subsequent calls to read succeed.

## func TruncateWriter

```
func TruncateWriter(w io.Writer, n int64) io.Writer
```

TruncateWriter returns a Writer that writes to w but stops silently after n bytes.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/testing/iotest/
