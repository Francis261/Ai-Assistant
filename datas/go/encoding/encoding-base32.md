# Package base32

Source: https://devdocs.io/go/encoding/base32/index

- import "encoding/base32"
- Overview
- Index
- Examples

## Overview

Package base32 implements base32 encoding as specified by RFC 4648.

## Index

- Constants
- Variables
- func NewDecoder(enc *Encoding, r io.Reader) io.Reader
- func NewEncoder(enc *Encoding, w io.Writer) io.WriteCloser
- type CorruptInputError
- func (e CorruptInputError) Error() string
- type Encoding
- func NewEncoding(encoder string) *Encoding
- func (enc *Encoding) AppendDecode(dst, src []byte) ([]byte, error)
- func (enc *Encoding) AppendEncode(dst, src []byte) []byte
- func (enc *Encoding) Decode(dst, src []byte) (n int, err error)
- func (enc *Encoding) DecodeString(s string) ([]byte, error)
- func (enc *Encoding) DecodedLen(n int) int
- func (enc *Encoding) Encode(dst, src []byte)
- func (enc *Encoding) EncodeToString(src []byte) string
- func (enc *Encoding) EncodedLen(n int) int
- func (enc Encoding) WithPadding(padding rune) *Encoding

### Examples

### Package files

base32.go

## Constants

```
const (
    StdPadding rune = '=' // Standard padding character
    NoPadding  rune = -1  // No padding
)
```

## Variables

HexEncoding is the “Extended Hex Alphabet” defined in RFC 4648. It is typically used in DNS.

```
var HexEncoding = NewEncoding("0123456789ABCDEFGHIJKLMNOPQRSTUV")
```

StdEncoding is the standard base32 encoding, as defined in RFC 4648.

```
var StdEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567")
```

## func NewDecoder

```
func NewDecoder(enc *Encoding, r io.Reader) io.Reader
```

NewDecoder constructs a new base32 stream decoder.

## func NewEncoder

```
func NewEncoder(enc *Encoding, w io.Writer) io.WriteCloser
```

NewEncoder returns a new base32 stream encoder. Data written to the returned writer will be encoded using enc and then written to w. Base32 encodings operate in 5-byte blocks; when finished writing, the caller must Close the returned encoder to flush any partially written blocks.

#### Example

Code:

```
input := []byte("foo\x00bar")
encoder := base32.NewEncoder(base32.StdEncoding, os.Stdout)
encoder.Write(input)
// Must close the encoder when finished to flush any partial blocks.
// If you comment out the following line, the last partial block "r"
// won't be encoded.
encoder.Close()
```

Output:

```
MZXW6ADCMFZA====
```

## type CorruptInputError

```
type CorruptInputError int64
```

### func (CorruptInputError) Error

```
func (e CorruptInputError) Error() string
```

## type Encoding

An Encoding is a radix 32 encoding/decoding scheme, defined by a 32-character alphabet. The most common is the "base32" encoding introduced for SASL GSSAPI and standardized in RFC 4648. The alternate "base32hex" encoding is used in DNSSEC.

```
type Encoding struct {
    // contains filtered or unexported fields
}
```

### func NewEncoding

```
func NewEncoding(encoder string) *Encoding
```

NewEncoding returns a new padded Encoding defined by the given alphabet, which must be a 32-byte string that contains unique byte values and does not contain the padding character or CR / LF ('\r', '\n'). The alphabet is treated as a sequence of byte values without any special treatment for multi-byte UTF-8. The resulting Encoding uses the default padding character ('='), which may be changed or disabled via Encoding.WithPadding.

### func (*Encoding) AppendDecode 1.22

```
func (enc *Encoding) AppendDecode(dst, src []byte) ([]byte, error)
```

AppendDecode appends the base32 decoded src to dst and returns the extended buffer. If the input is malformed, it returns the partially decoded src and an error. New line characters (\r and \n) are ignored.

### func (*Encoding) AppendEncode 1.22

```
func (enc *Encoding) AppendEncode(dst, src []byte) []byte
```

AppendEncode appends the base32 encoded src to dst and returns the extended buffer.

### func (*Encoding) Decode

```
func (enc *Encoding) Decode(dst, src []byte) (n int, err error)
```

Decode decodes src using the encoding enc. It writes at most Encoding.DecodedLen(len(src)) bytes to dst and returns the number of bytes written. The caller must ensure that dst is large enough to hold all the decoded data. If src contains invalid base32 data, it will return the number of bytes successfully written and CorruptInputError. Newline characters (\r and \n) are ignored.

#### Example

Code:

```
str := "JBSWY3DPFQQHO33SNRSCC==="
dst := make([]byte, base32.StdEncoding.DecodedLen(len(str)))
n, err := base32.StdEncoding.Decode(dst, []byte(str))
if err != nil {
    fmt.Println("decode error:", err)
    return
}
dst = dst[:n]
fmt.Printf("%q\n", dst)
```

Output:

```
"Hello, world!"
```

### func (*Encoding) DecodeString

```
func (enc *Encoding) DecodeString(s string) ([]byte, error)
```

DecodeString returns the bytes represented by the base32 string s. If the input is malformed, it returns the partially decoded data and CorruptInputError. New line characters (\r and \n) are ignored.

#### Example

Code:

```
str := "ONXW2ZJAMRQXIYJAO5UXI2BAAAQGC3TEEDX3XPY="
data, err := base32.StdEncoding.DecodeString(str)
if err != nil {
    fmt.Println("error:", err)
    return
}
fmt.Printf("%q\n", data)
```

Output:

```
"some data with \x00 and \ufeff"
```

### func (*Encoding) DecodedLen

```
func (enc *Encoding) DecodedLen(n int) int
```

DecodedLen returns the maximum length in bytes of the decoded data corresponding to n bytes of base32-encoded data.

### func (*Encoding) Encode

```
func (enc *Encoding) Encode(dst, src []byte)
```

Encode encodes src using the encoding enc, writing Encoding.EncodedLen(len(src)) bytes to dst.

The encoding pads the output to a multiple of 8 bytes, so Encode is not appropriate for use on individual blocks of a large data stream. Use NewEncoder instead.

#### Example

Code:

```
data := []byte("Hello, world!")
dst := make([]byte, base32.StdEncoding.EncodedLen(len(data)))
base32.StdEncoding.Encode(dst, data)
fmt.Println(string(dst))
```

Output:

```
JBSWY3DPFQQHO33SNRSCC===
```

### func (*Encoding) EncodeToString

```
func (enc *Encoding) EncodeToString(src []byte) string
```

EncodeToString returns the base32 encoding of src.

#### Example

Code:

```
data := []byte("any + old & data")
str := base32.StdEncoding.EncodeToString(data)
fmt.Println(str)
```

Output:

```
MFXHSIBLEBXWYZBAEYQGIYLUME======
```

### func (*Encoding) EncodedLen

```
func (enc *Encoding) EncodedLen(n int) int
```

EncodedLen returns the length in bytes of the base32 encoding of an input buffer of length n.

### func (Encoding) WithPadding 1.9

```
func (enc Encoding) WithPadding(padding rune) *Encoding
```

WithPadding creates a new encoding identical to enc except with a specified padding character, or NoPadding to disable padding. The padding character must not be '\r' or '\n', must not be contained in the encoding's alphabet, must not be negative, and must be a rune equal or below '\xff'. Padding characters above '\x7f' are encoded as their exact byte value rather than using the UTF-8 representation of the codepoint.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/encoding/base32/
