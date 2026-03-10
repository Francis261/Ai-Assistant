# Package hex

Source: https://devdocs.io/go/encoding/hex/index

- import "encoding/hex"
- Overview
- Index
- Examples

## Overview

Package hex implements hexadecimal encoding and decoding.

## Index

- Variables
- func AppendDecode(dst, src []byte) ([]byte, error)
- func AppendEncode(dst, src []byte) []byte
- func Decode(dst, src []byte) (int, error)
- func DecodeString(s string) ([]byte, error)
- func DecodedLen(x int) int
- func Dump(data []byte) string
- func Dumper(w io.Writer) io.WriteCloser
- func Encode(dst, src []byte) int
- func EncodeToString(src []byte) string
- func EncodedLen(n int) int
- func NewDecoder(r io.Reader) io.Reader
- func NewEncoder(w io.Writer) io.Writer
- type InvalidByteError
- func (e InvalidByteError) Error() string

### Examples

### Package files

hex.go

## Variables

ErrLength reports an attempt to decode an odd-length input using Decode or DecodeString. The stream-based Decoder returns io.ErrUnexpectedEOF instead of ErrLength.

```
var ErrLength = errors.New("encoding/hex: odd length hex string")
```

## func AppendDecode 1.22

```
func AppendDecode(dst, src []byte) ([]byte, error)
```

AppendDecode appends the hexadecimally decoded src to dst and returns the extended buffer. If the input is malformed, it returns the partially decoded src and an error.

## func AppendEncode 1.22

```
func AppendEncode(dst, src []byte) []byte
```

AppendEncode appends the hexadecimally encoded src to dst and returns the extended buffer.

## func Decode

```
func Decode(dst, src []byte) (int, error)
```

Decode decodes src into DecodedLen(len(src)) bytes, returning the actual number of bytes written to dst.

Decode expects that src contains only hexadecimal characters and that src has even length. If the input is malformed, Decode returns the number of bytes decoded before the error.

#### Example

Code:

```
src := []byte("48656c6c6f20476f7068657221")

dst := make([]byte, hex.DecodedLen(len(src)))
n, err := hex.Decode(dst, src)
if err != nil {
    log.Fatal(err)
}

fmt.Printf("%s\n", dst[:n])
```

Output:

```
Hello Gopher!
```

## func DecodeString

```
func DecodeString(s string) ([]byte, error)
```

DecodeString returns the bytes represented by the hexadecimal string s.

DecodeString expects that src contains only hexadecimal characters and that src has even length. If the input is malformed, DecodeString returns the bytes decoded before the error.

#### Example

Code:

```
const s = "48656c6c6f20476f7068657221"
decoded, err := hex.DecodeString(s)
if err != nil {
    log.Fatal(err)
}

fmt.Printf("%s\n", decoded)
```

Output:

```
Hello Gopher!
```

## func DecodedLen

```
func DecodedLen(x int) int
```

DecodedLen returns the length of a decoding of x source bytes. Specifically, it returns x / 2.

## func Dump

```
func Dump(data []byte) string
```

Dump returns a string that contains a hex dump of the given data. The format of the hex dump matches the output of `hexdump -C` on the command line.

#### Example

Code:

```
content := []byte("Go is an open source programming language.")

fmt.Printf("%s", hex.Dump(content))
```

Output:

```
00000000  47 6f 20 69 73 20 61 6e  20 6f 70 65 6e 20 73 6f  |Go is an open so|
00000010  75 72 63 65 20 70 72 6f  67 72 61 6d 6d 69 6e 67  |urce programming|
00000020  20 6c 61 6e 67 75 61 67  65 2e                    | language.|
```

## func Dumper

```
func Dumper(w io.Writer) io.WriteCloser
```

Dumper returns a io.WriteCloser that writes a hex dump of all written data to w. The format of the dump matches the output of `hexdump -C` on the command line.

#### Example

Code:

```
lines := []string{
    "Go is an open source programming language.",
    "\n",
    "We encourage all Go users to subscribe to golang-announce.",
}

stdoutDumper := hex.Dumper(os.Stdout)

defer stdoutDumper.Close()

for _, line := range lines {
    stdoutDumper.Write([]byte(line))
}
```

Output:

```
00000000  47 6f 20 69 73 20 61 6e  20 6f 70 65 6e 20 73 6f  |Go is an open so|
00000010  75 72 63 65 20 70 72 6f  67 72 61 6d 6d 69 6e 67  |urce programming|
00000020  20 6c 61 6e 67 75 61 67  65 2e 0a 57 65 20 65 6e  | language..We en|
00000030  63 6f 75 72 61 67 65 20  61 6c 6c 20 47 6f 20 75  |courage all Go u|
00000040  73 65 72 73 20 74 6f 20  73 75 62 73 63 72 69 62  |sers to subscrib|
00000050  65 20 74 6f 20 67 6f 6c  61 6e 67 2d 61 6e 6e 6f  |e to golang-anno|
00000060  75 6e 63 65 2e                                    |unce.|
```

## func Encode

```
func Encode(dst, src []byte) int
```

Encode encodes src into EncodedLen(len(src)) bytes of dst. As a convenience, it returns the number of bytes written to dst, but this value is always EncodedLen(len(src)). Encode implements hexadecimal encoding.

#### Example

Code:

```
src := []byte("Hello Gopher!")

dst := make([]byte, hex.EncodedLen(len(src)))
hex.Encode(dst, src)

fmt.Printf("%s\n", dst)
```

Output:

```
48656c6c6f20476f7068657221
```

## func EncodeToString

```
func EncodeToString(src []byte) string
```

EncodeToString returns the hexadecimal encoding of src.

#### Example

Code:

```
src := []byte("Hello")
encodedStr := hex.EncodeToString(src)

fmt.Printf("%s\n", encodedStr)
```

Output:

```
48656c6c6f
```

## func EncodedLen

```
func EncodedLen(n int) int
```

EncodedLen returns the length of an encoding of n source bytes. Specifically, it returns n * 2.

## func NewDecoder 1.10

```
func NewDecoder(r io.Reader) io.Reader
```

NewDecoder returns an io.Reader that decodes hexadecimal characters from r. NewDecoder expects that r contain only an even number of hexadecimal characters.

## func NewEncoder 1.10

```
func NewEncoder(w io.Writer) io.Writer
```

NewEncoder returns an io.Writer that writes lowercase hexadecimal characters to w.

## type InvalidByteError

InvalidByteError values describe errors resulting from an invalid byte in a hex string.

```
type InvalidByteError byte
```

### func (InvalidByteError) Error

```
func (e InvalidByteError) Error() string
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/encoding/hex/
